import React, { useState } from 'react';
import { ChefHat, Mail, Phone, Heart, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { CategoryId } from '../types/recipe';
import { categoriesMeta } from '../data/articlesIndex';

interface FooterProps {
  onNavigate: (view: string, categoryId?: CategoryId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmailInput('');
      }, 3500);
    }
  };

  return (
    <footer className="bg-[#051310] border-t-2 border-[#ffd700]/30 text-slate-300 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 text-left group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0b2721] to-[#15463b] border border-[#ffd700] p-2 flex items-center justify-center shadow-md">
                <ChefHat className="w-6 h-6 text-[#ffd700]" />
              </div>
              <span className="text-2xl font-black text-white group-hover:text-[#ffd700] transition-colors">
                recipe<span className="text-[#ffd700]">pots</span>
              </span>
            </button>
            <p className="text-xs text-slate-400 leading-relaxed">
              DELICIOUS ONE-POT RECIPES &amp; KITCHEN GEAR GUIDES - PUBLISHED DAILY. Dedicated to the science of single-vessel dinners, slow cooker physics, and rapid weeknight meals.
            </p>
            <div className="pt-2 text-xs font-mono text-[#5fdee7] space-y-1">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#ffd700]" />
                <a href="tel:03046308631" className="hover:underline">03046308631</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#ffd700]" />
                <a href="mailto:mz751136000@gmail.com" className="hover:underline break-all">
                  mz751136000@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Categories Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-[#ffd700] tracking-wider">
              Recipe Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {categoriesMeta.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onNavigate('category', cat.id)}
                    className="hover:text-[#ffd700] transition-colors text-left flex items-center gap-1.5"
                  >
                    <span className="text-[#5fdee7]">›</span>
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Editorial & Standards Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-[#ffd700] tracking-wider">
              Editorial Rigor
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#ffd700] transition-colors"
                >
                  About The Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('standards')}
                  className="hover:text-[#ffd700] transition-colors"
                >
                  Editorial Standards &amp; Peer Review
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('editors')}
                  className="hover:text-[#ffd700] transition-colors"
                >
                  Culinary Technologists &amp; Masthead
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-[#ffd700] transition-colors"
                >
                  Privacy Policy &amp; GDPR
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-[#ffd700] transition-colors"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#ffd700] transition-colors"
                >
                  Contact Editorial Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-[#ffd700] tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
              The Daily Monograph
            </h4>
            <p className="text-xs text-slate-400">
              Receive newly peer-reviewed one-pot recipes and equipment thermodynamic analyses every morning.
            </p>
            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500 text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscription confirmed! Welcome to the lab.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[#0b2721] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#ffd700]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#ffd700] text-[#081c18] rounded-lg text-xs font-bold yellow-hover-btn flex items-center justify-center"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-slate-500">
                  Zero spam. Unsubscribe anytime.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} recipepots. All Rights Reserved. Independent Culinary Journal.</p>
          <div className="flex items-center gap-1 text-[11px] text-slate-400">
            <span>Engineered with</span>
            <Heart className="w-3 h-3 text-[#ffd700] fill-current" />
            <span>for home cooks worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
