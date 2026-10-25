import React, { useState } from 'react';
import { Clock, Flame, Users, ChefHat, Bookmark, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { RecipeArticle } from '../types/recipe';

interface RecipeCardProps {
  recipe: RecipeArticle;
  onSelect: (recipe: RecipeArticle) => void;
  isSaved: boolean;
  onToggleSave: (recipeId: string, e: React.MouseEvent) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  onSelect,
  isSaved,
  onToggleSave,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article
      onClick={() => onSelect(recipe)}
      className="yellow-hover-box rounded-2xl overflow-hidden cursor-pointer flex flex-col group h-full shadow-lg transition-all duration-300"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#071613]">
        {!imageError ? (
          <img
            src={recipe.imageUrl}
            alt={recipe.imageAlt}
            onError={() => setImageError(true)}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* Zero-Broken-Image Fallback Component */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#0b2721] to-[#123d34] border-b border-[#ffd700]/20">
            <ChefHat className="w-12 h-12 text-[#ffd700] mb-2 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase text-[#5fdee7] tracking-wider">
              {recipe.categoryName}
            </span>
            <p className="text-sm font-bold text-white mt-1 line-clamp-1">{recipe.title}</p>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#081c18] via-transparent to-transparent opacity-80" />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase rounded-lg bg-[#081c18]/90 backdrop-blur-md border border-[#5fdee7] text-[#5fdee7] shadow-md group-hover:border-[#ffd700] group-hover:text-[#ffd700] transition-colors">
            {recipe.categoryName}
          </span>
        </div>

        {/* Bookmark Action */}
        <button
          onClick={(e) => onToggleSave(recipe.id, e)}
          className={`absolute top-3 right-3 p-2 rounded-xl backdrop-blur-md transition-all z-10 ${
            isSaved
              ? 'bg-[#ffd700] text-[#081c18] shadow-[0_0_15px_rgba(255,215,0,0.5)]'
              : 'bg-[#081c18]/80 text-slate-300 hover:text-[#ffd700] hover:bg-[#081c18] border border-white/10'
          }`}
          title={isSaved ? 'Remove from cookbook' : 'Save to cookbook'}
        >
          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
        </button>

        {/* Calorie & Servings Badges */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-medium text-slate-200">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm border border-white/10">
              <Clock className="w-3 h-3 text-[#ffd700]" />
              {recipe.cookTime}
            </span>
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm border border-white/10">
              <Users className="w-3 h-3 text-[#5fdee7]" />
              {recipe.servings} Servings
            </span>
          </div>
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#ffd700]/20 backdrop-blur-sm border border-[#ffd700]/40 text-[#ffd700] font-bold">
            <Flame className="w-3 h-3" />
            {recipe.nutrition.calories} kcal
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Read Time & Peer Review Stamp */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
            <span>{recipe.readTime}</span>
            <span className="flex items-center gap-1 text-[#5fdee7]">
              <CheckCircle2 className="w-3 h-3" /> Peer-Reviewed
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold font-editorial text-white group-hover:text-[#ffd700] transition-colors leading-snug line-clamp-2">
            {recipe.title}
          </h3>

          {/* Excerpt */}
          <p className="text-xs text-slate-300 line-clamp-2 mt-2 leading-relaxed">
            {recipe.excerpt}
          </p>
        </div>

        {/* Footer Area with Author & Read Trigger */}
        <div className="pt-4 mt-4 border-t border-slate-700/60 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={recipe.author.avatar}
              alt={recipe.author.name}
              className="w-7 h-7 rounded-full object-cover border border-[#ffd700]/40"
            />
            <div>
              <p className="text-xs font-semibold text-slate-200 group-hover:text-white">
                {recipe.author.name}
              </p>
              <p className="text-[10px] text-slate-400">{recipe.publishDate}</p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs font-bold text-[#ffd700] group-hover:translate-x-1 transition-transform">
            <span>Read Guide</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </article>
  );
};
