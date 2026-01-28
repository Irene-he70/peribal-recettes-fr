
import { useState } from 'react';
import { X, Heart, Printer, Copy, Check } from 'lucide-react';
import { Recipe } from '@/data/recipes';
import { Button } from '@/components/ui/button';

interface RecipeModalProps {
  recipe: Recipe;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
  onClose: () => void;
}

export default function RecipeModal({
  recipe,
  isFavorite,
  onFavoriteToggle,
  onClose,
}: RecipeModalProps) {
  const [copied, setCopied] = useState(false);

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
              .nutrition { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 20px 0; }
              .nutrition-item { padding: 10px; background: #F5F5F3; border-radius: 5px; text-align: center; }
              .nutrition-item strong { color: #2F5903; display: block; font-size: 18px; }
              .nutrition-item small { color: #666; }
              img { max-width: 100%; height: auto; margin: 20px 0; }
              ol { line-height: 1.8; }
            </style>
          </head>
          <body>
            <img src="${recipe.image}" alt="${recipe.name}" style="max-width: 400px;">
            <h1>${recipe.name}</h1>
            <p><strong>Temps de préparation:</strong> ${recipe.prepTime} minutes</p>
            <p><strong>Type:</strong> ${recipe.type === 'sweet' ? 'Sucré' : 'Salé'}</p>
            
            <h2>Valeurs nutritionnelles</h2>
            <div class="nutrition">
              <div class="nutrition-item">
                <strong>${recipe.nutrition.protein}g</strong>
                <small>Protéines</small>
              </div>
              <div class="nutrition-item">
                <strong>${recipe.nutrition.carbs}g</strong>
                <small>Glucides</small>
              </div>
              <div class="nutrition-item">
                <strong>${recipe.nutrition.fat}g</strong>
                <small>Graisses</small>
              </div>
            </div>
            <p><strong>Calories:</strong> ${recipe.nutrition.calories} kcal</p>
            <p><strong>Fibres:</strong> ${recipe.nutrition.fiber}g</p>
            ${recipe.nutrition.specialNutrients.length > 0 ? `<p><strong>Nutriments spéciaux:</strong> ${recipe.nutrition.specialNutrients.join(', ')}</p>` : ''}
            
            <h2>Ingrédients</h2>
            <ul>
              ${recipe.ingredients.map(ing => `<li>${ing.amount} ${ing.name}</li>`).join('')}
            </ul>
            
            <h2>Instructions</h2>
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
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
            <span className="inline-block px-3 py-1 bg-muted rounded-full text-sm font-medium">
              ⏱️ {recipe.prepTime} Min
            </span>
            <span className="inline-block px-3 py-1 bg-muted rounded-full text-sm font-medium">
              {recipe.type === 'sweet' ? '🍰 Sucré' : '🥗 Salé'}
            </span>
            <span className="text-sm text-muted-foreground">
              {recipe.nutrition.calories} kcal
            </span>
          </div>

          {/* Nutrition Grid */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            <div className="text-center p-3 bg-muted rounded">
              <div className="text-sm text-muted-foreground">Protéines</div>
              <div className="text-lg font-bold text-primary">{recipe.nutrition.protein}g</div>
            </div>
            <div className="text-center p-3 bg-muted rounded">
              <div className="text-sm text-muted-foreground">Gluc.</div>
              <div className="text-lg font-bold text-primary">{recipe.nutrition.carbs}g</div>
            </div>
            <div className="text-center p-3 bg-muted rounded">
              <div className="text-sm text-muted-foreground">Graisses</div>
              <div className="text-lg font-bold text-primary">{recipe.nutrition.fat}g</div>
            </div>
            <div className="text-center p-3 bg-muted rounded">
              <div className="text-sm text-muted-foreground">Fibres</div>
              <div className="text-lg font-bold text-primary">{recipe.nutrition.fiber}g</div>
            </div>
          </div>

          {/* Special Nutrients */}
          {recipe.nutrition.specialNutrients.length > 0 && (
            <div className="mb-6 p-3 bg-secondary/10 rounded">
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Nutriments spéciaux:</strong>
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

          {/* Ingredients */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-foreground mb-3">Ingrédients</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, idx) => (
                <li key={idx} className="flex gap-3 text-sm">
                  <span className="text-primary font-semibold min-w-16">{ingredient.amount}</span>
                  <span className="text-foreground">{ingredient.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-foreground mb-3">Instructions</h2>
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
            {isFavorite ? 'Favori' : 'Ajouter aux favoris'}
          </Button>
          <Button
            variant="outline"
            onClick={handleCopyIngredients}
            className="gap-2 flex-1"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copié!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copier les ingrédients
              </>
            )}
          </Button>
          <Button
            onClick={handlePrint}
            className="gap-2 flex-1 bg-primary hover:bg-primary/90"
          >
            <Printer className="h-4 w-4" />
            Imprimer
          </Button>
        </div>
      </div>
    </div>
  );
}
