import React from 'react';
import { Bookmark, ShieldCheck, ChefHat, Clock, Flame, Users } from 'lucide-react';
import { RecipeArticle } from '../types/recipe';
import { handleImageFallback } from '../utils/imageUtils';

interface RecipeCardProps {
  recipe: RecipeArticle;
  onSelect: (recipe: RecipeArticle) => void;
  isSaved: boolean;
  onToggleSave: (recipeId: string, e: React.MouseEvent) => void;
  layout?: 'grid' | 'horizontal';
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  onSelect,
  isSaved,
  onToggleSave,
  layout = 'grid',
}) => {
  if (layout === 'horizontal') {
    return (
      <article
        onClick={() => onSelect(recipe)}
        className="healthline-card p-3 sm:p-4 cursor-pointer flex flex-col sm:flex-row gap-4 group transition-all"
      >
        <a
          href={`/recipe/${recipe.slug}`}
          onClick={(e) => {
            e.preventDefault();
            onSelect(recipe);
          }}
          className="relative aspect-[16/9] sm:w-48 sm:aspect-square shrink-0 overflow-hidden rounded-lg bg-slate-100 block"
        >
          <img
            src={recipe.imageUrl}
            alt={recipe.imageAlt}
            onError={(e) => handleImageFallback(e, recipe.categoryId)}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </a>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <a
                href={`/category/${recipe.categoryId}`}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="text-[11px] font-bold uppercase tracking-wider text-amber-600 hover:underline"
              >
                {recipe.categoryName}
              </a>
              <button
                onClick={(e) => onToggleSave(recipe.id, e)}
                className="text-slate-400 hover:text-amber-600 p-1"
                title={isSaved ? 'Remove from saved' : 'Save recipe'}
              >
                <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-500 text-amber-500' : ''}`} />
              </button>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug line-clamp-2">
              <a
                href={`/recipe/${recipe.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelect(recipe);
                }}
                className="hover:text-amber-600 transition-colors"
              >
                {recipe.title}
              </a>
            </h3>

            <p className="text-xs text-slate-600 line-clamp-2 mt-1.5 leading-relaxed">
              {recipe.excerpt}
            </p>
          </div>

          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-slate-500">
            <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Peer-Reviewed
            </span>
            <span>{recipe.readTime}</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={() => onSelect(recipe)}
      className="healthline-card overflow-hidden cursor-pointer flex flex-col group h-full transition-all"
    >
      {/* 16:9 Photographic Header */}
      <a
        href={`/recipe/${recipe.slug}`}
        onClick={(e) => {
          e.preventDefault();
          onSelect(recipe);
        }}
        className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 block"
      >
        <img
          src={recipe.imageUrl}
          alt={recipe.imageAlt}
          onError={(e) => handleImageFallback(e, recipe.categoryId)}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />

        {/* Category Badge overlay */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-white/95 text-slate-900 shadow-xs backdrop-blur-xs">
            {recipe.categoryName}
          </span>
        </div>

        {/* Save Bookmark button */}
        <button
          onClick={(e) => onToggleSave(recipe.id, e)}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-xs transition-all z-10 ${
            isSaved
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'bg-white/90 text-slate-700 hover:text-amber-600 hover:bg-white shadow-xs'
          }`}
          title={isSaved ? 'Remove from saved' : 'Save recipe'}
        >
          <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
        </button>

        {/* Quick Nutrition & Time metadata badge */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] font-medium text-slate-900">
          <span className="px-2 py-0.5 rounded bg-white/90 backdrop-blur-xs shadow-xs flex items-center gap-1 text-[10px]">
            <Clock className="w-3 h-3 text-slate-600" />
            {recipe.cookTime}
          </span>
          <span className="px-2 py-0.5 rounded bg-white/90 backdrop-blur-xs shadow-xs text-amber-600 font-bold text-[10px] flex items-center gap-1">
            <Flame className="w-3 h-3" />
            {recipe.nutrition.calories} kcal
          </span>
        </div>
      </a>

      {/* Editorial Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Healthline Reviewer Trust Strip */}
          <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
            <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Reviewed by Elena Rostova, M.Sc.
            </span>
            <span className="text-slate-400">{recipe.readTime}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-slate-900 leading-snug line-clamp-2">
            <a
              href={`/recipe/${recipe.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onSelect(recipe);
              }}
              className="hover:text-amber-600 transition-colors"
            >
              {recipe.title}
            </a>
          </h3>

          {/* Excerpt */}
          <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
            {recipe.excerpt}
          </p>
        </div>

        {/* Author / Metadata Footer */}
        <div className="pt-3.5 mt-4 border-t border-gray-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <img
              src={recipe.author.avatar}
              alt={recipe.author.name}
              className="w-6 h-6 rounded-full object-cover border border-gray-200"
            />
            <span className="text-[11px] font-semibold text-slate-700">
              {recipe.author.name}
            </span>
          </div>
          <a
            href={`/recipe/${recipe.slug}`}
            onClick={(e) => {
              e.preventDefault();
              onSelect(recipe);
            }}
            className="text-[11px] text-amber-600 font-bold group-hover:underline"
          >
            Read Guide →
          </a>
        </div>
      </div>
    </article>
  );
};
