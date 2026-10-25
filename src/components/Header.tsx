import React, { useState } from 'react';
import { ChefHat, Search, BookOpen, Sparkles, X, Menu, Flame } from 'lucide-react';
import { CategoryId } from '../types/recipe';
import { categoriesMeta } from '../data/articlesIndex';

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

  return (
    <header className="sticky top-0 z-40 bg-[#081c18]/95 backdrop-blur-md border-b border-[#ffd700]/20">
      {/* Top Banner Tagline */}
      <div className="bg-gradient-to-r from-[#0b2721] via-[#103830] to-[#0b2721] border-b border-[#5fdee7]/25 px-4 py-1.5 text-center text-[11px] sm:text-xs font-semibold tracking-wider text-[#5fdee7] flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#ffd700] animate-pulse" />
        <span>DELICIOUS ONE-POT RECIPES &amp; KITCHEN GEAR GUIDES - PUBLISHED DAILY</span>
        <Sparkles className="w-3.5 h-3.5 text-[#ffd700] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3.5 group text-left focus:outline-none"
          >
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#0b2721] to-[#15463b] border-2 border-[#ffd700] p-2 flex items-center justify-center shadow-[0_0_15px_rgba(255,215,0,0.25)] group-hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] group-hover:border-[#ffcc00] transition-all duration-300">
              <ChefHat className="w-7 h-7 text-[#ffd700] group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5fdee7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5fdee7]"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-white group-hover:text-[#ffd700] transition-colors">
                  recipe<span className="text-[#ffd700]">pots</span>
                </span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#ffd700]/10 border border-[#ffd700]/40 text-[#ffd700] font-bold">
                  v2.6
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block tracking-wide">
                One-Pot Dinners &amp; Slow Cooker Journal
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={() => onNavigate('home')}
              className={`px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-all yellow-hover-btn ${
                currentView === 'home'
                  ? 'bg-[#ffd700] text-[#081c18] font-bold shadow-[0_0_15px_rgba(255,215,0,0.4)]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Home Feed
            </button>

            {categoriesMeta.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onNavigate('category', cat.id)}
                className={`px-2.5 py-2 text-xs xl:text-sm font-medium rounded-lg transition-all yellow-hover-btn whitespace-nowrap ${
                  currentView === `cat-${cat.id}`
                    ? 'bg-[#ffd700] text-[#081c18] font-bold shadow-[0_0_15px_rgba(255,215,0,0.4)]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}

            <button
              onClick={() => onNavigate('about')}
              className={`px-2.5 py-2 text-xs xl:text-sm font-medium rounded-lg transition-all yellow-hover-btn ${
                currentView === 'about'
                  ? 'bg-[#ffd700] text-[#081c18] font-bold shadow-[0_0_15px_rgba(255,215,0,0.4)]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              About
            </button>

            <button
              onClick={() => onNavigate('editors')}
              className={`px-2.5 py-2 text-xs xl:text-sm font-medium rounded-lg transition-all yellow-hover-btn ${
                currentView === 'editors'
                  ? 'bg-[#ffd700] text-[#081c18] font-bold shadow-[0_0_15px_rgba(255,215,0,0.4)]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Editors
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className={`px-2.5 py-2 text-xs xl:text-sm font-medium rounded-lg transition-all yellow-hover-btn ${
                currentView === 'contact'
                  ? 'bg-[#ffd700] text-[#081c18] font-bold shadow-[0_0_15px_rgba(255,215,0,0.4)]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action Icons: Search & Bookmarks */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setShowSearchModal(true)}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-[#0b2721] border border-[#ffd700]/30 text-slate-300 hover:text-[#ffd700] hover:border-[#ffd700] hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all flex items-center gap-2 text-xs"
              title="Search all 20 recipes and guides"
            >
              <Search className="w-4 h-4 text-[#ffd700]" />
              <span className="hidden md:inline text-slate-300">Search recipes...</span>
              <kbd className="hidden md:inline px-1.5 py-0.5 text-[10px] bg-[#081c18] border border-slate-700 rounded text-slate-400">
                /
              </kbd>
            </button>

            <button
              onClick={onOpenSaved}
              className="relative p-2.5 rounded-xl bg-[#0b2721] border border-[#ffd700]/30 text-slate-300 hover:text-[#ffd700] hover:border-[#ffd700] hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all"
              title="View your saved cookbook"
            >
              <BookOpen className="w-5 h-5 text-[#ffd700]" />
              {savedCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#ffd700] text-[#081c18] text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center shadow-md animate-bounce">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-[#0b2721] border border-[#ffd700]/30 text-[#ffd700] hover:border-[#ffd700] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b2721] border-b border-[#ffd700]/30 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-white hover:bg-[#ffd700] hover:text-[#081c18] transition-colors"
          >
            Home Feed
          </button>
          {categoriesMeta.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                onNavigate('category', cat.id);
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-[#ffd700] hover:text-[#081c18] transition-colors"
            >
              {cat.name}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-700/50 space-y-1">
            <button
              onClick={() => {
                onNavigate('about');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-white"
            >
              About The Blog
            </button>
            <button
              onClick={() => {
                onNavigate('editors');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-white"
            >
              Culinary Editors &amp; Peer Review
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-white"
            >
              Contact Editorial Staff
            </button>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center pt-24 px-4">
          <div className="bg-[#0b2721] border-2 border-[#ffd700] rounded-2xl w-full max-w-2xl p-6 shadow-[0_0_50px_rgba(255,215,0,0.35)]">
            <div className="flex items-center justify-between pb-4 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-[#ffd700]" />
                <h3 className="text-lg font-bold text-white">Search recipepots Journal</h3>
              </div>
              <button
                onClick={() => setShowSearchModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4">
              <input
                type="text"
                autoFocus
                placeholder="Search keywords: instant pot, dutch oven, keto, pulled pork, pasta..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setShowSearchModal(false);
                }}
                className="w-full px-4 py-3 rounded-xl bg-[#081c18] border border-[#ffd700]/50 text-white placeholder-slate-400 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/30 text-base"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-[#ffd700]" /> Popular searches:
              </span>
              {['instant pot chicken', 'dutch oven stew', 'slow cooker pulled pork', 'keto one pot', '15 minute dinner'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    onSearchChange(tag);
                    setShowSearchModal(false);
                  }}
                  className="px-2.5 py-1 text-xs rounded-full bg-[#081c18] border border-[#5fdee7]/40 text-[#5fdee7] hover:border-[#ffd700] hover:text-[#ffd700] transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowSearchModal(false)}
                className="px-5 py-2 rounded-xl bg-[#ffd700] text-[#081c18] font-bold text-sm yellow-hover-btn"
              >
                View Results
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
