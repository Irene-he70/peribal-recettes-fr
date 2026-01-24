
import { useState, useMemo } from 'react';
import { X, Copy, Check } from 'lucide-react';
import { recipes } from '@/data/recipes';
import { Button } from '@/components/ui/button';

interface ShoppingListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShoppingListModal({ isOpen, onClose }: ShoppingListModalProps) {
  const [copied, setCopied] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  // Get all unique ingredients from all recipes
  const allIngredients = useMemo(() => {
    const ingredientMap = new Map<string, string>();
    recipes.forEach(recipe => {
      recipe.ingredients.forEach(ing => {
        const key = ing.name.toLowerCase();
        if (!ingredientMap.has(key)) {
          ingredientMap.set(key, `${ing.amount} ${ing.name}`);
        }
      });
    });
    return Array.from(ingredientMap.values()).sort();
  }, []);

  const handleCopy = () => {
    const listText = allIngredients.join('\n');
    navigator.clipboard.writeText(listText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleItem = (item: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(item)) {
      newChecked.delete(item);
    } else {
      newChecked.add(item);
    }
    setCheckedItems(newChecked);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'Playfair Display' }}>
            🛒 Einkaufsliste
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <p className="text-sm text-muted-foreground mb-4">
            Alle Zutaten aus den 28 Rezepten:
          </p>

          <div className="space-y-2">
            {allIngredients.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 hover:bg-muted rounded-lg transition-colors cursor-pointer"
                onClick={() => toggleItem(item)}
              >
                <input
                  type="checkbox"
                  checked={checkedItems.has(item)}
                  onChange={() => toggleItem(item)}
                  className="w-4 h-4 cursor-pointer accent-primary rounded"
                />
                <span
                  className={`text-sm flex-1 ${
                    checkedItems.has(item)
                      ? 'line-through text-muted-foreground'
                      : 'text-foreground'
                  }`}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border p-4 flex gap-3 bg-muted/30">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            Schließen
          </Button>
          <Button
            onClick={handleCopy}
            className="flex-1 gap-2 bg-primary hover:bg-primary/90"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Kopiert!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Liste kopieren
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
