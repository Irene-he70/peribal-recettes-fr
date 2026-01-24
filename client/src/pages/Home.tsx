
import { useState, useMemo } from 'react';
import { recipes, Recipe } from '@/data/recipes';
import RecipeCard from '@/components/RecipeCard';
import RecipeModal from '@/components/RecipeModal';
import FilterSidebar from '@/components/FilterSidebar';
import Header from '@/components/Header';

export default function Home() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [filters, setFilters] = useState({
    type: 'all' as 'all' | 'sweet' | 'savory',
    prepTime: 30,
    onlyFavorites: false,
  });

  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      if (filters.type !== 'all' && recipe.type !== filters.type) return false;
      if (recipe.prepTime > filters.prepTime) return false;
      if (filters.onlyFavorites && !favorites.has(recipe.id)) return false;
      return true;
    });
  }, [filters, favorites]);

  const toggleFavorite = (recipeId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(recipeId)) {
      newFavorites.delete(recipeId);
    } else {
      newFavorites.add(recipeId);
    }
    setFavorites(newFavorites);
    localStorage.setItem('peribal-favorites', JSON.stringify(Array.from(newFavorites)));
  };

  // Load favorites from localStorage on mount
  const [mounted, setMounted] = useState(false);
  if (!mounted) {
    const saved = localStorage.getItem('peribal-favorites');
    if (saved) {
      setFavorites(new Set(JSON.parse(saved)));
    }
    setMounted(true);
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex gap-6 container py-8">
        {/* Main Content */}
        <div className="flex-1">
          {/* Recipe Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map(recipe => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                isFavorite={favorites.has(recipe.id)}
                onFavoriteToggle={() => toggleFavorite(recipe.id)}
                onClick={() => setSelectedRecipe(recipe)}
              />
            ))}
          </div>

          {filteredRecipes.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg">
                Keine Rezepte gefunden. Versuchen Sie, die Filter anzupassen.
              </p>
            </div>
          )}
        </div>

        {/* Filter Sidebar */}
        <FilterSidebar
          filters={filters}
          onFiltersChange={setFilters}
          recipeCount={filteredRecipes.length}
        />
      </div>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          isFavorite={favorites.has(selectedRecipe.id)}
          onFavoriteToggle={() => toggleFavorite(selectedRecipe.id)}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}
