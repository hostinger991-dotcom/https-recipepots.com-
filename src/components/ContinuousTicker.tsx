import React from 'react';
import { Flame, Activity } from 'lucide-react';
import { tickerNewsItems } from '../data/articlesIndex';

export const ContinuousTicker: React.FC = () => {
  return (
    <div className="relative w-full bg-slate-100 border-b border-gray-200 overflow-hidden py-2 select-none">
      {/* Visual Indicator Badge on Left */}
      <div className="absolute left-0 top-0 bottom-0 z-20 bg-gradient-to-r from-slate-100 via-slate-100 to-transparent pl-4 pr-6 flex items-center pointer-events-none">
        <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-red-200 text-[10px] font-bold tracking-wider text-[#d82424] shadow-xs">
          <Activity className="w-3 h-3 text-[#d82424] animate-pulse" />
          TRENDING TOPICS
        </span>
      </div>

      {/* Continuously Scrolling Track */}
      <div className="ticker-track flex items-center gap-8 whitespace-nowrap pl-44">
        {[...tickerNewsItems, ...tickerNewsItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 group cursor-pointer">
            <span className="text-[10px] font-bold uppercase text-slate-500 bg-white px-2 py-0.5 rounded border border-gray-200">
              {item.tag}
            </span>
            <span className="text-xs font-medium text-slate-700 group-hover:text-[#d82424] transition-colors">
              {item.text}
            </span>
            <span className="text-slate-300 ml-2">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};
