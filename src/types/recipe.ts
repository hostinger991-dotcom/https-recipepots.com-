export type CategoryId = 
  | 'easy-one-pot-dinners'
  | 'slow-cooker-crockpot-classics'
  | 'quick-easy-weeknight-dinners'
  | 'special-diets-healthy-eating';

export interface NutritionInfo {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
  fiber: string;
  sodium: string;
}

export interface CookingStep {
  stepNumber: number;
  title: string;
  instruction: string;
  proTip?: string;
}

export interface RecipeArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  categoryId: CategoryId;
  categoryName: string;
  keyword: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishDate: string;
  readTime: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: 'Easy' | 'Intermediate' | 'Mastery';
  imageUrl: string;
  imageAlt: string;
  excerpt: string;
  equipment: string[];
  ingredients: {
    category: string;
    items: string[];
  }[];
  instructions: CookingStep[];
  nutrition: NutritionInfo;
  culinaryScienceNotes: string;
  prosAndCons: {
    pros: string[];
    cons: string[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  fullArticleText: string[];
}
