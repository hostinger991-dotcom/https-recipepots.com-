import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('recipepots_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('recipepots_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('recipepots_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-slideUp">
      <div className="p-4 sm:p-5 rounded-2xl bg-[#0b2721] border-2 border-[#ffd700] shadow-[0_0_30px_rgba(255,215,0,0.3)] backdrop-blur-xl">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-6 h-6 text-[#ffd700] shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white">Privacy &amp; Cookie Consent</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              recipepots uses essential cookies to remember your serving scale preferences and cookbook bookmarks in accordance with GDPR &amp; AdSense compliance standards.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={handleAccept}
                className="px-4 py-1.5 rounded-lg bg-[#ffd700] text-[#081c18] font-bold text-xs yellow-hover-btn"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="px-3 py-1.5 rounded-lg bg-[#081c18] border border-slate-700 text-slate-400 hover:text-white text-xs"
              >
                Essential Only
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
