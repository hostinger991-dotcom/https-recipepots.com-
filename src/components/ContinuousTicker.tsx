import React from 'react';
import { Flame, Radio } from 'lucide-react';
import { tickerNewsItems } from '../data/articlesIndex';

export const ContinuousTicker: React.FC = () => {
  return (
    <div className="relative w-full bg-[#071714] border-b border-[#5fdee7]/25 overflow-hidden py-2.5 z-30 select-none">
      {/* Visual Indicator Badge on Left */}
      <div className="absolute left-0 top-0 bottom-0 z-20 bg-gradient-to-r from-[#071714] via-[#071714] to-transparent pl-4 pr-6 flex items-center gap-2 pointer-events-none">
        <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0b2721] border border-[#5fdee7] text-[10px] font-mono font-bold tracking-wider text-[#5fdee7] shadow-[0_0_10px_rgba(95,222,231,0.3)]">
          <Radio className="w-3 h-3 text-[#5fdee7] animate-pulse" />
          LIVE DISPATCH
        </span>
      </div>

      {/* Continuously Scrolling Track */}
      <div className="ticker-track flex items-center gap-12 whitespace-nowrap pl-40">
        {/* Double array for infinite continuous loop */}
        {[...tickerNewsItems, ...tickerNewsItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 group cursor-pointer">
            <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded bg-[#0b2721] border border-[#5fdee7] text-[#5fdee7] group-hover:border-[#ffd700] group-hover:text-[#ffd700] transition-colors shadow-[0_0_8px_rgba(95,222,231,0.2)]">
              {item.tag}
            </span>
            <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors flex items-center gap-2">
              {item.text}
            </span>
            <Flame className="w-3.5 h-3.5 text-[#ffd700] opacity-60 ml-2" />
          </div>
        ))}
      </div>
    </div>
  );
};
