import { useState, useMemo } from 'react';
import { Heart, Clock, Flame, Leaf, Download, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { dinnerRecipes } from '@/data/dinner-recipes';

export default function Dinner() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);
  const [proteinFilter, setProteinFilter] = useState<'all' | 'animal' | 'plant'>('all');
  const [tempFilter, setTempFilter] = useState<'all' | 'warm' | 'cold'>('all');
  const [timeFilter, setTimeFilter] = useState<number>(30);
  const [shoppingList, setShoppingList] = useState<any[]>([]);
  const [showShoppingList, setShowShoppingList] = useState(false);

  const filteredRecipes = useMemo(() => {
    return dinnerRecipes.filter((recipe) => {
      const matchesProtein = proteinFilter === 'all' || recipe.type === proteinFilter;
      const matchesTemp = tempFilter === 'all' || recipe.temperature === tempFilter;
      const matchesTime = recipe.prepTime <= timeFilter;
      return matchesProtein && matchesTemp && matchesTime;
    });
  }, [proteinFilter, tempFilter, timeFilter]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const addToShoppingList = (recipe: any) => {
    setShoppingList((prev) => [...prev, ...recipe.ingredients]);
    alert(`${recipe.name} zur Einkaufsliste hinzugefügt!`);
  };

  const downloadShoppingList = () => {
    const uniqueItems = Array.from(
      new Map(shoppingList.map((item) => [item.name, item])).values()
    );
    const text = uniqueItems.map((item) => `☐ ${item.amount} ${item.name}`).join('\n');
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', 'einkaufsliste.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C8CD8A]/10 to-[#B8C34B]/10 py-12">
      <div className="container">
        {/* Filter Section */}
        <div className="mb-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-[#2F5903] mb-6">Filter</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Protein Type Filter */}
            <div>
              <label className="block text-sm font-semibold text-[#2F5903] mb-3">
                Protein-Typ
              </label>
              <div className="space-y-2">
                {[
                  { value: 'all', label: 'Alle Rezepte' },
                  { value: 'animal', label: '🥬 Tierisches Protein' },
                  { value: 'plant', label: '🌱 Pflanzliches Protein' },
                ].map((option) => (
                  <label key={option.value} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="protein"
                      value={option.value}
                      checked={proteinFilter === option.value}
                      onChange={(e) => setProteinFilter(e.target.value as any)}
                      className="w-4 h-4 text-[#2F5903]"
                    />
                    <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Temperature Filter */}
            <div>
              <label className="block text-sm font-semibold text-[#2F5903] mb-3">
                Temperatur
              </label>
              <div className="space-y-2">
                {[
                  { value: 'all', label: 'Alle Gerichte' },
                  { value: 'warm', label: '🔥 Warm' },
                  { value: 'cold', label: '❄️ Kalt' },
                ].map((option) => (
                  <label key={option.value} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="temperature"
                      value={option.value}
                      checked={tempFilter === option.value}
                      onChange={(e) => setTempFilter(e.target.value as any)}
                      className="w-4 h-4 text-[#2F5903]"
                    />
                    <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Time Filter */}
            <div>
              <label className="block text-sm font-semibold text-[#2F5903] mb-3">
                Zubereitungszeit: bis {timeFilter} Min
              </label>
              <input
                type="range"
                min="5"
                max="60"
                value={timeFilter}
                onChange={(e) => setTimeFilter(Number(e.target.value))}
                className="w-full h-2 bg-[#C8CD8A] rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-2">
                <span>5 Min</span>
                <span>60 Min</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <Button
              onClick={() => {
                setProteinFilter('all');
                setTempFilter('all');
                setTimeFilter(60);
              }}
              variant="outline"
              className="border-[#2F5903] text-[#2F5903]"
            >
              Filter zurücksetzen
            </Button>
            {shoppingList.length > 0 && (
              <Button
                onClick={downloadShoppingList}
                className="bg-[#2F5903] hover:bg-[#1f3a02]"
              >
                <Download className="w-4 h-4 mr-2" />
                Einkaufsliste ({shoppingList.length} Zutaten)
              </Button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-center">
          <p className="text-lg font-semibold text-[#2F5903]">
            {filteredRecipes.length} Rezept{filteredRecipes.length !== 1 ? 'e' : ''} gefunden
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => toggleFavorite(recipe.id)}
                  className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.includes(recipe.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-400'
                    }`}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#2F5903] mb-2">{recipe.name}</h3>

                {/* Type Badge */}
                <div className="flex gap-2 mb-3">
                  <span className="inline-block px-3 py-1 bg-[#C8CD8A] text-[#2F5903] text-xs font-semibold rounded-full">
                    {recipe.type === 'animal' ? '🥬 Tierisch' : '🌱 Pflanzlich'}
                  </span>
                  <span className="inline-block px-3 py-1 bg-[#B8C34B] text-white text-xs font-semibold rounded-full">
                    {recipe.temperature === 'warm' ? '🔥 Warm' : '❄️ Kalt'}
                  </span>
                </div>

                {/* Quick Info */}
                <div className="flex gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-[#2F5903]" />
                    <span>{recipe.prepTime} Min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Flame className="w-4 h-4 text-[#2F5903]" />
                    <span>{recipe.nutrition.protein}g Protein</span>
                  </div>
                </div>

                {/* Nutrition Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {recipe.nutrition.carbs}g KH
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {recipe.nutrition.fat}g Fett
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <Button
                    onClick={() => setSelectedRecipe(recipe)}
                    className="flex-1 bg-[#2F5903] hover:bg-[#1f3a02] text-white"
                  >
                    Details
                  </Button>
                  <Button
                    onClick={() => addToShoppingList(recipe)}
                    variant="outline"
                    className="flex-1 border-[#2F5903] text-[#2F5903]"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              Keine Rezepte gefunden. Bitte passen Sie die Filter an.
            </p>
          </div>
        )}
      </div>

      {/* Recipe Detail Modal */}
      <Dialog open={!!selectedRecipe} onOpenChange={() => setSelectedRecipe(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedRecipe && (
            <>
              <DialogHeader>
                <DialogTitle className="text-[#2F5903]">{selectedRecipe.name}</DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Image */}
                <img
                  src={selectedRecipe.image}
                  alt={selectedRecipe.name}
                  className="w-full h-64 object-cover rounded-lg"
                />

                {/* Type Info */}
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-[#C8CD8A] text-[#2F5903] text-sm font-semibold rounded-full">
                    {selectedRecipe.type === 'animal' ? '🥬 Tierisches Protein' : '🌱 Pflanzliches Protein'}
                  </span>
                  <span className="px-3 py-1 bg-[#B8C34B] text-white text-sm font-semibold rounded-full">
                    {selectedRecipe.temperature === 'warm' ? '🔥 Warm' : '❄️ Kalt'}
                  </span>
                </div>

                {/* Nutrition */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-[#C8CD8A]/20 p-3 rounded-lg">
                    <p className="text-xs text-gray-600">Protein</p>
                    <p className="text-lg font-bold text-[#2F5903]">{selectedRecipe.nutrition.protein}g</p>
                  </div>
                  <div className="bg-[#B8C34B]/20 p-3 rounded-lg">
                    <p className="text-xs text-gray-600">Kohlenhydrate</p>
                    <p className="text-lg font-bold text-[#2F5903]">{selectedRecipe.nutrition.carbs}g</p>
                  </div>
                  <div className="bg-[#C8CD8A]/20 p-3 rounded-lg">
                    <p className="text-xs text-gray-600">Fett</p>
                    <p className="text-lg font-bold text-[#2F5903]">{selectedRecipe.nutrition.fat}g</p>
                  </div>
                  <div className="bg-[#B8C34B]/20 p-3 rounded-lg">
                    <p className="text-xs text-gray-600">Kalorien</p>
                    <p className="text-lg font-bold text-[#2F5903]">{selectedRecipe.nutrition.calories}</p>
                  </div>
                </div>

                {/* Ingredients */}
                <div>
                  <h3 className="font-bold text-[#2F5903] mb-3">Zutaten ({selectedRecipe.servings} Portionen)</h3>
                  <ul className="space-y-2">
                    {selectedRecipe.ingredients.map((ing: any, idx: number) => (
                      <li key={idx} className="text-sm text-gray-700">
                        <span className="font-semibold">{ing.amount}</span> {ing.name}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instructions */}
                <div>
                  <h3 className="font-bold text-[#2F5903] mb-3">Zubereitung ({selectedRecipe.prepTime} Min)</h3>
                  <ol className="space-y-2">
                    {selectedRecipe.instructions.map((instr: string, idx: number) => (
                      <li key={idx} className="text-sm text-gray-700">
                        <span className="font-semibold text-[#2F5903]">{idx + 1}.</span> {instr}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Special Nutrients */}
                <div>
                  <h3 className="font-bold text-[#2F5903] mb-3">Besondere Nährstoffe</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedRecipe.nutrition.specialNutrients.map((nutrient: string, idx: number) => (
                      <span key={idx} className="text-xs bg-[#C8CD8A] text-[#2F5903] px-3 py-1 rounded-full">
                        {nutrient}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Storage Info */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Haltbarkeit:</span> {selectedRecipe.shelfLife}
                    {selectedRecipe.freezable && ' | Gefrierbar: Ja'}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    onClick={() => addToShoppingList(selectedRecipe)}
                    className="flex-1 bg-[#2F5903] hover:bg-[#1f3a02]"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Zur Einkaufsliste
                  </Button>
                  <Button
                    onClick={() => window.print()}
                    variant="outline"
                    className="flex-1 border-[#2F5903] text-[#2F5903]"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Drucken
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
