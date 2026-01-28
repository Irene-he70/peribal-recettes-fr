
import { Heart } from 'lucide-react';
import { Recipe } from '@/data/recipes';
import { Button } from '@/components/ui/button';

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
  onClick: () => void;
}

export default function RecipeCard({
  recipe,
  isFavorite,
  onFavoriteToggle,
  onClick,
}: RecipeCardProps) {
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
        <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
          <span className="inline-block px-2 py-1 bg-muted rounded text-xs font-medium">
            {recipe.prepTime} Min
          </span>
          <span className="inline-block px-2 py-1 bg-muted rounded text-xs font-medium">
            {recipe.type === 'sweet' ? '🍰 Sucré' : '🥗 Salé'}
          </span>
        </div>

        {/* Nutrition Summary */}
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="text-center p-2 bg-muted rounded">
            <div className="font-semibold text-primary">{recipe.nutrition.protein}g</div>
            <div className="text-muted-foreground">Protéine</div>
          </div>
          <div className="text-center p-2 bg-muted rounded">
            <div className="font-semibold text-primary">{recipe.nutrition.carbs}g</div>
            <div className="text-muted-foreground">Gluc.</div>
          </div>
          <div className="text-center p-2 bg-muted rounded">
            <div className="font-semibold text-primary">{recipe.nutrition.fat}g</div>
            <div className="text-muted-foreground">Graisse</div>
          </div>
        </div>
      </div>
    </div>
  );
}
