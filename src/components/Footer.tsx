import React, { useState } from 'react';
import { Mail, Phone, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';
import { CategoryId } from '../types/recipe';
import { categoriesMeta } from '../data/articlesIndex';
import { LogoIcon } from './Logo';

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
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Editorial Mission */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 text-left group focus:outline-none"
            >
              <LogoIcon size={40} />
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-slate-100 transition-colors leading-none">
                  recipe<span className="text-[#d82424]">pots</span>
                  <span className="inline-block w-2 h-2 rounded-full bg-[#d82424] ml-1 mb-0.5"></span>
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                  Evidence-Based Culinary Journal
                </span>
              </div>
            </button>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              recipepots is an independent culinary journal committed to evidence-based nutrition, thermal cooking science, and rapid one-pot recipes. Every guide is kitchen-tested 3x for nutrient retention and flavor optimization.
            </p>

            <div className="pt-2 text-xs text-slate-300 space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d82424]" />
                <span className="text-slate-400">Helpline / WhatsApp:</span>
                <a href="tel:03046308631" className="font-semibold text-white hover:underline">
                  03046308631
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d82424]" />
                <span className="text-slate-400">Editorial Inquiries:</span>
                <a href="mailto:mz751136000@gmail.com" className="font-semibold text-white hover:underline break-all">
                  mz751136000@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Categories Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase text-white tracking-wider">
              Recipe Topics
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {categoriesMeta.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onNavigate('category', cat.id)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  All 20 Recipe Monograms
                </button>
              </li>
            </ul>
          </div>

          {/* About & Trust Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase text-white tracking-wider">
              About &amp; Integrity
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('standards')} className="hover:text-white transition-colors">
                  Our Editorial Process
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('editors')} className="hover:text-white transition-colors">
                  Medical &amp; Culinary Board
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">
                  Terms of Use
                </button>
              </li>
            </ul>
          </div>

          {/* Healthline-Style Newsletter Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase text-white tracking-wider">
              Health &amp; Meal Newsletter
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get science-backed recipes and weekly nutritional breakthroughs sent directly to your inbox.
            </p>
            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Subscribed! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#d82424]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#d82424] hover:bg-[#b91c1c] text-white rounded-md text-xs font-bold flex items-center justify-center transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-slate-500 block">
                  Zero spam. Unsubscribe anytime.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Healthline Signature Medical & Dietary Disclaimer Box */}
        <div className="pt-8 border-t border-slate-800/80 text-xs text-slate-400 space-y-3">
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 leading-relaxed text-[11px] text-slate-400">
            <strong className="text-slate-300 font-semibold uppercase tracking-wider block mb-1">
              Health &amp; Nutritional Content Disclaimer
            </strong>
            The culinary guides and nutritional analyses published on <strong>recipepots</strong> are for informational, home-cooking, and educational purposes only. Our nutritional profiles are calculated using laboratory food composition databases (including the USDA FoodData Central). However, recipepots does not provide personalized medical advice, diagnosis, or clinical treatment. Individuals with specific medical conditions, metabolic disorders, severe food allergies, or specific dietary requirements should consult a licensed healthcare professional or registered dietitian before adopting significant dietary regimens.
          </div>
        </div>

        {/* Bottom Copyright & Masthead */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} recipepots. All Rights Reserved. An Independent Evidence-Based Culinary Journal.</p>
          <div className="flex items-center gap-4 text-xs">
            <button onClick={() => onNavigate('privacy')} className="hover:text-slate-300">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('terms')} className="hover:text-slate-300">
              Terms of Use
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-slate-300">
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
