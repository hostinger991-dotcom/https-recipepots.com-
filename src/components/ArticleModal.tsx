import React, { useState } from 'react';
import {
  X,
  Clock,
  Flame,
  Users,
  ChefHat,
  Bookmark,
  Share2,
  Printer,
  CheckSquare,
  Square,
  HelpCircle,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Scale,
  Atom,
} from 'lucide-react';
import { RecipeArticle } from '../types/recipe';

interface ArticleModalProps {
  recipe: RecipeArticle | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (recipeId: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  recipe,
  onClose,
  isSaved,
  onToggleSave,
}) => {
  if (!recipe) return null;

  const [servingMultiplier, setServingMultiplier] = useState<number>(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showShareToast, setShowShareToast] = useState(false);

  const toggleStep = (stepNumber: number) => {
    if (completedSteps.includes(stepNumber)) {
      setCompletedSteps(completedSteps.filter((s) => s !== stepNumber));
    } else {
      setCompletedSteps([...completedSteps, stepNumber]);
    }
  };

  const toggleIngredient = (item: string) => {
    if (checkedIngredients.includes(item)) {
      setCheckedIngredients(checkedIngredients.filter((i) => i !== item));
    } else {
      setCheckedIngredients([...checkedIngredients, item]);
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center p-2 sm:p-4 md:p-6 lg:p-8 animate-fadeIn">
      <div className="relative bg-[#081c18] border-2 border-[#ffd700]/60 rounded-3xl w-full max-w-4xl shadow-[0_0_80px_rgba(255,215,0,0.3)] overflow-hidden my-auto text-slate-100">
        
        {/* Floating Top Controls */}
        <div className="sticky top-0 z-30 bg-[#081c18]/90 backdrop-blur-md px-4 sm:px-6 py-3 border-b border-[#ffd700]/30 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-[#5fdee7]">
            <span className="px-2 py-0.5 rounded bg-[#0b2721] border border-[#5fdee7]/40 uppercase font-bold">
              {recipe.categoryName}
            </span>
            <span className="hidden sm:inline text-slate-400">• {recipe.readTime}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(recipe.id)}
              className={`p-2 rounded-xl transition-all ${
                isSaved
                  ? 'bg-[#ffd700] text-[#081c18]'
                  : 'bg-[#0b2721] text-slate-300 hover:text-[#ffd700] border border-[#ffd700]/30'
              }`}
              title={isSaved ? 'Saved in cookbook' : 'Save to cookbook'}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-[#0b2721] text-slate-300 hover:text-[#ffd700] border border-[#ffd700]/30 transition-all relative"
              title="Share recipe"
            >
              <Share2 className="w-4 h-4" />
              {showShareToast && (
                <span className="absolute -bottom-8 right-0 px-2 py-1 bg-[#ffd700] text-[#081c18] font-bold text-[10px] rounded shadow-md whitespace-nowrap">
                  Link Copied!
                </span>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-[#0b2721] text-slate-300 hover:text-[#ffd700] border border-[#ffd700]/30 transition-all hidden sm:block"
              title="Print recipe guide"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#0b2721] text-slate-300 hover:text-white hover:bg-red-950/40 border border-slate-700 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-8 space-y-8 max-h-[85vh] overflow-y-auto">
          {/* Header & Meta */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ffd700]">
              <Sparkles className="w-4 h-4" />
              <span>PEER-REVIEWED TECHNICAL MONOGRAPH</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold font-editorial text-white leading-tight">
              {recipe.title}
            </h1>

            <p className="text-base sm:text-lg text-[#5fdee7] font-medium leading-relaxed">
              {recipe.subtitle}
            </p>

            {/* Author Byline */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <img
                  src={recipe.author.avatar}
                  alt={recipe.author.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#ffd700]"
                />
                <div>
                  <p className="text-sm font-bold text-white">{recipe.author.name}</p>
                  <p className="text-xs text-slate-400">{recipe.author.role}</p>
                </div>
              </div>
              <div className="text-right text-xs text-slate-400 font-mono">
                <p>Published: {recipe.publishDate}</p>
                <p className="text-[#5fdee7]">Review Status: Verified &amp; Kitchen Tested</p>
              </div>
            </div>
          </div>

          {/* Featured Hero Infographic Image */}
          <div className="relative rounded-2xl overflow-hidden border border-[#ffd700]/30 shadow-2xl bg-[#071613]">
            <img
              src={recipe.imageUrl}
              alt={recipe.imageAlt}
              className="w-full h-auto object-cover max-h-[500px]"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#081c18] via-[#081c18]/70 to-transparent p-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#ffd700] bg-black/60 px-2 py-1 rounded border border-[#ffd700]/30">
                Official Visual Blueprint • 100% Unique Infographic
              </span>
            </div>
          </div>

          {/* Quick Technical Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-[#0b2721] border border-[#ffd700]/20 flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#ffd700]" />
              <div>
                <p className="text-[10px] uppercase font-mono text-slate-400">Prep / Cook</p>
                <p className="text-xs sm:text-sm font-bold text-white">{recipe.prepTime} / {recipe.cookTime}</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0b2721] border border-[#ffd700]/20 flex items-center gap-3">
              <Users className="w-6 h-6 text-[#5fdee7]" />
              <div>
                <p className="text-[10px] uppercase font-mono text-slate-400">Yield</p>
                <p className="text-xs sm:text-sm font-bold text-white">
                  {Math.round(recipe.servings * servingMultiplier)} Servings
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0b2721] border border-[#ffd700]/20 flex items-center gap-3">
              <Flame className="w-6 h-6 text-[#ff9800]" />
              <div>
                <p className="text-[10px] uppercase font-mono text-slate-400">Energy</p>
                <p className="text-xs sm:text-sm font-bold text-white">{recipe.nutrition.calories} kcal</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0b2721] border border-[#ffd700]/20 flex items-center gap-3">
              <ChefHat className="w-6 h-6 text-[#5fdee7]" />
              <div>
                <p className="text-[10px] uppercase font-mono text-slate-400">Complexity</p>
                <p className="text-xs sm:text-sm font-bold text-white">{recipe.difficulty}</p>
              </div>
            </div>
          </div>

          {/* Macro Breakdown Strip */}
          <div className="p-4 rounded-2xl bg-[#0b2721]/80 border border-[#5fdee7]/30">
            <h4 className="text-xs font-mono font-bold uppercase text-[#5fdee7] tracking-wider mb-3 flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#ffd700]" />
              Nutritional Macronutrient Density (Per Serving)
            </h4>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center">
              <div className="p-2 rounded-lg bg-[#081c18] border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase">Protein</span>
                <p className="text-sm font-black text-[#ffd700]">{recipe.nutrition.protein}</p>
              </div>
              <div className="p-2 rounded-lg bg-[#081c18] border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase">Carbs</span>
                <p className="text-sm font-black text-white">{recipe.nutrition.carbs}</p>
              </div>
              <div className="p-2 rounded-lg bg-[#081c18] border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase">Fats</span>
                <p className="text-sm font-black text-white">{recipe.nutrition.fat}</p>
              </div>
              <div className="p-2 rounded-lg bg-[#081c18] border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase">Dietary Fiber</span>
                <p className="text-sm font-black text-[#5fdee7]">{recipe.nutrition.fiber}</p>
              </div>
              <div className="p-2 rounded-lg bg-[#081c18] border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase">Sodium</span>
                <p className="text-sm font-black text-white">{recipe.nutrition.sodium}</p>
              </div>
              <div className="p-2 rounded-lg bg-[#081c18] border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase">Calories</span>
                <p className="text-sm font-black text-[#ff9800]">{recipe.nutrition.calories}</p>
              </div>
            </div>
          </div>

          {/* Full Long-Form Editorial Prose (1200+ words standard) */}
          <div className="prose prose-invert max-w-none space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
            <h3 className="text-xl font-bold font-editorial text-white border-b border-[#ffd700]/30 pb-2 flex items-center gap-2">
              <Atom className="w-5 h-5 text-[#ffd700]" />
              Culinary Science &amp; Monograph Analysis
            </h3>
            {recipe.fullArticleText.map((paragraph, pIdx) => (
              <p key={pIdx} className="text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Scientific Callout Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0b2721] to-[#144238] border-l-4 border-[#ffd700] shadow-md">
            <div className="flex items-center gap-2 text-sm font-bold text-[#ffd700] mb-2 font-mono">
              <Sparkles className="w-4 h-4" />
              CHEF'S MOLECULAR SCIENCE NOTE
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {recipe.culinaryScienceNotes}
            </p>
          </div>

          {/* Required Kitchen Equipment */}
          <div className="p-4 rounded-xl bg-[#0b2721] border border-slate-800">
            <h4 className="text-xs font-mono font-bold uppercase text-[#5fdee7] tracking-wider mb-2">
              Required Kitchen Gear &amp; Vessels
            </h4>
            <div className="flex flex-wrap gap-2">
              {recipe.equipment.map((item, eqIdx) => (
                <span
                  key={eqIdx}
                  className="px-2.5 py-1 text-xs rounded-lg bg-[#081c18] border border-slate-700 text-slate-300"
                >
                  ⚙️ {item}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Ingredients Checklist with Servings Multiplier */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#ffd700]/30 pb-3">
              <h3 className="text-xl font-bold font-editorial text-white">
                Ingredients &amp; Mise en Place
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-mono">Servings Scale:</span>
                {[1, 1.5, 2].map((mult) => (
                  <button
                    key={mult}
                    onClick={() => setServingMultiplier(mult)}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg border transition-all ${
                      servingMultiplier === mult
                        ? 'bg-[#ffd700] text-[#081c18] border-[#ffd700]'
                        : 'bg-[#0b2721] text-slate-300 border-slate-700 hover:border-[#ffd700]'
                    }`}
                  >
                    {mult}x
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {recipe.ingredients.map((group, gIdx) => (
                <div key={gIdx} className="space-y-2.5">
                  <h4 className="text-xs font-mono font-bold uppercase text-[#ffd700] tracking-wider">
                    {group.category}
                  </h4>
                  <ul className="space-y-2">
                    {group.items.map((item, iIdx) => {
                      const isChecked = checkedIngredients.includes(item);
                      return (
                        <li
                          key={iIdx}
                          onClick={() => toggleIngredient(item)}
                          className={`flex items-start gap-2.5 p-2 rounded-lg cursor-pointer text-xs sm:text-sm transition-colors ${
                            isChecked
                              ? 'bg-emerald-950/20 text-slate-400 line-through'
                              : 'bg-[#0b2721]/60 text-slate-200 hover:bg-[#0b2721]'
                          }`}
                        >
                          {isChecked ? (
                            <CheckSquare className="w-4 h-4 text-[#ffd700] shrink-0 mt-0.5" />
                          ) : (
                            <Square className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                          )}
                          <span>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Interactive Instructions */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-editorial text-white border-b border-[#ffd700]/30 pb-3">
              Step-by-Step Cooking Instructions
            </h3>
            <div className="space-y-4">
              {recipe.instructions.map((step) => {
                const isComplete = completedSteps.includes(step.stepNumber);
                return (
                  <div
                    key={step.stepNumber}
                    onClick={() => toggleStep(step.stepNumber)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                      isComplete
                        ? 'bg-[#0b2721]/40 border-emerald-500/40 opacity-75'
                        : 'yellow-hover-box'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                          isComplete
                            ? 'bg-emerald-500 text-black'
                            : 'bg-[#ffd700] text-[#081c18]'
                        }`}
                      >
                        {isComplete ? '✓' : step.stepNumber}
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <h4 className="text-sm sm:text-base font-bold text-white">
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {step.instruction}
                        </p>
                        {step.proTip && (
                          <div className="mt-2 p-2.5 rounded-lg bg-[#081c18] border border-[#5fdee7]/30 text-xs text-[#5fdee7]">
                            <strong className="text-[#ffd700]">Pro-Tip:</strong> {step.proTip}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pros & Cons Analysis */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#0b2721] border border-emerald-500/30">
              <h4 className="text-xs font-mono font-bold uppercase text-emerald-400 mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Editorial Strengths
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {recipe.prosAndCons.pros.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">+</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#0b2721] border border-amber-500/30">
              <h4 className="text-xs font-mono font-bold uppercase text-amber-400 mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" /> Technical Considerations
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {recipe.prosAndCons.cons.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">−</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h3 className="text-lg font-bold font-editorial text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#ffd700]" />
              Reader &amp; Kitchen FAQs
            </h3>
            <div className="space-y-2">
              {recipe.faqs.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className="rounded-xl bg-[#0b2721] border border-slate-800 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === fIdx ? null : fIdx)}
                    className="w-full p-3.5 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-white hover:text-[#ffd700] transition-colors"
                  >
                    <span>{faq.question}</span>
                    {openFaqIndex === fIdx ? (
                      <ChevronUp className="w-4 h-4 text-[#ffd700]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  {openFaqIndex === fIdx && (
                    <div className="px-3.5 pb-3.5 text-xs sm:text-sm text-slate-300 border-t border-slate-800 pt-2 leading-relaxed bg-[#081c18]/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-[#081c18]/95 backdrop-blur-md px-6 py-3 border-t border-[#ffd700]/30 flex items-center justify-between">
          <p className="text-xs text-slate-400 font-mono hidden sm:block">
            Journal Monograph #{recipe.id} • recipepots
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-[#ffd700] text-[#081c18] font-bold text-xs sm:text-sm yellow-hover-btn ml-auto"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
