import React from 'react';
import {
  Layers,
  ChefHat,
  ShieldCheck,
  Phone,
  Mail,
  BookOpen,
  ArrowRight,
  Flame,
  CheckCircle2,
} from 'lucide-react';
import { CategoryId, RecipeArticle } from '../types/recipe';
import { categoriesMeta, allArticles } from '../data/articlesIndex';

interface SidebarProps {
  currentCategory: CategoryId | 'all';
  onSelectCategory: (catId: CategoryId | 'all') => void;
  onSelectRecipe: (recipe: RecipeArticle) => void;
  savedCount: number;
  onOpenSaved: () => void;
  onNavigatePage: (page: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentCategory,
  onSelectCategory,
  onSelectRecipe,
  savedCount,
  onOpenSaved,
  onNavigatePage,
}) => {
  // Count articles per category
  const getCategoryCount = (id: CategoryId) => {
    return allArticles.filter((art) => art.categoryId === id).length;
  };

  const trendingPicks = [allArticles[0], allArticles[5], allArticles[10], allArticles[15]];

  return (
    <aside className="space-y-6">
      {/* 1. Healthline Category Directory Card */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Recipe Categories
            </h3>
          </div>
          <span className="text-[11px] font-semibold text-slate-500">{allArticles.length} Recipes</span>
        </div>

        <nav className="space-y-1.5">
          {/* All Categories Option */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onSelectCategory('all');
            }}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between group ${
              currentCategory === 'all'
                ? 'bg-yellow-400 text-slate-950 shadow-xs'
                : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Layers className="w-4 h-4 shrink-0" />
              <span>All {allArticles.length} Recipes</span>
            </div>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              currentCategory === 'all' ? 'bg-slate-950/20 text-slate-950 font-black' : 'bg-slate-100 text-slate-600'
            }`}>
              {allArticles.length}
            </span>
          </a>

          {/* Individual Categories */}
          {categoriesMeta.map((cat) => {
            const isActive = currentCategory === cat.id;
            const count = getCategoryCount(cat.id);
            return (
              <a
                key={cat.id}
                href={`/category/${cat.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectCategory(cat.id);
                }}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between group ${
                  isActive
                    ? 'bg-yellow-400 text-slate-950 shadow-xs font-bold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 border border-transparent hover:border-slate-200'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate pr-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-slate-950' : 'bg-yellow-500'}`}></span>
                  <span className="truncate">{cat.name}</span>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 font-bold ${
                  isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-100 text-slate-600'
                }`}>
                  {count}
                </span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* 2. Saved Cookbook Quick Access */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-yellow-500" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              My Recipe Box
            </h4>
          </div>
          <span className="text-xs font-bold text-yellow-700">{savedCount} saved</span>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed">
          Bookmark recipes while browsing for rapid offline kitchen reference and serving scaling.
        </p>
        <button
          onClick={onOpenSaved}
          className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
        >
          <span>Open Saved Cookbook</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3. Trending Editor's Picks */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <Flame className="w-4 h-4 text-yellow-500" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Editor's Top Picks
          </h4>
        </div>

        <div className="space-y-3">
          {trendingPicks.map((pick) => (
            <a
              key={pick.id}
              href={`/recipe/${pick.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onSelectRecipe(pick);
              }}
              className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 cursor-pointer group transition-colors block"
            >
              <img
                src={pick.imageUrl}
                alt={pick.imageAlt}
                className="w-14 h-14 rounded-lg object-cover border border-slate-200 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold text-yellow-700 uppercase tracking-wider block">
                  {pick.categoryName}
                </span>
                <h5 className="text-xs font-bold text-slate-900 group-hover:text-yellow-700 transition-colors truncate">
                  {pick.title}
                </h5>
                <span className="text-[10px] text-slate-400 mt-0.5 block">
                  ⏱ {pick.cookTime} • {pick.nutrition.calories} kcal
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* 4. Healthline Medical & Culinary Review Board Card */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-emerald-700">
          <ShieldCheck className="w-4 h-4" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Review Board Verified
          </h4>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          Every guide is kitchen-tested 3x and reviewed by <strong>Elena Rostova, M.Sc., RD</strong> to confirm micronutrient retention and thermal accuracy.
        </p>
        <a
          href="/standards"
          onClick={(e) => {
            e.preventDefault();
            onNavigatePage('standards');
          }}
          className="text-xs font-bold text-yellow-700 hover:text-yellow-800 hover:underline flex items-center gap-1 inline-flex"
        >
          <span>Read Our Testing Process</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      {/* 5. Support & Direct Helpline Card */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-sm space-y-3">
        <div className="flex items-center gap-2">
          <ChefHat className="w-4 h-4 text-yellow-400" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
            Editorial Helpline
          </h4>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Need cooking assistance or ingredient substitution advice? Contact our test kitchen directly:
        </p>
        <div className="pt-1 space-y-2 text-xs">
          <p className="flex items-center gap-2 font-mono">
            <Phone className="w-3.5 h-3.5 text-yellow-400" />
            <a href="tel:03046308631" className="text-white hover:underline font-bold">
              03046308631
            </a>
          </p>
          <p className="flex items-center gap-2 font-mono">
            <Mail className="w-3.5 h-3.5 text-yellow-400" />
            <a href="mailto:mz751136000@gmail.com" className="text-white hover:underline font-bold break-all">
              mz751136000@gmail.com
            </a>
          </p>
        </div>
      </div>
    </aside>
  );
};
