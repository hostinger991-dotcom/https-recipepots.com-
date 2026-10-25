import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { ContinuousTicker } from './components/ContinuousTicker';
import { RecipeCard } from './components/RecipeCard';
import { ArticleModal } from './components/ArticleModal';
import { EditorialPages } from './components/EditorialPages';
import { SavedDrawer } from './components/SavedDrawer';
import { CookieConsent } from './components/CookieConsent';
import { Footer } from './components/Footer';
import { allArticles, categoriesMeta } from './data/articlesIndex';
import { RecipeArticle, CategoryId } from './types/recipe';
import {
  Sparkles,
  Flame,
  Filter,
  Layers,
  ChefHat,
  Search,
  BookOpen,
  ArrowRight,
  TrendingUp,
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

  const handleNavigate = (view: string, categoryId?: CategoryId) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (view === 'category' && categoryId) {
      setCurrentView(`cat-${categoryId}`);
      setSelectedCategory(categoryId);
    } else if (view === 'home') {
      setCurrentView('home');
      setSelectedCategory('all');
    } else {
      setCurrentView(view);
    }
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

  const heroArticle = allArticles[0]; // Instant Pot Chicken Recipes (Article 1)
  const secondaryHero = allArticles[1]; // Dutch Oven Beef Stew (Article 2)

  return (
    <div className="min-h-screen flex flex-col bg-[#081c18] text-slate-100 selection:bg-[#ffd700] selection:text-[#081c18]">
      {/* Top Main Navigation Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        savedCount={savedArticleIds.length}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
      />

      {/* Continuous Ticker Tape (Directly Underneath Header) */}
      <ContinuousTicker />

      {/* Main Body View Switching */}
      <main className="flex-1">
        {currentView === 'home' || currentView.startsWith('cat-') ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
            
            {/* HERO SECTION (Shown on Home Feed when no search is active) */}
            {currentView === 'home' && !searchQuery && (
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffd700] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ffd700]"></span>
                    </span>
                    <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#ffd700]">
                      TODAY'S LEAD MONOGRAPH &amp; FEATURED ESSAY
                    </h2>
                  </div>
                  <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                    ISSUE #42 • 1,280 WORDS
                  </span>
                </div>

                <div className="grid lg:grid-cols-12 gap-6">
                  {/* Primary Hero Box */}
                  <div
                    onClick={() => setSelectedRecipe(heroArticle)}
                    className="lg:col-span-8 yellow-hover-box rounded-3xl overflow-hidden cursor-pointer group shadow-2xl relative flex flex-col justify-between"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#071613]">
                      <img
                        src={heroArticle.imageUrl}
                        alt={heroArticle.imageAlt}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#081c18] via-[#081c18]/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-mono font-bold uppercase rounded-xl bg-[#081c18]/90 backdrop-blur-md border border-[#5fdee7] text-[#5fdee7] shadow-lg group-hover:border-[#ffd700] group-hover:text-[#ffd700] transition-colors">
                          {heroArticle.categoryName}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                        <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 font-mono">
                          ⏱ {heroArticle.prepTime} Prep • {heroArticle.cookTime} Cook
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-[#ffd700]/20 border border-[#ffd700]/40 text-[#ffd700] font-bold">
                          {heroArticle.nutrition.calories} kcal
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#5fdee7]">
                        <span>{heroArticle.readTime}</span>
                        <span>•</span>
                        <span>Peer-Reviewed Monograph</span>
                      </div>
                      <h1 className="text-2xl sm:text-4xl font-extrabold font-editorial text-white group-hover:text-[#ffd700] transition-colors leading-tight">
                        {heroArticle.title}
                      </h1>
                      <p className="text-sm sm:text-base text-slate-300 line-clamp-3 leading-relaxed">
                        {heroArticle.excerpt}
                      </p>
                      <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={heroArticle.author.avatar}
                            alt={heroArticle.author.name}
                            className="w-9 h-9 rounded-full object-cover border border-[#ffd700]"
                          />
                          <div>
                            <p className="text-xs font-bold text-white">{heroArticle.author.name}</p>
                            <p className="text-[10px] text-slate-400">{heroArticle.author.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#ffd700] group-hover:translate-x-1.5 transition-transform">
                          <span>Read Full Monograph</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Spotlight Box */}
                  <div className="lg:col-span-4 flex flex-col gap-6">
                    <div
                      onClick={() => setSelectedRecipe(secondaryHero)}
                      className="yellow-hover-box rounded-3xl p-5 cursor-pointer group flex-1 flex flex-col justify-between shadow-xl"
                    >
                      <div className="space-y-3">
                        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#071613]">
                          <img
                            src={secondaryHero.imageUrl}
                            alt={secondaryHero.imageAlt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded bg-[#081c18]/90 text-[#ffd700] border border-[#ffd700]/40">
                            Editor's Choice
                          </span>
                        </div>
                        <h3 className="text-lg font-bold font-editorial text-white group-hover:text-[#ffd700] transition-colors line-clamp-2">
                          {secondaryHero.title}
                        </h3>
                        <p className="text-xs text-slate-300 line-clamp-2">
                          {secondaryHero.excerpt}
                        </p>
                      </div>
                      <div className="pt-3 mt-3 border-t border-slate-700 flex items-center justify-between text-xs font-bold text-[#5fdee7] group-hover:text-[#ffd700]">
                        <span>Explore Dutch Oven Science</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Quick Stats / Journal Pitch Box */}
                    <div className="p-6 rounded-3xl bg-gradient-to-br from-[#0b2721] to-[#133e34] border border-[#ffd700]/30 shadow-lg space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#ffd700]">
                        <TrendingUp className="w-4 h-4" />
                        <span>THE recipepots COMPLIANCE INDEX</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Every single one of our 20 recipes is structured as a full 1,200 to 1,300 word technical monograph with step-by-step instructions, thermal mechanics, and exact nutritional macros.
                      </p>
                      <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#5fdee7]">
                        <span>20 Unique Blueprints</span>
                        <span>0% AI Slop</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* FILTER & CATEGORY NAVIGATION BAR */}
            <section className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#ffd700]/20 pb-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black font-editorial text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#ffd700]" />
                    {selectedCategory === 'all'
                      ? 'All 20 Technical Recipe Monographs'
                      : categoriesMeta.find((c) => c.id === selectedCategory)?.name}
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Showing {filteredArticles.length} of 20 verified recipes
                  </p>
                </div>

                {/* Difficulty Quick Filter */}
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[#ffd700]" />
                  <span className="text-xs text-slate-400 font-mono">Skill:</span>
                  {(['all', 'Easy', 'Intermediate'] as const).map((diff) => (
                    <button
                      key={diff}
                      onClick={() => setDifficultyFilter(diff)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        difficultyFilter === diff
                          ? 'bg-[#ffd700] text-[#081c18]'
                          : 'bg-[#0b2721] text-slate-300 hover:text-white border border-slate-700'
                      }`}
                    >
                      {diff === 'all' ? 'All Levels' : diff}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4 Interactive Category Pills with Glowing Hover */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {categoriesMeta.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(isActive ? 'all' : cat.id);
                        if (currentView.startsWith('cat-') && isActive) {
                          setCurrentView('home');
                        } else if (!isActive) {
                          setCurrentView(`cat-${cat.id}`);
                        }
                      }}
                      className={`p-3.5 rounded-2xl text-left transition-all duration-300 yellow-hover-btn flex flex-col justify-between ${
                        isActive
                          ? 'bg-[#ffd700] text-[#081c18] font-bold shadow-[0_0_20px_rgba(255,215,0,0.5)]'
                          : 'bg-[#0b2721]/90 text-slate-200 border border-[#ffd700]/20'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono opacity-80 mb-1">
                          <span>CATEGORY {categoriesMeta.indexOf(cat) + 1}</span>
                          <span className="px-1.5 py-0.2 rounded bg-black/20 font-bold">5 Guides</span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold leading-tight">
                          {cat.name}
                        </h4>
                      </div>
                      <span className="text-[10px] mt-2 opacity-75 line-clamp-1">
                        {cat.tagline}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* RECIPE GRID (All 20 Keyword Articles with Unique Infographics) */}
            <section>
              {filteredArticles.length === 0 ? (
                <div className="text-center py-16 p-8 rounded-3xl bg-[#0b2721]/60 border border-slate-800 space-y-4">
                  <ChefHat className="w-16 h-16 text-slate-600 mx-auto" />
                  <h3 className="text-xl font-bold text-white">No Recipes Found</h3>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    No articles match your search query "{searchQuery}". Try searching for keywords like "instant pot", "pasta", "pulled pork", or "keto".
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setDifficultyFilter('all');
                    }}
                    className="px-5 py-2 rounded-xl bg-[#ffd700] text-[#081c18] font-bold text-xs yellow-hover-btn"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredArticles.map((recipe) => (
                    <RecipeCard
                      key={recipe.id}
                      recipe={recipe}
                      onSelect={(rec) => setSelectedRecipe(rec)}
                      isSaved={savedArticleIds.includes(recipe.id)}
                      onToggleSave={handleToggleSave}
                    />
                  ))}
                </div>
              )}
            </section>
          </div>
        ) : (
          /* Editorial & Legal Sub-pages (About, Standards, Editors, Contact, Privacy, Terms) */
          <EditorialPages
            view={currentView as any}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}
      </main>

      {/* Interactive 1200-Word Monograph Modal */}
      <ArticleModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
        isSaved={selectedRecipe ? savedArticleIds.includes(selectedRecipe.id) : false}
        onToggleSave={(id) => handleToggleSave(id)}
      />

      {/* Saved Cookbook Drawer */}
      <SavedDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedArticles={savedArticlesList}
        onSelectRecipe={(recipe) => setSelectedRecipe(recipe)}
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
