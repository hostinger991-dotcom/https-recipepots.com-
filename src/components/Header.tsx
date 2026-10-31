import React, { useState } from 'react';
import { Search, BookOpen, X, Menu, ShieldCheck, Mail, Phone, ChevronRight } from 'lucide-react';
import { CategoryId } from '../types/recipe';
import { categoriesMeta } from '../data/articlesIndex';
import { Logo } from './Logo';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, categoryId?: CategoryId) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  savedCount: number;
  onOpenSaved: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  searchQuery,
  onSearchChange,
  savedCount,
  onOpenSaved,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const trendingTopics = [
    { label: 'Instant Pot Chicken', query: 'instant pot chicken' },
    { label: 'High-Protein', query: 'high protein' },
    { label: 'Keto One-Pot', query: 'keto' },
    { label: 'Slow Cooker Stew', query: 'beef stew' },
    { label: '15-Minute Meals', query: '15 minute' },
    { label: 'Meal Prep', query: 'meal prep' },
    { label: 'Low Carb Crockpot', query: 'low carb' },
    { label: 'Sheet Pan Chicken', query: 'sheet pan' },
    { label: 'Gluten-Free Dinners', query: 'gluten free' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      {/* Top Healthline Trust & Contact Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-[11px] font-medium">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 font-semibold text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              PEER-REVIEWED &amp; LABORATORY TESTED
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-300">
              Evidence-based culinary nutrition &amp; one-pot cooking science
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a
              href="tel:03046308631"
              className="flex items-center gap-1 hover:text-white transition-colors"
              title="Editorial Support Helpline"
            >
              <Phone className="w-3 h-3 text-amber-500" />
              <span>03046308631</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="mailto:mz751136000@gmail.com"
              className="flex items-center gap-1 hover:text-white transition-colors"
              title="Editorial Office"
            >
              <Mail className="w-3 h-3 text-amber-500" />
              <span>mz751136000@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Left: Hamburger & Healthline-Style Brand Wordmark */}
          <div className="flex items-center gap-3 md:gap-5">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -ml-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="text-left focus:outline-none"
              aria-label="recipepots home"
            >
              <Logo size="md" showTagline={true} />
            </a>
          </div>

          {/* Desktop Categories (Healthline Clean Links) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className={`text-sm font-semibold tracking-tight transition-colors pb-1 border-b-2 ${
                currentView === 'home'
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-slate-700 hover:text-slate-950 hover:border-slate-300'
              }`}
            >
              Home
            </a>

            {categoriesMeta.map((cat) => (
              <a
                key={cat.id}
                href={`/category/${cat.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('category', cat.id);
                }}
                className={`text-sm font-semibold tracking-tight transition-colors pb-1 border-b-2 whitespace-nowrap ${
                  currentView === `cat-${cat.id}`
                    ? 'border-amber-500 text-amber-600'
                    : 'border-transparent text-slate-700 hover:text-slate-950 hover:border-slate-300'
                }`}
              >
                {cat.name}
              </a>
            ))}

            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('about');
              }}
              className={`text-sm font-semibold tracking-tight transition-colors pb-1 border-b-2 ${
                currentView === 'about'
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-slate-700 hover:text-slate-950 hover:border-slate-300'
              }`}
            >
              About
            </a>

            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
              className={`text-sm font-semibold tracking-tight transition-colors pb-1 border-b-2 ${
                currentView === 'contact'
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-slate-700 hover:text-slate-950 hover:border-slate-300'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Right: Search, Saved Cookbook, and Newsletter CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Button */}
            <button
              onClick={() => setShowSearchModal(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-300 bg-slate-50 text-slate-600 hover:border-gray-400 hover:bg-white transition-all text-xs"
              title="Search recipes and guides"
            >
              <Search className="w-4 h-4 text-slate-500" />
              <span className="hidden sm:inline">Search...</span>
            </button>

            {/* Saved Cookbook Button */}
            <button
              onClick={onOpenSaved}
              className="relative p-2 rounded-full border border-gray-300 bg-white text-slate-700 hover:text-slate-950 hover:border-gray-400 transition-colors"
              title="Saved recipes"
            >
              <BookOpen className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-slate-950 text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-xs">
                  {savedCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Healthline Horizontal Category Taxonomy Ribbon */}
      <div className="border-t border-gray-100 bg-slate-50 overflow-x-auto scrollbar-none py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs">
          <span className="font-bold text-slate-500 text-[11px] uppercase tracking-wider whitespace-nowrap shrink-0 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            Trending:
          </span>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
            {trendingTopics.map((topic) => (
              <button
                key={topic.query}
                onClick={() => {
                  onSearchChange(topic.query);
                  if (currentView !== 'home') onNavigate('home');
                }}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  searchQuery.toLowerCase() === topic.query.toLowerCase()
                    ? 'bg-slate-900 text-white'
                    : 'bg-white border border-gray-200 text-slate-700 hover:border-gray-400 hover:text-slate-900'
                }`}
              >
                {topic.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Healthline Slide-Out Mega Menu (Drawer) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex">
          <div className="w-full max-w-sm bg-white h-full overflow-y-auto shadow-2xl p-6 flex flex-col justify-between animate-fadeIn">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-6">
                <Logo size="sm" showTagline={false} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Topics */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Categories
                  </h3>
                  <div className="space-y-1">
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('home');
                        setMobileMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-900 hover:bg-slate-100 flex items-center justify-between"
                    >
                      <span>Home Feed</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </a>
                    {categoriesMeta.map((cat) => (
                      <a
                        key={cat.id}
                        href={`/category/${cat.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate('category', cat.id);
                          setMobileMenuOpen(false);
                        }}
                        className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 flex items-center justify-between"
                      >
                        <span>{cat.name}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Editorial &amp; Trust
                  </h3>
                  <div className="space-y-1 text-sm">
                    <a
                      href="/about"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('about');
                        setMobileMenuOpen(false);
                      }}
                      className="w-full block text-left px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
                    >
                      About Us &amp; Our Mission
                    </a>
                    <a
                      href="/contact"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('contact');
                        setMobileMenuOpen(false);
                      }}
                      className="w-full block text-left px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
                    >
                      Contact Us &amp; Help Desk
                    </a>
                    <a
                      href="/standards"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('standards');
                        setMobileMenuOpen(false);
                      }}
                      className="w-full block text-left px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
                    >
                      Medical &amp; Culinary Standards
                    </a>
                    <a
                      href="/privacy"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('privacy');
                        setMobileMenuOpen(false);
                      }}
                      className="w-full block text-left px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="/terms"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('terms');
                        setMobileMenuOpen(false);
                      }}
                      className="w-full block text-left px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
                    >
                      Terms of Use
                    </a>
                    <a
                      href="/sitemap.xml"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-left px-3 py-2 rounded-lg text-slate-500 hover:bg-slate-100 flex items-center justify-between text-xs font-mono"
                    >
                      <span>XML Sitemap</span>
                      <span className="text-[10px] text-slate-400">sitemap.xml</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer inside drawer */}
            <div className="pt-6 border-t border-gray-200 space-y-3">
              <div className="text-xs text-slate-500 space-y-1">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <a href="tel:03046308631" className="font-semibold text-slate-800 hover:underline">
                    03046308631
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-500" />
                  <a href="mailto:mz751136000@gmail.com" className="font-semibold text-slate-800 hover:underline">
                    mz751136000@gmail.com
                  </a>
                </p>
              </div>
              <p className="text-[11px] text-slate-400">
                © {new Date().getFullYear()} recipepots. Evidence-based culinary journal.
              </p>
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)}></div>
        </div>
      )}

      {/* Healthline Search Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-20 px-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl p-6 shadow-2xl border border-gray-200 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-amber-500" />
                <h3 className="text-base font-bold text-slate-900">Search recipepots</h3>
              </div>
              <button
                onClick={() => setShowSearchModal(false)}
                className="text-slate-400 hover:text-slate-800 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4">
              <input
                type="text"
                autoFocus
                placeholder="Search recipes, ingredients, nutrients, slow cooker guides..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setShowSearchModal(false);
                }}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-base"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2 items-center">
              <span className="text-xs font-semibold text-slate-500">Popular:</span>
              {['instant pot chicken', 'dutch oven beef stew', 'crockpot chili', 'keto one pot', '15 minute dinner'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    onSearchChange(tag);
                    setShowSearchModal(false);
                  }}
                  className="px-2.5 py-1 text-xs rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center pt-4 border-t border-gray-100">
              {searchQuery ? (
                <button
                  onClick={() => onSearchChange('')}
                  className="text-xs text-slate-500 hover:text-slate-800 underline"
                >
                  Clear search
                </button>
              ) : <div />}
              <button
                onClick={() => setShowSearchModal(false)}
                className="px-5 py-2 rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-colors shadow-xs"
              >
                View Articles
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
