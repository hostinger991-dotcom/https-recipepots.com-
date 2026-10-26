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
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-gray-200 shadow-2xl flex flex-col justify-between p-6">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#d82424]" />
              <h2 className="text-lg font-bold text-slate-900">Saved Articles</h2>
              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-red-50 text-[#d82424] border border-red-200">
                {savedArticles.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List or Empty State */}
          <div className="flex-1 overflow-y-auto py-4 space-y-3">
            {savedArticles.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <ChefHat className="w-12 h-12 text-slate-300" />
                <h3 className="text-base font-bold text-slate-800">No Saved Recipes Yet</h3>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                  Click the bookmark icon on any recipe or nutrition guide to save it here for quick kitchen access.
                </p>
              </div>
            ) : (
              savedArticles.map((article) => (
                <div
                  key={article.id}
                  className="p-3 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-slate-50 flex gap-3 items-center group cursor-pointer transition-colors"
                  onClick={() => {
                    onSelectRecipe(article);
                    onClose();
                  }}
                >
                  <img
                    src={article.imageUrl}
                    alt={article.imageAlt}
                    className="w-16 h-16 rounded-lg object-cover border border-gray-100 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-[#d82424] uppercase tracking-wider">
                      {article.categoryName}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#d82424] truncate mt-0.5">
                      {article.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {article.cookTime} • {article.nutrition.calories} kcal
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveSaved(article.id);
                    }}
                    className="p-1.5 text-slate-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
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
            <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
              <button
                onClick={onClearAll}
                className="text-xs text-red-600 hover:underline flex items-center gap-1 font-semibold"
              >
                <Trash2 className="w-3.5 h-3.5" /> Clear All
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-full bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 flex items-center gap-1"
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
