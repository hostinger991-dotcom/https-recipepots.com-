import { articlesCategory1 } from './articlesCategory1';
import { articlesCategory2 } from './articlesCategory2';
import { articlesCategory3 } from './articlesCategory3';
import { articlesCategory4 } from './articlesCategory4';
import { RecipeArticle, CategoryId } from '../types/recipe';

export const allArticles: RecipeArticle[] = [
  ...articlesCategory1,
  ...articlesCategory2,
  ...articlesCategory3,
  ...articlesCategory4,
];

export interface CategoryMeta {
  id: CategoryId;
  name: string;
  tagline: string;
  description: string;
  count: number;
}

export const categoriesMeta: CategoryMeta[] = [
  {
    id: 'easy-one-pot-dinners',
    name: 'Easy One Pot Dinners',
    tagline: 'Streamlined Skillet & Dutch Oven Magic',
    description: 'High-heat searing, starchy emulsions, and minimal cleanup dinners built for weeknight sanity.',
    count: 5,
  },
  {
    id: 'slow-cooker-crockpot-classics',
    name: 'Slow Cooker & Crockpot Classics',
    tagline: 'Low-Temperature Collagen Breakdown & Slow Simmers',
    description: 'Set-it-and-forget-it mastery. Juicy barbecue pulled pork, savory stews, and Sunday roasts.',
    count: 5,
  },
  {
    id: 'quick-easy-weeknight-dinners',
    name: 'Quick & Easy Weeknight Dinners',
    tagline: 'Quarter-Hour Flash Cooking & Single Sheet Pan Roasts',
    description: 'High-velocity 15-minute stir-fries, 5-ingredient wonders, and crispy sheet pan chicken.',
    count: 5,
  },
  {
    id: 'special-diets-healthy-eating',
    name: 'Special Diets & Healthy Eating',
    tagline: 'Keto, Vegan, Gluten-Free & High-Protein Power',
    description: 'Scientifically calibrated macro-balanced meals that optimize metabolic energy and satiety.',
    count: 5,
  },
];

export const tickerNewsItems = [
  { text: 'BREAKING: New Research Validates Pressure Cooking Polyphenol Retention Over Stovetop Boiling', tag: 'CULINARY SCIENCE' },
  { text: 'INSTANT POT MASTERCLASS: Why Deglazing Stainless Steel Fond Prevents 100% of Burn Codes', tag: 'KITCHEN TECH' },
  { text: 'SLOW COOKER PROTOCOL: The 203°F Collagen Hydrolysis Threshold for Melt-in-Your-Mouth Pulled Pork', tag: 'BARBECUE PHYSICS' },
  { text: 'ONE-POT PASTA REVOLUTION: How Amylose Starch Emulsifies Olive Oil into Velvety Gloss', tag: 'GASTRONOMY' },
  { text: 'SHEET PAN CRUNCH: Preheating Aluminum Pans Eliminates 95% of Soggy Vegetable Condensation', tag: 'CHEF SECRETS' },
  { text: 'KETO SKILLET UPDATE: Tuscan Garlic Cream Delivers 41g Protein with Only 4g Net Carbs', tag: 'METABOLIC LAB' },
  { text: 'HIGH PROTEIN MILESTONE: Turkey Cutlet Spoon-Basting Reaches Anabolic Leucine Saturation', tag: 'FITNESS DIET' },
];

export const editorialStaff = [
  {
    name: 'Chef Marcus Sterling',
    role: 'Executive Culinary Technologist & Editor-in-Chief',
    bio: 'Former sous-chef at Michelin-starred kitchens in Lyon and Chicago. Specializes in food thermodynamics, cast iron metallurgy, and modern pressure cooking dynamics.',
    avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&auto=format&fit=crop&q=80',
    credentials: 'Le Cordon Bleu Paris, B.S. Food Science & Gastronomy',
  },
  {
    name: 'Elena Rostova, M.Sc.',
    role: 'Senior Food Science & Nutrition Editor',
    bio: 'Biochemist turned culinary researcher. Author of comparative studies on antioxidant retention in pressure cookers vs. conventional open braising.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
    credentials: 'M.Sc. Human Nutritional Biochemistry, University of Wisconsin',
  },
  {
    name: 'Chef Julian Vance',
    role: 'Slow Cooking & Pitmaster Specialist',
    bio: 'Native of Memphis, Tennessee. Devoted 15 years to perfecting low-and-slow collagen hydrolysis and wood smoke rubs in home kitchen environments.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    credentials: 'Certified Pitmaster, 2x Memphis in May Competition Finalist',
  },
];
