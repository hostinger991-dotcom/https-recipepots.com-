import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { ContinuousTicker } from './components/ContinuousTicker';
import { RecipeCard } from './components/RecipeCard';
import { ArticleModal } from './components/ArticleModal';
import { EditorialPages } from './components/EditorialPages';
import { SavedDrawer } from './components/SavedDrawer';
import { CookieConsent } from './components/CookieConsent';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { allArticles, categoriesMeta } from './data/articlesIndex';
import { RecipeArticle, CategoryId } from './types/recipe';
import { handleImageFallback } from './utils/imageUtils';
import {
  ShieldCheck,
  Filter,
  ChefHat,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeArticle | null>(null);
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | 'Easy' | 'Intermediate'>('all');
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>([]);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);

  // Load saved bookmarks from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('recipepots_saved_ids');
      if (stored) {
        setSavedArticleIds(JSON.parse(stored));
      }
    } catch {
      // LocalStorage access fallback
    }
  }, []);

  const handleToggleSave = (recipeId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    let updated: string[];
    if (savedArticleIds.includes(recipeId)) {
      updated = savedArticleIds.filter((id) => id !== recipeId);
    } else {
      updated = [...savedArticleIds, recipeId];
    }
    setSavedArticleIds(updated);
    try {
      localStorage.setItem('recipepots_saved_ids', JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const handleClearAllSaved = () => {
    setSavedArticleIds([]);
    try {
      localStorage.removeItem('recipepots_saved_ids');
    } catch {
      // Ignore
    }
  };

  // Synchronize URL with active state (deep-linking & SEO friendly navigation)
  useEffect(() => {
    const handleUrlRoute = () => {
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
      const hash = window.location.hash.replace(/^#\/?/, '');
      const target = path || hash;

      if (!target) {
        setCurrentView('home');
        setSelectedCategory('all');
        setSelectedRecipe(null);
        return;
      }

      if (target.startsWith('recipe/') || target.startsWith('post/')) {
        const slug = target.split('/')[1];
        const match = allArticles.find((a) => a.slug === slug || a.id === slug);
        if (match) {
          setSelectedRecipe(match);
        }
      } else if (target.startsWith('category/')) {
        const catId = target.split('/')[1] as CategoryId;
        if (categoriesMeta.some((c) => c.id === catId)) {
          setSelectedCategory(catId);
          setCurrentView(`cat-${catId}`);
        }
      } else if (['about', 'contact', 'privacy', 'terms', 'standards', 'editors'].includes(target)) {
        setCurrentView(target);
        setSelectedRecipe(null);
      }
    };

    handleUrlRoute();
    window.addEventListener('popstate', handleUrlRoute);
    return () => window.removeEventListener('popstate', handleUrlRoute);
  }, []);

  const handleOpenRecipe = (recipe: RecipeArticle) => {
    setSelectedRecipe(recipe);
    try {
      window.history.pushState({ recipeId: recipe.id }, '', `/recipe/${recipe.slug}`);
    } catch {
      // Ignore in non-standard environments
    }
  };

  const handleCloseRecipe = () => {
    setSelectedRecipe(null);
    try {
      if (currentView.startsWith('cat-') && selectedCategory !== 'all') {
        window.history.pushState(null, '', `/category/${selectedCategory}`);
      } else if (currentView !== 'home') {
        window.history.pushState(null, '', `/${currentView}`);
      } else {
        window.history.pushState(null, '', '/');
      }
    } catch {
      // Ignore
    }
  };

  const handleNavigate = (view: string, categoryId?: CategoryId) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedRecipe(null);
    if (view === 'category' && categoryId) {
      setCurrentView(`cat-${categoryId}`);
      setSelectedCategory(categoryId);
      try {
        window.history.pushState(null, '', `/category/${categoryId}`);
      } catch {}
    } else if (view === 'home') {
      setCurrentView('home');
      setSelectedCategory('all');
      try {
        window.history.pushState(null, '', '/');
      } catch {}
    } else {
      setCurrentView(view);
      try {
        window.history.pushState(null, '', `/${view}`);
      } catch {}
    }
  };

  const handleSelectCategoryFromSidebar = (catId: CategoryId | 'all') => {
    setSelectedRecipe(null);
    if (catId === 'all') {
      setSelectedCategory('all');
      setCurrentView('home');
      try {
        window.history.pushState(null, '', '/');
      } catch {}
    } else {
      setSelectedCategory(catId);
      setCurrentView(`cat-${catId}`);
      try {
        window.history.pushState(null, '', `/category/${catId}`);
      } catch {}
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtered Articles Calculation
  const filteredArticles = useMemo(() => {
    return allArticles.filter((article) => {
      // Category filter
      if (selectedCategory !== 'all' && article.categoryId !== selectedCategory) {
        return false;
      }
      // Difficulty filter
      if (difficultyFilter !== 'all' && article.difficulty !== difficultyFilter) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = article.title.toLowerCase().includes(query);
        const matchesKeyword = article.keyword.toLowerCase().includes(query);
        const matchesSubtitle = article.subtitle.toLowerCase().includes(query);
        const matchesIngredient = article.ingredients.some((group) =>
          group.items.some((item) => item.toLowerCase().includes(query))
        );
        if (!matchesTitle && !matchesKeyword && !matchesSubtitle && !matchesIngredient) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, difficultyFilter, searchQuery]);

  const savedArticlesList = useMemo(() => {
    return allArticles.filter((art) => savedArticleIds.includes(art.id));
  }, [savedArticleIds]);

  const leadHero = allArticles[0]; // Instant Pot Chicken
  const companionStories = [allArticles[1], allArticles[5], allArticles[10]]; // Dutch oven beef stew, best crockpot, 15 min dinner

  return (
    <div className="min-h-screen flex flex-col bg-[#ebf0f5] text-slate-800 selection:bg-yellow-400 selection:text-slate-950">
      {/* Top Main Navigation Header (Without Top Newsletter CTA) */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        savedCount={savedArticleIds.length}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
      />

      {/* Continuous Ticker Ribbon */}
      <ContinuousTicker />

      {/* Main Body View Switching */}
      <main className="flex-1">
        {currentView === 'home' || currentView.startsWith('cat-') ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
            
            {/* Healthline Featured Stories Split (Only on Home Feed when no search is active) */}
            {currentView === 'home' && !searchQuery && (
              <section className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-300 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Lead Recipe &amp; Featured Story
                    </h2>
                  </div>
                  <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                    Updated Daily • Tested Recipes
                  </span>
                </div>

                <div className="grid lg:grid-cols-12 gap-6">
                  {/* Healthline Lead Featured Story (7 Cols) */}
                  <div
                    onClick={() => handleOpenRecipe(leadHero)}
                    className="lg:col-span-7 healthline-card overflow-hidden cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                      <img
                        src={leadHero.imageUrl}
                        alt={leadHero.imageAlt}
                        onError={(e) => handleImageFallback(e, leadHero.categoryId)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-yellow-400 text-slate-950 shadow-xs">
                          {leadHero.categoryName}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                            Reviewed by Elena Rostova, M.Sc.
                          </span>
                          <span>•</span>
                          <span>{leadHero.readTime}</span>
                        </div>

                        <h1 className="text-2xl sm:text-3xl font-bold font-serif-headline text-slate-950 leading-tight">
                          <a
                            href={`/recipe/${leadHero.slug}`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleOpenRecipe(leadHero);
                            }}
                            className="group-hover:text-yellow-700 transition-colors"
                          >
                            {leadHero.title}
                          </a>
                        </h1>

                        <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                          {leadHero.excerpt}
                        </p>

                        {/* Healthline Takeaway Bullets Preview */}
                        <div className="p-3 rounded-lg bg-yellow-50 border-l-4 border-yellow-500 text-xs text-yellow-950 space-y-0.5">
                          <strong className="font-bold uppercase tracking-wider text-[11px] text-yellow-900 block">
                            Key Recipe Highlights:
                          </strong>
                          <ul className="list-disc list-inside space-y-0.5 text-yellow-950/90 text-[11px]">
                            <li>Tender garlic chicken breasts finished with a creamy spinach pan sauce in under 30 minutes.</li>
                            <li>{leadHero.nutrition.calories} kcal with {leadHero.nutrition.protein} of protein per serving.</li>
                          </ul>
                        </div>
                      </div>

                      <div className="pt-3.5 mt-3 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={leadHero.author.avatar}
                            alt={leadHero.author.name}
                            className="w-8 h-8 rounded-full object-cover border border-gray-200"
                          />
                          <div>
                            <p className="text-xs font-bold text-slate-900">{leadHero.author.name}</p>
                            <p className="text-[10px] text-slate-500">{leadHero.publishDate}</p>
                          </div>
                        </div>
                        <a
                          href={`/recipe/${leadHero.slug}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleOpenRecipe(leadHero);
                          }}
                          className="text-xs font-bold text-yellow-700 group-hover:underline flex items-center gap-1"
                        >
                          <span>Read Full Guide</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Healthline Companion Stories Stack (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col gap-3.5">
                    {companionStories.map((story) => (
                      <a
                        key={story.id}
                        href={`/recipe/${story.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleOpenRecipe(story);
                        }}
                        className="healthline-card p-3.5 cursor-pointer group flex gap-3.5 transition-all block"
                      >
                        <div className="w-28 sm:w-32 aspect-square shrink-0 rounded-lg overflow-hidden bg-slate-100">
                          <img
                            src={story.imageUrl}
                            alt={story.imageAlt}
                            onError={(e) => handleImageFallback(e, story.categoryId)}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-700 block mb-0.5">
                              {story.categoryName}
                            </span>
                            <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-yellow-700 transition-colors line-clamp-2 leading-snug">
                              {story.title}
                            </h3>
                          </div>
                          <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1.5 border-t border-slate-100 mt-2">
                            <span>⏱ {story.cookTime}</span>
                            <span className="text-yellow-700 font-semibold text-xs">Read →</span>
                          </div>
                        </div>
                      </a>
                    ))}

                    {/* Testing Lab Trust Callout Banner */}
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>The recipepots Testing Standard</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Every one of our 20 recipes is structured as a full 1,200 to 1,300 word technical monograph with step-by-step instructions and verified macros.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* TWO-COLUMN LAYOUT: MAIN RECIPE STREAM + HEALTHLINE CATEGORIES SIDEBAR */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left / Main Articles Feed (8 Columns on Desktop) */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Header Strip with Title & Skill Filter */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-300 pb-4">
                  <div>
                    <h2 className="text-2xl font-bold font-serif-headline text-slate-950 flex items-center gap-2">
                      {selectedCategory === 'all'
                        ? 'All Recipe Monographs'
                        : categoriesMeta.find((c) => c.id === selectedCategory)?.name}
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Showing {filteredArticles.length} of 20 verified single-vessel recipes
                    </p>
                  </div>

                  {/* Difficulty Filter */}
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-semibold text-slate-500">Skill:</span>
                    {(['all', 'Easy', 'Intermediate'] as const).map((diff) => (
                      <button
                        key={diff}
                        onClick={() => setDifficultyFilter(diff)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                          difficultyFilter === diff
                            ? 'bg-slate-900 text-white'
                            : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                        }`}
                      >
                        {diff === 'all' ? 'All' : diff}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile / Tablet Horizontal Category Chips */}
                <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                  <button
                    onClick={() => handleSelectCategoryFromSidebar('all')}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-yellow-400 text-slate-950 font-bold shadow-xs'
                        : 'bg-white text-slate-700 border border-slate-200'
                    }`}
                  >
                    All Recipes ({allArticles.length})
                  </button>
                  {categoriesMeta.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleSelectCategoryFromSidebar(cat.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                        selectedCategory === cat.id
                          ? 'bg-yellow-400 text-slate-950 font-bold shadow-xs'
                          : 'bg-white text-slate-700 border border-slate-200'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>

                {/* Recipe Grid (2 to 3 Columns in main stream) */}
                {filteredArticles.length === 0 ? (
                  <div className="text-center py-16 p-8 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                    <ChefHat className="w-16 h-16 text-slate-300 mx-auto" />
                    <h3 className="text-xl font-bold text-slate-800">No Recipes Found</h3>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      No articles match your search query "{searchQuery}". Try searching for keywords like "instant pot", "pasta", "pulled pork", or "keto".
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                        setDifficultyFilter('all');
                      }}
                      className="px-5 py-2 rounded-full bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
                    >
                      Reset All Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredArticles.map((recipe) => (
                      <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                        onSelect={(rec) => handleOpenRecipe(rec)}
                        isSaved={savedArticleIds.includes(recipe.id)}
                        onToggleSave={handleToggleSave}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Right: Dedicated Healthline Categories & Topics Sidebar (4 Columns on Desktop) */}
              <div className="lg:col-span-4 sticky top-24">
                <Sidebar
                  currentCategory={selectedCategory}
                  onSelectCategory={handleSelectCategoryFromSidebar}
                  onSelectRecipe={(recipe) => handleOpenRecipe(recipe)}
                  savedCount={savedArticleIds.length}
                  onOpenSaved={() => setIsSavedDrawerOpen(true)}
                  onNavigatePage={(page) => handleNavigate(page)}
                />
              </div>
            </div>
          </div>
        ) : (
          /* Editorial & Legal Sub-pages (About, Standards, Editors, Contact, Privacy, Terms) */
          <EditorialPages
            view={currentView as any}
            onNavigateHome={() => handleNavigate('home')}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Interactive 1200-Word Monograph Modal */}
      <ArticleModal
        recipe={selectedRecipe}
        onClose={handleCloseRecipe}
        isSaved={selectedRecipe ? savedArticleIds.includes(selectedRecipe.id) : false}
        onToggleSave={(id) => handleToggleSave(id)}
        onSelectRecipe={(recipe) => handleOpenRecipe(recipe)}
        onNavigate={handleNavigate}
      />

      {/* Saved Cookbook Drawer */}
      <SavedDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedArticles={savedArticlesList}
        onSelectRecipe={(recipe) => handleOpenRecipe(recipe)}
        onRemoveSaved={(id) => handleToggleSave(id)}
        onClearAll={handleClearAllSaved}
      />

      {/* GDPR Cookie Consent Banner */}
      <CookieConsent />

      {/* Production-Grade Footer with Strict Compliance */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
