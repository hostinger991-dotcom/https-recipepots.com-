import React, { useState } from 'react';
import { Bookmark, ShieldCheck, ChefHat, Clock, Flame, Users } from 'lucide-react';
import { RecipeArticle } from '../types/recipe';

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
  const [imageError, setImageError] = useState(false);

  if (layout === 'horizontal') {
    return (
      <article
        onClick={() => onSelect(recipe)}
        className="healthline-card p-3 sm:p-4 cursor-pointer flex flex-col sm:flex-row gap-4 group transition-all"
      >
        <div className="relative aspect-[16/9] sm:w-48 sm:aspect-square shrink-0 overflow-hidden rounded-lg bg-slate-100">
          {!imageError ? (
            <img
              src={recipe.imageUrl}
              alt={recipe.imageAlt}
              onError={() => setImageError(true)}
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-slate-100 text-slate-400">
              <ChefHat className="w-8 h-8 mb-1 text-slate-400" />
              <span className="text-[10px] font-bold uppercase">{recipe.categoryName}</span>
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#d82424]">
                {recipe.categoryName}
              </span>
              <button
                onClick={(e) => onToggleSave(recipe.id, e)}
                className="text-slate-400 hover:text-[#d82424] p-1"
                title={isSaved ? 'Remove from saved' : 'Save recipe'}
              >
                <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-[#d82424] text-[#d82424]' : ''}`} />
              </button>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#d82424] transition-colors leading-snug line-clamp-2">
              {recipe.title}
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
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
        {!imageError ? (
          <img
            src={recipe.imageUrl}
            alt={recipe.imageAlt}
            onError={() => setImageError(true)}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-100 text-slate-400">
            <ChefHat className="w-10 h-10 text-slate-400 mb-1" />
            <span className="text-xs font-bold uppercase">{recipe.categoryName}</span>
          </div>
        )}

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
              ? 'bg-[#d82424] text-white shadow-md'
              : 'bg-white/90 text-slate-700 hover:text-[#d82424] hover:bg-white shadow-xs'
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
          <span className="px-2 py-0.5 rounded bg-white/90 backdrop-blur-xs shadow-xs text-[#d82424] font-bold text-[10px] flex items-center gap-1">
            <Flame className="w-3 h-3" />
            {recipe.nutrition.calories} kcal
          </span>
        </div>
      </div>

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
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#d82424] transition-colors leading-snug line-clamp-2">
            {recipe.title}
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
          <span className="text-[11px] text-[#d82424] font-bold group-hover:underline">
            Read Guide →
          </span>
        </div>
      </div>
    </article>
  );
};
