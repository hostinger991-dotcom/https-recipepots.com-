import { articlesCategory1 } from './articlesCategory1';
import { articlesCategory2 } from './articlesCategory2';
import { articlesCategory3 } from './articlesCategory3';
import { articlesCategory4 } from './articlesCategory4';
import { articlesCategory5 } from './articlesCategory5';
import { RecipeArticle, CategoryId } from '../types/recipe';

export const allArticles: RecipeArticle[] = [
  ...articlesCategory1,
  ...articlesCategory2,
  ...articlesCategory3,
  ...articlesCategory4,
  ...articlesCategory5,
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
    tagline: 'Skillet & Dutch Oven Weeknight Comfort',
    description: 'Golden seared meats, starchy pasta sauces, and cozy Dutch oven stews made with minimal cleanup.',
    count: 7,
  },
  {
    id: 'slow-cooker-crockpot-classics',
    name: 'Slow Cooker & Crockpot Classics',
    tagline: 'Low-and-Slow Homestyle Braises & Tender Shredded Meats',
    description: 'Set-it-and-forget-it dinners. Juicy barbecue pulled pork, savory Mexican barbacoa, and Sunday roasts.',
    count: 6,
  },
  {
    id: 'quick-easy-weeknight-dinners',
    name: 'Quick & Easy Weeknight Dinners',
    tagline: 'Under 30-Minute Skillets & Sheet Pan Roasts',
    description: 'Lightning-fast 15-minute stir-fries, 5-ingredient wonders, and crispy sheet pan chicken dinners.',
    count: 6,
  },
  {
    id: 'special-diets-healthy-eating',
    name: 'Special Diets & Healthy Eating',
    tagline: 'Keto, Vegan, Gluten-Free & High-Protein Fuel',
    description: 'Nutrient-rich, macro-balanced meals that nourish your family with wholesome ingredients.',
    count: 6,
  },
];

export const tickerNewsItems = [
  { text: 'INSTANT POT TIP: Why deglazing your stainless steel pot prevents 100% of burn codes', tag: 'KITCHEN TIP' },
  { text: 'SLOW COOKER SECRETS: Low and slow heat tenderizes beef chuck for juicy shredded barbacoa', tag: 'CHEF TRICK' },
  { text: '20-MINUTE DINNER: Crispy pan-seared lemon garlic salmon cooked in one skillet', tag: 'QUICK MEALS' },
  { text: 'ONE-POT PASTA: How cooking pasta directly in sauce creates a velvety restaurant glaze', tag: 'EASY COOKING' },
  { text: 'SHEET PAN PERFECTION: Spreading veggies in a single layer gives you crispy, caramelized edges', tag: 'ROASTING' },
  { text: 'MEDITERRANEAN COMFORT: Warm lemon chickpea stew packed with 11g of natural fiber', tag: 'HEALTHY EATING' },
  { text: 'SUNDAY SUPPER: Classic French beef bourguignon braised in rich red wine and herbs', tag: 'HOMESTYLE' },
];

export const editorialStaff = [
  {
    name: 'Chef Marcus Sterling',
    role: 'Executive Chef & Editor-in-Chief',
    bio: 'Experienced chef with over 15 years in restaurant and test kitchens. Passionate about approachable single-vessel home cooking, hearty braises, and reliable kitchen techniques.',
    avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&auto=format&fit=crop&q=80',
    credentials: 'Culinary Arts Graduate, 15+ Years Commercial & Test Kitchen Experience',
  },
  {
    name: 'Elena Rostova, M.Sc., RD',
    role: 'Nutrition Director & Recipe Developer',
    bio: 'Registered dietitian and food writer dedicated to evidence-based nutrition, high-protein family meals, and delicious special-diet adaptations.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
    credentials: 'M.Sc. Human Nutrition & Dietetics, Registered Dietitian (RD)',
  },
  {
    name: 'Chef Julian Vance',
    role: 'Slow Cooking & BBQ Specialist',
    bio: 'Southern barbecue enthusiast and slow cooker expert. Dedicated to helping families prepare melt-in-your-mouth comfort food with minimal effort.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    credentials: 'Pitmaster & Culinary Educator, 12+ Years Home Cooking Development',
  },
];
