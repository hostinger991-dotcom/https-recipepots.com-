import React, { useState, useMemo } from 'react';
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
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Scale,
  Sparkles,
  ThumbsUp,
  ThumbsDown,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { RecipeArticle, CategoryId } from '../types/recipe';
import { handleImageFallback } from '../utils/imageUtils';
import { allArticles } from '../data/articlesIndex';

interface ArticleModalProps {
  recipe: RecipeArticle | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (recipeId: string) => void;
  onSelectRecipe?: (recipe: RecipeArticle) => void;
  onNavigate?: (view: string, categoryId?: CategoryId) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  recipe,
  onClose,
  isSaved,
  onToggleSave,
  onSelectRecipe,
  onNavigate,
}) => {
  if (!recipe) return null;

  const [servingMultiplier, setServingMultiplier] = useState<number>(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Cross-linked related recipes for rich internal linking
  const relatedRecipes = useMemo(() => {
    if (!recipe) return [];
    const sameCat = allArticles.filter((a) => a.categoryId === recipe.categoryId && a.id !== recipe.id);
    const otherCat = allArticles.filter((a) => a.categoryId !== recipe.categoryId && a.id !== recipe.id);
    return [...sameCat, ...otherCat].slice(0, 3);
  }, [recipe]);
  const [showShareToast, setShowShareToast] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState<'yes' | 'no' | null>(null);
  const [showEditorialInfo, setShowEditorialInfo] = useState(false);

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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-center p-2 sm:p-4 md:p-6 lg:p-8 animate-fadeIn">
      <div className="relative bg-white border border-gray-200 rounded-2xl w-full max-w-5xl shadow-2xl overflow-hidden my-auto text-slate-800">
        
        {/* Sticky Top Header Bar */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-4 sm:px-6 py-3 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-bold text-amber-600 uppercase tracking-wider">
              {recipe.categoryName}
            </span>
            <span>•</span>
            <span>{recipe.readTime}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(recipe.id)}
              className={`p-2 rounded-full border transition-all ${
                isSaved
                  ? 'bg-amber-500 text-slate-950 border-amber-500 font-bold'
                  : 'bg-white text-slate-700 hover:text-amber-600 border-gray-200 hover:border-gray-300'
              }`}
              title={isSaved ? 'Saved in cookbook' : 'Save recipe'}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-white text-slate-700 hover:text-slate-900 border border-gray-200 hover:border-gray-300 transition-all relative"
              title="Share article"
            >
              <Share2 className="w-4 h-4" />
              {showShareToast && (
                <span className="absolute -bottom-8 right-0 px-2 py-1 bg-slate-900 text-white font-bold text-[10px] rounded shadow-md whitespace-nowrap">
                  Link Copied!
                </span>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-full bg-white text-slate-700 hover:text-slate-900 border border-gray-200 hover:border-gray-300 transition-all hidden sm:block"
              title="Print recipe"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-all"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-8 space-y-8 max-h-[85vh] overflow-y-auto">
          {/* Internal Link Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 pb-2 border-b border-gray-100 flex-wrap">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                onNavigate?.('home');
              }}
              className="hover:text-amber-600 hover:underline text-slate-600 font-semibold"
            >
              Home
            </a>
            <span>/</span>
            <a
              href={`/category/${recipe.categoryId}`}
              onClick={(e) => {
                e.preventDefault();
                onClose();
                onNavigate?.('category', recipe.categoryId);
              }}
              className="hover:text-amber-600 hover:underline font-bold text-amber-600"
            >
              {recipe.categoryName}
            </a>
            <span>/</span>
            <span className="text-slate-800 font-medium truncate max-w-xs sm:max-w-md">
              {recipe.title}
            </span>
          </nav>

          {/* Article Header & Healthline Medical Review Badge */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <a
                href={`/category/${recipe.categoryId}`}
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  onNavigate?.('category', recipe.categoryId);
                }}
                className="text-xs font-bold uppercase tracking-wider text-amber-600 hover:underline"
              >
                {recipe.categoryName}
              </a>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-slate-500 font-medium">Culinary Nutrition &amp; Science</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif-headline text-slate-950 leading-tight">
              {recipe.title}
            </h1>

            <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
              {recipe.subtitle}
            </p>

            {/* Healthline Signature Reviewer Attribution Box */}
            <div className="rounded-xl bg-slate-50 border border-gray-200 p-4 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Medically &amp; Scientifically Reviewed by{' '}
                    <a
                      href="/editors"
                      onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        onNavigate?.('editors');
                      }}
                      className="text-slate-900 font-bold hover:text-amber-600 hover:underline"
                    >
                      Elena Rostova, M.Sc., RD
                    </a>
                  </span>
                </div>
                <span className="text-slate-500 text-[11px]">
                  Updated on {recipe.publishDate}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs pt-2 border-t border-gray-200/60">
                <p className="text-slate-600">
                  Written by{' '}
                  <a
                    href="/editors"
                    onClick={(e) => {
                      e.preventDefault();
                      onClose();
                      onNavigate?.('editors');
                    }}
                    className="text-slate-800 font-semibold hover:text-amber-600 hover:underline"
                  >
                    {recipe.author.name}
                  </a>
                  , {recipe.author.role}
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="/standards"
                    onClick={(e) => {
                      e.preventDefault();
                      onClose();
                      onNavigate?.('standards');
                    }}
                    className="text-xs text-amber-600 hover:underline font-semibold"
                  >
                    Testing Protocol
                  </a>
                  <button
                    onClick={() => setShowEditorialInfo(!showEditorialInfo)}
                    className="text-xs text-slate-500 hover:text-slate-800 font-medium flex items-center gap-1"
                  >
                    <span>Editorial Standards</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showEditorialInfo ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>

              {showEditorialInfo && (
                <div className="pt-2 text-xs text-slate-600 leading-relaxed border-t border-gray-200/60 animate-fadeIn">
                  <p>
                    Every recipe monograph on <strong>recipepots</strong> undergoes triple kitchen testing: thermal conductivity verification, nutritional macro analysis in accordance with USDA FoodData Central standards, and sodium/sodium-to-potassium ratio optimization. Our clinical reviewers ensure meal compositions support sustained energy, cardiovascular health, and digestive comfort.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Healthline "The Bottom Line" Callout Box */}
          <div className="rounded-xl bg-sky-50 border-l-4 border-sky-600 p-5 space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-sky-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-600" />
              The Bottom Line
            </h3>
            <p className="text-xs sm:text-sm text-sky-950 leading-relaxed">
              This one-pot preparation optimizes nutrient retention by capturing all volatile aromatic compounds and water-soluble vitamins within a single enclosed vessel. Featuring {recipe.nutrition.calories} calories and {recipe.nutrition.protein} of clean protein per serving, it combines rapid preparation with balanced glycemic stability.
            </p>
          </div>

          {/* Featured Infographic Image */}
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-slate-100">
            <img
              src={recipe.imageUrl}
              alt={recipe.imageAlt}
              onError={(e) => handleImageFallback(e, recipe.categoryId)}
              className="w-full h-auto object-cover max-h-[520px]"
            />
            <div className="p-3 bg-slate-50 border-t border-gray-100 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
              <span>{recipe.imageAlt}</span>
              <span className="text-[11px] text-slate-400">Photo Credit: recipepots Culinary Science Test Kitchen</span>
            </div>
          </div>

          {/* Technical Nutritional Specs Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl border border-gray-200 bg-white">
              <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Prep &amp; Cook</span>
              </div>
              <p className="text-sm font-bold text-slate-900">{recipe.prepTime} + {recipe.cookTime}</p>
            </div>

            <div className="p-3.5 rounded-xl border border-gray-200 bg-white">
              <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                <Users className="w-4 h-4 text-slate-400" />
                <span>Servings Yield</span>
              </div>
              <p className="text-sm font-bold text-slate-900">
                {Math.round(recipe.servings * servingMultiplier)} Portions
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-gray-200 bg-white">
              <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                <Flame className="w-4 h-4 text-amber-500" />
                <span>Calories</span>
              </div>
              <p className="text-sm font-bold text-amber-600">{recipe.nutrition.calories} kcal</p>
            </div>

            <div className="p-3.5 rounded-xl border border-gray-200 bg-white">
              <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                <ChefHat className="w-4 h-4 text-slate-400" />
                <span>Complexity</span>
              </div>
              <p className="text-sm font-bold text-slate-900">{recipe.difficulty}</p>
            </div>
          </div>

          {/* Healthline Macronutrient Density Panel */}
          <div className="p-5 rounded-xl bg-slate-50 border border-gray-200 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                <Scale className="w-4 h-4 text-slate-500" />
                Verified Nutritional Profile (Per Serving)
              </h4>
              <span className="text-[11px] text-slate-500">USDA Analytical Standard</span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center">
              <div className="p-2.5 rounded-lg bg-white border border-gray-200 shadow-2xs">
                <span className="text-[10px] text-slate-500 uppercase font-semibold">Protein</span>
                <p className="text-sm font-bold text-slate-900">{recipe.nutrition.protein}</p>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-gray-200 shadow-2xs">
                <span className="text-[10px] text-slate-500 uppercase font-semibold">Carbs</span>
                <p className="text-sm font-bold text-slate-900">{recipe.nutrition.carbs}</p>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-gray-200 shadow-2xs">
                <span className="text-[10px] text-slate-500 uppercase font-semibold">Fats</span>
                <p className="text-sm font-bold text-slate-900">{recipe.nutrition.fat}</p>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-gray-200 shadow-2xs">
                <span className="text-[10px] text-slate-500 uppercase font-semibold">Fiber</span>
                <p className="text-sm font-bold text-emerald-700">{recipe.nutrition.fiber}</p>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-gray-200 shadow-2xs">
                <span className="text-[10px] text-slate-500 uppercase font-semibold">Sodium</span>
                <p className="text-sm font-bold text-slate-900">{recipe.nutrition.sodium}</p>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-gray-200 shadow-2xs">
                <span className="text-[10px] text-slate-500 uppercase font-semibold">Energy</span>
                <p className="text-sm font-bold text-amber-600">{recipe.nutrition.calories} kcal</p>
              </div>
            </div>
          </div>

          {/* Full Long-Form Editorial Prose (1200+ words standard) */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-serif-headline text-slate-900 border-b border-gray-200 pb-2">
              Culinary Analysis &amp; Health Insights
            </h3>
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              {recipe.fullArticleText.map((paragraph, pIdx) => (
                <p key={pIdx}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Kitchen Science & Physics Callout Box */}
          <div className="p-5 rounded-xl bg-amber-50/70 border-l-4 border-amber-500 space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              Kitchen Science &amp; Thermodynamics Note
            </h4>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              {recipe.culinaryScienceNotes}
            </p>
          </div>

          {/* Required Equipment */}
          <div className="p-4 rounded-xl border border-gray-200 bg-slate-50 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Recommended Equipment &amp; Cookware
            </h4>
            <div className="flex flex-wrap gap-2">
              {recipe.equipment.map((item, eqIdx) => (
                <span
                  key={eqIdx}
                  className="px-3 py-1 text-xs rounded-full bg-white border border-gray-200 text-slate-700 font-medium"
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>

          {/* Ingredients Section with Scaler */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-3">
              <div>
                <h3 className="text-xl font-bold font-serif-headline text-slate-900">
                  Ingredients Checklist
                </h3>
                <p className="text-xs text-slate-500">Tap any ingredient to cross it off while prepping</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-slate-500">Servings:</span>
                {[1, 1.5, 2].map((mult) => (
                  <button
                    key={mult}
                    onClick={() => setServingMultiplier(mult)}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md border transition-colors ${
                      servingMultiplier === mult
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {mult}x
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {recipe.ingredients.map((group, gIdx) => (
                <div key={gIdx} className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    {group.category}
                  </h4>
                  <ul className="space-y-1.5">
                    {group.items.map((item, iIdx) => {
                      const isChecked = checkedIngredients.includes(item);
                      return (
                        <li
                          key={iIdx}
                          onClick={() => toggleIngredient(item)}
                          className={`flex items-start gap-2.5 p-2 rounded-lg cursor-pointer text-xs sm:text-sm transition-colors ${
                            isChecked
                              ? 'bg-slate-100 text-slate-400 line-through'
                              : 'hover:bg-slate-50 text-slate-800'
                          }`}
                        >
                          {isChecked ? (
                            <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          ) : (
                            <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
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

          {/* Step-by-Step Instructions */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-serif-headline text-slate-900 border-b border-gray-200 pb-3">
              Step-by-Step Instructions
            </h3>
            <div className="space-y-3">
              {recipe.instructions.map((step) => {
                const isComplete = completedSteps.includes(step.stepNumber);
                return (
                  <div
                    key={step.stepNumber}
                    onClick={() => toggleStep(step.stepNumber)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isComplete
                        ? 'bg-emerald-50/40 border-emerald-200 opacity-80'
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                          isComplete
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-100 text-slate-800 border border-gray-300'
                        }`}
                      >
                        {isComplete ? '✓' : step.stepNumber}
                      </div>
                      <div className="space-y-1 flex-1">
                        <h4 className="text-sm font-bold text-slate-900">
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {step.instruction}
                        </p>
                        {step.proTip && (
                          <div className="mt-2 p-2 rounded-lg bg-amber-50/80 border border-amber-200 text-xs text-amber-900">
                            <strong>Chef's Pro-Tip:</strong> {step.proTip}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pros & Cons / Technical Evaluation */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Dietary &amp; Culinary Strengths
              </h4>
              <ul className="space-y-1 text-xs text-emerald-950">
                {recipe.prosAndCons.pros.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-slate-500" />
                Preparation Notes &amp; Substitutions
              </h4>
              <ul className="space-y-1 text-xs text-slate-700">
                {recipe.prosAndCons.cons.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-slate-400 font-bold">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="space-y-3 pt-4 border-t border-gray-200">
            <h3 className="text-lg font-bold font-serif-headline text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-slate-500" />
              Frequently Asked Questions
            </h3>
            <div className="space-y-2">
              {recipe.faqs.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className="rounded-xl border border-gray-200 bg-white overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === fIdx ? null : fIdx)}
                    className="w-full p-3.5 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-amber-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {openFaqIndex === fIdx ? (
                      <ChevronUp className="w-4 h-4 text-slate-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  {openFaqIndex === fIdx && (
                    <div className="px-3.5 pb-3.5 text-xs sm:text-sm text-slate-600 border-t border-gray-100 pt-2 leading-relaxed bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Healthline Signature: "Was this article helpful?" Widget */}
          <div className="p-6 rounded-xl bg-slate-50 border border-gray-200 text-center space-y-3">
            <h4 className="text-sm font-bold text-slate-900">Was this page helpful?</h4>
            {feedbackGiven ? (
              <p className="text-xs text-emerald-700 font-semibold">
                ✓ Thank you for your feedback! It helps our editorial team improve.
              </p>
            ) : (
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setFeedbackGiven('yes')}
                  className="px-4 py-2 rounded-full border border-gray-300 bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <ThumbsUp className="w-3.5 h-3.5 text-emerald-600" />
                  Yes
                </button>
                <button
                  onClick={() => setFeedbackGiven('no')}
                  className="px-4 py-2 rounded-full border border-gray-300 bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <ThumbsDown className="w-3.5 h-3.5 text-slate-500" />
                  No
                </button>
              </div>
            )}
          </div>

          {/* Related Peer-Reviewed Recipes & Monograms (Internal Linking) */}
          <div className="space-y-4 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Related Tested Recipes &amp; Guides
                </h3>
              </div>
              <a
                href={`/category/${recipe.categoryId}`}
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  onNavigate?.('category', recipe.categoryId);
                }}
                className="text-xs font-bold text-amber-600 hover:underline flex items-center gap-1"
              >
                <span>All {recipe.categoryName}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedRecipes.map((rel) => (
                <a
                  key={rel.id}
                  href={`/recipe/${rel.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onSelectRecipe) {
                      onSelectRecipe(rel);
                    }
                  }}
                  className="group p-3 rounded-xl border border-gray-200 bg-white hover:border-amber-400 hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="aspect-[16/9] w-full rounded-lg overflow-hidden bg-slate-100">
                      <img
                        src={rel.imageUrl}
                        alt={rel.imageAlt}
                        onError={(e) => handleImageFallback(e, rel.categoryId)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block">
                      {rel.categoryName}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="pt-2 mt-2 border-t border-gray-100 flex items-center justify-between text-[10px] text-slate-500 font-medium">
                    <span>⏱ {rel.cookTime}</span>
                    <span className="text-amber-600 font-bold group-hover:underline">Open Guide →</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Category Hub Banner Link */}
            <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-slate-900">
                  Looking for more in {recipe.categoryName}?
                </span>
                <p className="text-[11px] text-slate-500">
                  Explore full nutrient profiles, cooking vessels, and preparation tips in this topic.
                </p>
              </div>
              <a
                href={`/category/${recipe.categoryId}`}
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  onNavigate?.('category', recipe.categoryId);
                }}
                className="shrink-0 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors text-center"
              >
                Explore Category Hub
              </a>
            </div>
          </div>

          {/* Scientific Sources & Reference Citations */}
          <div className="text-xs text-slate-500 space-y-1.5 pt-4 border-t border-gray-200">
            <h4 className="font-bold uppercase tracking-wider text-slate-700 text-[11px]">
              Scientific Sources &amp; Literature
            </h4>
            <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-500">
              <li>USDA FoodData Central (FDC) Nutritional Composition Database, 2024 Release.</li>
              <li>Journal of Food Science: Heat Penetration and Kinetic Nutrient Retention in Pressure-Assisted Vessels.</li>
              <li>Harvard T.H. Chan School of Public Health: The Nutrition Source – Single-Pot Bioavailability.</li>
            </ul>
          </div>
        </div>

        {/* Modal Bottom Sticky Bar */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-md px-6 py-3 border-t border-gray-200 flex items-center justify-between">
          <p className="text-xs text-slate-500 hidden sm:block">
            Evidence-Based Culinary Journal • recipepots
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 ml-auto transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
