import React from 'react';
import { X, BookOpen, Trash2, ArrowRight, ChefHat } from 'lucide-react';
import { RecipeArticle } from '../types/recipe';

interface SavedDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: RecipeArticle[];
  onSelectRecipe: (recipe: RecipeArticle) => void;
  onRemoveSaved: (id: string) => void;
  onClearAll: () => void;
}

export const SavedDrawer: React.FC<SavedDrawerProps> = ({
  isOpen,
  onClose,
  savedArticles,
  onSelectRecipe,
  onRemoveSaved,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#081c18] border-l-2 border-[#ffd700] shadow-[0_0_50px_rgba(255,215,0,0.3)] flex flex-col justify-between p-6">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-[#ffd700]" />
              <h2 className="text-lg font-bold font-editorial text-white">Your Saved Cookbook</h2>
              <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-[#ffd700]/15 text-[#ffd700] border border-[#ffd700]/30">
                {savedArticles.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List or Empty State */}
          <div className="flex-1 overflow-y-auto py-6 space-y-4">
            {savedArticles.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <ChefHat className="w-12 h-12 text-slate-600 animate-pulse" />
                <h3 className="text-base font-bold text-white">Your Cookbook is Empty</h3>
                <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                  Click the bookmark icon on any recipe card to save it here for instant offline access and quick kitchen reference.
                </p>
              </div>
            ) : (
              savedArticles.map((article) => (
                <div
                  key={article.id}
                  className="yellow-hover-box rounded-xl p-3 flex gap-3 items-center group cursor-pointer"
                  onClick={() => {
                    onSelectRecipe(article);
                    onClose();
                  }}
                >
                  <img
                    src={article.imageUrl}
                    alt={article.imageAlt}
                    className="w-16 h-16 rounded-lg object-cover border border-[#ffd700]/30 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono text-[#5fdee7] uppercase">
                      {article.categoryName}
                    </span>
                    <h4 className="text-xs font-bold text-white group-hover:text-[#ffd700] truncate">
                      {article.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                      ⏱ {article.cookTime} • {article.nutrition.calories} kcal
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveSaved(article.id);
                    }}
                    className="p-1.5 text-slate-500 hover:text-red-400 transition-colors rounded-lg hover:bg-red-950/20"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Actions */}
          {savedArticles.length > 0 && (
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={onClearAll}
                className="text-xs text-red-400 hover:underline flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" /> Clear All
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-[#ffd700] text-[#081c18] font-bold text-xs yellow-hover-btn flex items-center gap-1"
              >
                <span>Done</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
