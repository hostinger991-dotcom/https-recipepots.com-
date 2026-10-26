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
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-fadeIn">
      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-300 shadow-2xl text-slate-800">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-900">Privacy &amp; Cookie Preferences</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              recipepots uses essential cookies to save your cookbook bookmarks and scale serving sizes. We adhere strictly to GDPR, CCPA, and publisher standards.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={handleAccept}
                className="px-4 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="px-3 py-1.5 rounded-full bg-slate-100 border border-gray-200 text-slate-700 hover:bg-slate-200 text-xs font-semibold transition-colors"
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
