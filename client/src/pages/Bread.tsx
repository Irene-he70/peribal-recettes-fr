
import { useState, useMemo } from 'react';
import { breadRecipes, BreadRecipe } from '@/data/bread-recipes';
import BreadFilterSidebar from '@/components/BreadFilterSidebar';
import { Heart, X, Printer, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Bread() {
  const [selectedRecipe, setSelectedRecipe] = useState<BreadRecipe | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [filters, setFilters] = useState({
    category: 'all' as 'all' | 'bread' | 'rolls' | 'flatbread' | 'pancakes',
    type: 'all' as 'all' | 'vegetarian' | 'vegan',
    prepTime: 45,
    onlyFavorites: false,
  });

  const filteredRecipes = useMemo(() => {
    return breadRecipes.filter(recipe => {
      if (filters.category !== 'all' && recipe.category !== filters.category) return false;
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
    localStorage.setItem('peribal-bread-favorites', JSON.stringify(Array.from(newFavorites)));
  };

  // Load favorites from localStorage on mount
  const [mounted, setMounted] = useState(false);
  if (!mounted) {
    const saved = localStorage.getItem('peribal-bread-favorites');
    if (saved) {
      setFavorites(new Set(JSON.parse(saved)));
    }
    setMounted(true);
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex gap-6 container py-8">
        {/* Main Content */}
        <div className="flex-1">
          {/* Recipe Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map(recipe => (
              <BreadRecipeCard
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
        <BreadFilterSidebar
          filters={filters}
          onFiltersChange={setFilters}
          recipeCount={filteredRecipes.length}
        />
      </div>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <BreadRecipeModal
          recipe={selectedRecipe}
          isFavorite={favorites.has(selectedRecipe.id)}
          onFavoriteToggle={() => toggleFavorite(selectedRecipe.id)}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}

// Bread Recipe Card Component
function BreadRecipeCard({
  recipe,
  isFavorite,
  onFavoriteToggle,
  onClick,
}: {
  recipe: BreadRecipe;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
  onClick: () => void;
}) {
  const categoryLabel: Record<string, string> = {
    bread: '🍞 Brot',
    rolls: '🥐 Brötchen',
    flatbread: '🫓 Fladenbrot',
    pancakes: '🥞 Pancakes',
  };

  const typeLabel: Record<string, string> = {
    vegetarian: '🥬 Vegetarisch',
    vegan: '🌱 Vegan',
  };

  return (
    <div
      className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteToggle();
          }}
          className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-all"
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              isFavorite ? 'fill-primary text-primary' : 'text-muted-foreground'
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground text-lg mb-2 line-clamp-2">
          {recipe.name}
        </h3>

        {/* Meta Information */}
        <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground flex-wrap">
          <span className="inline-block px-2 py-1 bg-muted rounded text-xs font-medium">
            {categoryLabel[recipe.category]}
          </span>
          <span className="inline-block px-2 py-1 bg-muted rounded text-xs font-medium">
            {typeLabel[recipe.type]}
          </span>
          <span className="inline-block px-2 py-1 bg-muted rounded text-xs font-medium">
            ⏱️ {recipe.prepTime} Min
          </span>
        </div>

        {/* Nutrition Summary */}
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="text-center p-2 bg-muted rounded">
            <div className="font-semibold text-primary">{recipe.nutrition.protein}g</div>
            <div className="text-muted-foreground">Protein</div>
          </div>
          <div className="text-center p-2 bg-muted rounded">
            <div className="font-semibold text-primary">{recipe.nutrition.carbs}g</div>
            <div className="text-muted-foreground">KH</div>
          </div>
          <div className="text-center p-2 bg-muted rounded">
            <div className="font-semibold text-primary">{recipe.nutrition.fat}g</div>
            <div className="text-muted-foreground">Fett</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Bread Recipe Modal Component
function BreadRecipeModal({
  recipe,
  isFavorite,
  onFavoriteToggle,
  onClose,
}: {
  recipe: BreadRecipe;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);

  const categoryLabel: Record<string, string> = {
    bread: '🍞 Brot',
    rolls: '🥐 Brötchen',
    flatbread: '🫓 Fladenbrot',
    pancakes: '🥞 Pancakes',
  };

  const typeLabel: Record<string, string> = {
    vegetarian: '🥬 Vegetarisch',
    vegan: '🌱 Vegan',
  };

  const handlePrint = () => {
    const printWindow = window.open('', '', 'width=800,height=600');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${recipe.name}</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; color: #333; }
              h1 { color: #2F5903; border-bottom: 2px solid #B8C34B; padding-bottom: 10px; }
              h2 { color: #2F5903; margin-top: 20px; }
              table { width: 100%; border-collapse: collapse; margin: 10px 0; }
              th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
              th { background-color: #C8CD8A; }
              .nutrition { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 20px 0; }
              .nutrition-item { padding: 10px; background: #F5F5F3; border-radius: 5px; text-align: center; }
              .nutrition-item strong { color: #2F5903; display: block; font-size: 18px; }
              .nutrition-item small { color: #666; }
              img { max-width: 100%; height: auto; margin: 20px 0; }
              ol { line-height: 1.8; }
              .info { background: #F5F5F3; padding: 10px; border-radius: 5px; margin: 10px 0; }
            </style>
          </head>
          <body>
            <img src="${recipe.image}" alt="${recipe.name}" style="max-width: 400px;">
            <h1>${recipe.name}</h1>
            <div class="info">
              <p><strong>Kategorie:</strong> ${categoryLabel[recipe.category]}</p>
              <p><strong>Typ:</strong> ${typeLabel[recipe.type]}</p>
              <p><strong>Zubereitungszeit:</strong> ${recipe.prepTime} Minuten</p>
              <p><strong>Portionen:</strong> ${recipe.servings}</p>
              <p><strong>Haltbarkeit:</strong> ${recipe.shelfLife}</p>
              <p><strong>Gefrierbar:</strong> ${recipe.freezable ? 'Ja' : 'Nein'}</p>
            </div>
            
            <h2>Nährwertangaben (pro Portion)</h2>
            <div class="nutrition">
              <div class="nutrition-item">
                <strong>${recipe.nutrition.protein}g</strong>
                <small>Protein</small>
              </div>
              <div class="nutrition-item">
                <strong>${recipe.nutrition.carbs}g</strong>
                <small>Kohlenhydrate</small>
              </div>
              <div class="nutrition-item">
                <strong>${recipe.nutrition.fat}g</strong>
                <small>Fett</small>
              </div>
              <div class="nutrition-item">
                <strong>${recipe.nutrition.fiber}g</strong>
                <small>Ballaststoffe</small>
              </div>
            </div>
            <p><strong>Kalorien:</strong> ${recipe.nutrition.calories} kcal</p>
            ${recipe.nutrition.specialNutrients.length > 0 ? `<p><strong>Besondere Nährstoffe:</strong> ${recipe.nutrition.specialNutrients.join(', ')}</p>` : ''}
            ${recipe.alternativeMehle && recipe.alternativeMehle.length > 0 ? `<p><strong>Mehle austauschbar:</strong> ${recipe.alternativeMehle.join('; ')}</p>` : ''}
            
            <h2>Zutaten</h2>
            <ul>
              ${recipe.ingredients.map(ing => `<li>${ing.amount} ${ing.name}</li>`).join('')}
            </ul>
            
            <h2>Zubereitung</h2>
            <ol>
              ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
            </ol>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const handleCopyIngredients = () => {
    const ingredientsList = recipe.ingredients
      .map(ing => `${ing.amount} ${ing.name}`)
      .join('\n');
    navigator.clipboard.writeText(ingredientsList);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-all"
          >
            <X className="h-5 w-5 text-foreground" />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h1 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display' }}>
              {recipe.name}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[calc(100vh-300px)] overflow-y-auto">
          {/* Meta Info */}
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border flex-wrap">
            <span className="inline-block px-3 py-1 bg-muted rounded-full text-sm font-medium">
              {categoryLabel[recipe.category]}
            </span>
            <span className="inline-block px-3 py-1 bg-muted rounded-full text-sm font-medium">
              {typeLabel[recipe.type]}
            </span>
            <span className="inline-block px-3 py-1 bg-muted rounded-full text-sm font-medium">
              ⏱️ {recipe.prepTime} Min
            </span>
            <span className="text-sm text-muted-foreground">
              {recipe.nutrition.calories} kcal
            </span>
          </div>

          {/* Info Box */}
          <div className="bg-muted/30 p-4 rounded-lg mb-6">
            <p className="text-sm"><strong>Portionen:</strong> {recipe.servings}</p>
            <p className="text-sm"><strong>Haltbarkeit:</strong> {recipe.shelfLife}</p>
            <p className="text-sm"><strong>Gefrierbar:</strong> {recipe.freezable ? '✅ Ja' : '❌ Nein'}</p>
          </div>

          {/* Nutrition Grid */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            <div className="text-center p-3 bg-muted rounded">
              <div className="text-sm text-muted-foreground">Protein</div>
              <div className="text-lg font-bold text-primary">{recipe.nutrition.protein}g</div>
            </div>
            <div className="text-center p-3 bg-muted rounded">
              <div className="text-sm text-muted-foreground">KH</div>
              <div className="text-lg font-bold text-primary">{recipe.nutrition.carbs}g</div>
            </div>
            <div className="text-center p-3 bg-muted rounded">
              <div className="text-sm text-muted-foreground">Fett</div>
              <div className="text-lg font-bold text-primary">{recipe.nutrition.fat}g</div>
            </div>
            <div className="text-center p-3 bg-muted rounded">
              <div className="text-sm text-muted-foreground">Ballaststoffe</div>
              <div className="text-lg font-bold text-primary">{recipe.nutrition.fiber}g</div>
            </div>
          </div>

          {/* Special Nutrients */}
          {recipe.nutrition.specialNutrients.length > 0 && (
            <div className="mb-6 p-3 bg-secondary/10 rounded">
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Besondere Nährstoffe:</strong>
              </p>
              <div className="flex flex-wrap gap-2">
                {recipe.nutrition.specialNutrients.map(nutrient => (
                  <span
                    key={nutrient}
                    className="inline-block px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                  >
                    {nutrient}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Alternative Mehle */}
          {recipe.alternativeMehle && recipe.alternativeMehle.length > 0 && (
            <div className="mb-6 p-3 bg-accent/10 rounded">
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Mehle austauschbar:</strong>
              </p>
              <ul className="text-sm space-y-1">
                {recipe.alternativeMehle.map((mehle, idx) => (
                  <li key={idx} className="text-foreground">• {mehle}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Ingredients */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-foreground mb-3">Zutaten</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, idx) => (
                <li key={idx} className="flex gap-3 text-sm">
                  <span className="text-primary font-semibold min-w-20">{ingredient.amount}</span>
                  <span className="text-foreground">{ingredient.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-foreground mb-3">Zubereitung</h2>
            <ol className="space-y-2 list-decimal list-inside">
              {recipe.instructions.map((instruction, idx) => (
                <li key={idx} className="text-sm text-foreground">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-border p-4 flex gap-3 bg-muted/30">
          <Button
            variant="outline"
            onClick={onFavoriteToggle}
            className="gap-2 flex-1"
          >
            <Heart
              className={`h-4 w-4 ${
                isFavorite ? 'fill-primary text-primary' : 'text-muted-foreground'
              }`}
            />
            {isFavorite ? 'Favorit' : 'Zu Favoriten'}
          </Button>
          <Button
            variant="outline"
            onClick={handleCopyIngredients}
            className="gap-2 flex-1"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Kopiert!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Zutaten kopieren
              </>
            )}
          </Button>
          <Button
            onClick={handlePrint}
            className="gap-2 flex-1 bg-primary hover:bg-primary/90"
          >
            <Printer className="h-4 w-4" />
            Drucken
          </Button>
        </div>
      </div>
    </div>
  );
}
