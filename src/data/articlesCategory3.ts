import { RecipeArticle } from '../types/recipe';

export const articlesCategory3: RecipeArticle[] = [
  {
    id: 'art-11',
    slug: 'healthy-weeknight-dinners',
    title: 'Crispy Lemon Garlic Herb Salmon Skillet with Tender Asparagus in 20 Minutes',
    subtitle: 'Golden seared salmon fillets in a bright lemon butter garlic pan sauce with crisp-tender asparagus',
    categoryId: 'quick-easy-weeknight-dinners',
    categoryName: 'Quick & Easy Weeknight Dinners',
    keyword: 'healthy weeknight dinners',
    author: {
      name: 'Elena Rostova, M.Sc., RD',
      role: 'Nutrition Research Director & Food Editor',
      avatar: 'https://images.unsplash.com/photo-1594824813580-1a7375a22d4f?w=150&auto=format&fit=crop&q=80',
    },
    publishDate: 'October 14, 2026',
    readTime: '7 min read',
    prepTime: '5 mins',
    cookTime: '15 mins',
    servings: 4,
    difficulty: 'Easy',
    imageUrl: '/images/healthy_weeknight_1792922263517.jpg',
    imageAlt: 'Golden seared salmon fillets nestled alongside bright green asparagus spears with lemon slices in a cast iron skillet',
    excerpt: 'Restaurant-quality salmon on your table in under twenty minutes. Crispy golden edges, tender flaky center, and a delicious lemon garlic butter sauce made in one skillet.',
    equipment: ['12-inch Cast Iron or Stainless Steel Skillet', 'Fish Spatula or Tongs', 'Lemon Juicer'],
    ingredients: [
      {
        category: 'Salmon & Seasoning',
        items: [
          '4 salmon fillets (about 6 oz each), skin-on or skinless, patted dry',
          '1 tbsp olive oil',
          '1 tsp garlic powder',
          '0.5 tsp smoked paprika',
          '0.5 tsp salt and fresh cracked black pepper',
        ],
      },
      {
        category: 'Lemon Garlic Sauce & Asparagus',
        items: [
          '1 bunch fresh asparagus, woody ends trimmed (cut into 2-inch pieces)',
          '2 tbsp unsalted butter',
          '4 cloves fresh garlic, minced',
          '0.25 cup low-sodium vegetable or chicken broth',
          '1 fresh lemon, juiced (about 2 tbsp) plus 1 lemon sliced for garnish',
          '2 tbsp fresh chopped parsley',
        ],
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Prep Salmon and Asparagus',
        instruction: 'Pat the salmon fillets completely dry with paper towels. Season both sides with garlic powder, paprika, salt, and black pepper. Snap or trim off the woody bottom 1.5 inches of the asparagus spears.',
        proTip: 'Dry salmon is the key to getting that crispy, golden crust in the pan. Any surface moisture will cause the fish to steam rather than sear.',
      },
      {
        stepNumber: 2,
        title: 'Sear the Salmon Fillets',
        instruction: 'Heat 1 tablespoon of olive oil and 1 tablespoon of butter in a large skillet over medium-high heat. Once hot and shimmering, place salmon skin-side down (or flesh-side down if skinless) and cook for 4 to 5 minutes undisturbed until a golden crust forms. Gently flip and cook for 3 to 4 more minutes until flaky and cooked through. Transfer to a clean plate.',
      },
      {
        stepNumber: 3,
        title: 'Sauté the Asparagus',
        instruction: 'In the same hot skillet with the remaining juices, add the trimmed asparagus. Cook for 3 to 4 minutes, stirring occasionally, until bright vibrant green and crisp-tender.',
      },
      {
        stepNumber: 4,
        title: 'Make the 2-Minute Lemon Garlic Sauce',
        instruction: 'Push asparagus to the sides. Add the remaining 1 tablespoon of butter and minced garlic to the center of the pan, stirring for 30 seconds until fragrant. Pour in the broth and fresh lemon juice, scraping up any delicious browned bits from the pan. Simmer for 1 minute until slightly reduced.',
      },
      {
        stepNumber: 5,
        title: 'Nestle Salmon Back and Garnish',
        instruction: 'Place the salmon fillets back into the skillet. Spoon the warm lemon garlic butter over the salmon and asparagus. Garnish with fresh lemon slices and chopped parsley, and serve immediately.',
      },
    ],
    nutrition: {
      calories: 390,
      protein: '36g',
      carbs: '6g',
      fat: '24g',
      fiber: '2.4g',
      sodium: '380mg',
    },
    culinaryScienceNotes: 'Salmon is packed with heart-healthy omega-3 fatty acids. Searing it hot and fast preserves these delicate polyunsaturated fats while keeping the center flaky and juicy.',
    prosAndCons: {
      pros: [
        'Complete dinner ready in just 20 minutes from cutting board to table.',
        'Rich in protein, omega-3s, and essential vitamins without heavy carbs.',
        'Only one skillet to wash at the end of the evening.',
        'Bright, restaurant-caliber flavor that feels special enough for date night.',
      ],
      cons: [
        'Salmon cooks quickly, so stay nearby—overcooking past 145°F will cause it to lose its tenderness.',
      ],
    },
    faqs: [
      {
        question: 'How do I know when salmon is done cooking?',
        answer: 'Salmon is cooked when it flakes easily when gently pressed with a fork and its internal temperature reaches 125°F-130°F for medium or 145°F for well done. The center will turn from translucent to an opaque soft pink.',
      },
      {
        question: 'Can I use frozen salmon fillets?',
        answer: 'Yes! Simply thaw the fillets in the refrigerator overnight or place the vacuum-sealed fillets in a bowl of cold water for 20 minutes before cooking. Always pat completely dry before seasoning.',
      },
    ],
    fullArticleText: [
      'When you need a healthy, nourishing dinner on a busy Tuesday night, it’s hard to beat a fresh salmon fillet. Salmon cooks in minutes, pairs naturally with green vegetables, and delivers a boost of heart-healthy omega-3 fatty acids and clean protein.',
      'This 20-minute lemon garlic salmon skillet solves dinner in one pan. By cooking the salmon and asparagus together in the same skillet, the asparagus soaks up the savory pan drippings while staying crisp and bright green.',
      'The pan sauce comes together in less than two minutes. A quick splash of chicken broth and fresh lemon juice combined with melted butter and minced garlic lifts all the caramelized salmon drippings from the bottom of the pan, creating a silky glaze that complements the rich fish.',
      'Serve it as-is for a healthy low-carb, keto-friendly meal, or spoon it over fluffy steamed jasmine rice or buttered couscous for the kids.'
    ],
  },
  {
    id: 'art-12',
    slug: 'quick-dinners-with-chicken',
    title: '15-Minute Honey Garlic Chicken and Vegetable Stir-Fry Skillet',
    subtitle: 'Tender chicken bites, bell peppers, and snap peas tossed in a sweet-savory garlic ginger sauce',
    categoryId: 'quick-easy-weeknight-dinners',
    categoryName: 'Quick & Easy Weeknight Dinners',
    keyword: 'quick dinners with chicken',
    author: {
      name: 'Elena Rostova, M.Sc., RD',
      role: 'Nutrition Research Director & Food Editor',
      avatar: 'https://images.unsplash.com/photo-1594824813580-1a7375a22d4f?w=150&auto=format&fit=crop&q=80',
    },
    publishDate: 'October 13, 2026',
    readTime: '7 min read',
    prepTime: '8 mins',
    cookTime: '7 mins',
    servings: 4,
    difficulty: 'Easy',
    imageUrl: '/images/ingredient_dinner_1792922260710.jpg',
    imageAlt: 'Sizzling wok stir-fry featuring tender golden chicken bites, colorful bell peppers, and snap peas in a glossy honey garlic glaze',
    excerpt: 'Faster than delivery and a million times healthier. Tender chicken breast bites, crisp colorful veggies, and an irresistible 4-ingredient honey garlic sauce made in 15 minutes flat.',
    equipment: ['12-inch Wok or Large Nonstick Skillet', 'Tongs or Wooden Spatula', 'Small Whisk'],
    ingredients: [
      {
        category: 'Chicken & Fresh Veggies',
        items: [
          '1.5 lbs boneless skinless chicken breasts (or thighs), cut into bite-sized 1-inch cubes',
          '1 tbsp avocado oil or sesame oil',
          '1 red bell pepper, thinly sliced',
          '1 cup sugar snap peas or snow peas',
          '1.5 cups broccoli florets',
          '2 green onions, sliced (for garnish)',
          '1 tsp sesame seeds',
        ],
      },
      {
        category: 'Easy Honey Garlic Stir-Fry Glaze',
        items: [
          '0.25 cup low-sodium soy sauce (or tamari for gluten-free)',
          '3 tbsp pure honey',
          '1 tbsp toasted sesame oil',
          '3 cloves fresh garlic, finely minced',
          '1 tsp freshly grated ginger (or 0.5 tsp ground ginger)',
          '1 tsp cornstarch (mixed into the sauce for a glossy finish)',
        ],
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Whisk the Sauce First',
        instruction: 'In a small bowl, whisk together the soy sauce, honey, toasted sesame oil, minced garlic, ginger, and cornstarch until smooth. Set aside.',
        proTip: 'In stir-fry cooking, everything happens very fast! Always whisk your sauce and chop your veggies before you turn on the stove.',
      },
      {
        stepNumber: 2,
        title: 'Sear the Chicken over High Heat',
        instruction: 'Heat 1 tablespoon of oil in your wok or large skillet over high heat until smoking hot. Add the chicken bites in a single layer. Let sear undisturbed for 2 minutes to get golden edges, then stir-fry for 2 more minutes until cooked through. Transfer chicken to a clean bowl.',
      },
      {
        stepNumber: 3,
        title: 'Flash-Cook the Crunchy Veggies',
        instruction: 'In the same hot pan, toss in the broccoli, sliced bell pepper, and snap peas. Add 2 tablespoons of water (the water will instantly create steam that cooks the broccoli in seconds). Stir-fry for 2 to 3 minutes until crisp-tender and brightly colored.',
      },
      {
        stepNumber: 4,
        title: 'Toss Together and Glaze',
        instruction: 'Return the cooked chicken to the skillet. Give the honey garlic sauce a quick re-whisk and pour it over the chicken and vegetables.',
      },
      {
        stepNumber: 5,
        title: 'Simmer 60 Seconds to Bubble & Serve',
        instruction: 'Toss continuously for 60 to 90 seconds. The sauce will bubble vigorously and thicken into a glossy glaze that coats every single piece. Garnish with green onions and sesame seeds, and serve immediately over steamed rice.',
      },
    ],
    nutrition: {
      calories: 340,
      protein: '38g',
      carbs: '22g',
      fat: '11g',
      fiber: '3.2g',
      sodium: '620mg',
    },
    culinaryScienceNotes: 'High-heat wok cooking flash-steams vegetables, preserving heat-sensitive vitamin C and natural antioxidants while locking in that signature crisp crunch.',
    prosAndCons: {
      pros: [
        'Ready in literally 15 minutes—far faster than waiting for takeout delivery.',
        'Naturally sweetened with real honey instead of refined corn syrup.',
        'Loaded with nutrient-rich vegetables that kids enjoy thanks to the sweet-savory glaze.',
        'Super easy to swap in whatever vegetables are in your crisper drawer.',
      ],
      cons: [
        'Requires all prep to be done before heating the pan because the cooking phase takes only 7 minutes.',
      ],
    },
    faqs: [
      {
        question: 'Can I substitute other meats or tofu?',
        answer: 'Yes! This glaze works equally well with thinly sliced flank steak, raw shrimp (cooks in just 3 minutes), or cubed extra-firm tofu.',
      },
      {
        question: 'How do I keep stir-fry chicken tender and juicy?',
        answer: 'Cook over high heat in small pieces and do not overcook! Four minutes over high heat cooks one-inch chicken breast pieces all the way through while keeping them moist.',
      },
    ],
    fullArticleText: [
      'Next time you find yourself reaching for your phone to order Chinese takeout, try making this 15-minute honey garlic chicken stir-fry instead. It’s faster, costs a fraction of delivery, and you have complete control over high-quality ingredients.',
      'The magic of a great stir-fry comes down to temperature. By getting your skillet hot and searing the chicken in a single layer, you develop that savory wok-char flavor. Then, adding a tiny splash of water to the vegetables creates a quick burst of steam that cooks raw broccoli and snap peas to bright green crispness in under three minutes.',
      'Our sauce uses five simple pantry staples: low-sodium soy sauce, pure honey, sesame oil, fresh garlic, and ginger. A teaspoon of cornstarch gives the sauce that luxurious, restaurant-style gloss that clings to chicken and vegetables.',
      'Serve it over steamed jasmine rice, brown rice, or tender ramen noodles for a complete family meal in record time.'
    ],
  },
  {
    id: 'art-13',
    slug: '5-ingredient-dinners',
    title: 'Creamy 5-Ingredient Garlic Parmesan Gnocchi with Spinach in 15 Minutes',
    subtitle: 'Pillowy potato gnocchi simmered in a silky garlic cream sauce with fresh baby spinach',
    categoryId: 'quick-easy-weeknight-dinners',
    categoryName: 'Quick & Easy Weeknight Dinners',
    keyword: '5 ingredient dinners',
    author: {
      name: 'Chef Marcus Sterling',
      role: 'Culinary Editor & Recipe Developer',
      avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80',
    },
    publishDate: 'October 12, 2026',
    readTime: '6 min read',
    prepTime: '5 mins',
    cookTime: '10 mins',
    servings: 4,
    difficulty: 'Easy',
    imageUrl: '/images/healthy_soup_1792922238910.jpg',
    imageAlt: 'Skillet of pillowy potato gnocchi coated in a rich garlic parmesan cream sauce folded with fresh spinach',
    excerpt: 'When you have almost no groceries and zero time. Just 5 simple ingredients—shelf-stable potato gnocchi, butter, garlic, heavy cream, and baby spinach—for an unbelievable dinner.',
    equipment: ['12-inch Skillet', 'Wooden Spoon', 'Cheese Grater'],
    ingredients: [
      {
        category: 'The 5 Core Ingredients',
        items: [
          '1 package (16 oz) shelf-stable or refrigerated potato gnocchi',
          '3 tbsp unsalted butter',
          '4 cloves fresh garlic, minced',
          '1 cup heavy whipping cream',
          '3 cups fresh baby spinach leaves',
        ],
      },
      {
        category: 'Pantry Seasoning Essentials',
        items: [
          '0.5 cup freshly grated Parmigiano-Reggiano or Parmesan',
          '0.5 tsp salt and freshly ground black pepper',
        ],
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Toast the Gnocchi in Butter',
        instruction: 'Melt 2 tablespoons of butter in a large skillet over medium-high heat. Add the raw potato gnocchi straight from the package (no need to boil first in a separate pot!). Sauté for 4 to 5 minutes, stirring occasionally, until the gnocchi develop a light golden exterior and puff up.',
        proTip: 'Toasting gnocchi in butter gives them a slightly crisp shell with a soft, pillowy center—infinitely better than boiling them in water.',
      },
      {
        stepNumber: 2,
        title: 'Add Fresh Minced Garlic',
        instruction: 'Add the remaining 1 tablespoon of butter and minced garlic to the skillet. Stir constantly for 60 seconds until the garlic is fragrant without letting it burn.',
      },
      {
        stepNumber: 3,
        title: 'Pour in Cream and Simmer',
        instruction: 'Pour the heavy cream into the skillet and season with salt and black pepper. Bring to a gentle simmer over medium heat for 3 minutes. The cream will begin to thicken and coat the gnocchi.',
      },
      {
        stepNumber: 4,
        title: 'Wilt the Spinach',
        instruction: 'Add the fresh baby spinach to the skillet in handfuls. Stir gently into the warm cream sauce for 1 to 2 minutes until just wilted.',
      },
      {
        stepNumber: 5,
        title: 'Melt the Parmesan and Serve',
        instruction: 'Remove the skillet from heat and fold in the grated Parmesan cheese until melted and velvety. Spoon into bowls and serve immediately with extra black pepper.',
      },
    ],
    nutrition: {
      calories: 440,
      protein: '11g',
      carbs: '48g',
      fat: '24g',
      fiber: '3.1g',
      sodium: '490mg',
    },
    culinaryScienceNotes: 'Potato gnocchi release starch as they simmer in the cream, helping the sauce thicken naturally into a velvety emulsion without requiring flour or cornstarch.',
    prosAndCons: {
      pros: [
        'Requires only 5 core ingredients and 15 minutes of total time.',
        'Pan-toasting the gnocchi in butter eliminates the need to boil water or wash a colander.',
        'Pure Italian comfort food that feels like a cozy restaurant dish.',
        'Easy to customize by adding diced chicken, crispy bacon, or sun-dried tomatoes.',
      ],
      cons: [
        'Rich in cream and butter—best enjoyed as comforting weeknight fuel.',
      ],
    },
    faqs: [
      {
        question: 'Do I really not need to boil the gnocchi first?',
        answer: 'Yes! Shelf-stable or refrigerated gnocchi cook perfectly right in the skillet. Pan-frying them in butter cooks them through while giving them a delightful crispy-chewy texture.',
      },
      {
        question: 'Can I add a protein?',
        answer: 'Yes! Shredded rotisserie chicken, leftover cooked Italian sausage, or sautéed shrimp pair seamlessly with this garlic cream sauce.',
      },
    ],
    fullArticleText: [
      'We’ve all had those evenings: it’s 7:00 PM, you’re exhausted, the fridge looks bare, and the temptation to order expensive takeout is overwhelming. That’s exactly when this 5-ingredient garlic parmesan gnocchi comes to the rescue.',
      'Keeping a vacuum-sealed package of potato gnocchi in your pantry is one of the best kitchen tricks you can have. Unlike dried pasta which requires boiling several quarts of water, shelf-stable gnocchi can be sautéed directly in a skillet with melted butter.',
      'As the gnocchi sizzle in the pan, their outer layer develops a golden, slightly crisp edge while the inside stays wonderfully soft and pillowy. Once they’re golden, you simply stir in minced garlic, pour in cream, and fold in fresh baby spinach.',
      'The residual starch from the potato gnocchi naturally thickens the cream into a rich sauce in about two minutes. Stir in grated Parmesan at the very end off the heat, and dinner is served.'
    ],
  },
  {
    id: 'art-14',
    slug: 'family-friendly-weeknight-meals',
    title: 'One-Skillet Cheesy Beef Taco Pasta: A 25-Minute Kid-Approved Dinner',
    subtitle: 'Seasoned lean ground beef, tender pasta shells, sweet corn, and melted cheddar in one pan',
    categoryId: 'quick-easy-weeknight-dinners',
    categoryName: 'Quick & Easy Weeknight Dinners',
    keyword: 'family friendly weeknight meals',
    author: {
      name: 'Chef Marcus Sterling',
      role: 'Culinary Editor & Recipe Developer',
      avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80',
    },
    publishDate: 'October 11, 2026',
    readTime: '8 min read',
    prepTime: '10 mins',
    cookTime: '15 mins',
    servings: 6,
    difficulty: 'Easy',
    imageUrl: '/images/healthy_weeknight_1792922263517.jpg',
    imageAlt: 'Bubbling skillet of cheesy taco pasta shells with ground beef, sweet corn, and melted cheddar garnished with cilantro',
    excerpt: 'Combines two family favorites—tacos and mac & cheese—into one glorious, 25-minute weeknight dinner. Everything cooks in one skillet, including the dry pasta noodles!',
    equipment: ['12-inch Deep Skillet with Lid', 'Meat Chopper or Wooden Spoon', 'Cheese Grater'],
    ingredients: [
      {
        category: 'Beef & Taco Seasoning',
        items: [
          '1.5 lbs lean ground beef (or ground turkey)',
          '1 packet (1 oz) taco seasoning',
          '1 medium yellow onion, finely diced',
          '3 cloves garlic, minced',
        ],
      },
      {
        category: 'Pasta, Broth & Cheesy Sauce',
        items: [
          '8 oz medium pasta shells or rotini (dry, uncooked)',
          '2 cups low-sodium beef broth',
          '1 can (10 oz) diced tomatoes with green chilies (like Ro-Tel)',
          '1 can (15 oz) tomato sauce',
          '1 cup sweet corn kernels (fresh or frozen)',
          '1.5 cups shredded sharp cheddar or Monterey Jack cheese',
          '0.25 cup chopped cilantro or green onions for serving',
        ],
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Brown Ground Beef and Onion',
        instruction: 'In a large 12-inch skillet over medium-high heat, brown the ground beef and diced onion for 6 to 7 minutes, breaking the meat into small crumbles. Stir in the garlic and taco seasoning, cooking for 1 minute. Drain off any excess grease.',
      },
      {
        stepNumber: 2,
        title: 'Add Broth, Tomatoes, and Dry Pasta',
        instruction: 'Pour in the beef broth, canned diced tomatoes with green chilies (with juices), tomato sauce, sweet corn, and uncooked dry pasta shells. Stir thoroughly so the pasta is submerged in the liquid.',
      },
      {
        stepNumber: 3,
        title: 'Cover and Simmer',
        instruction: 'Bring the liquid to a rolling boil. Cover the skillet with a tight-fitting lid, reduce heat to medium-low, and simmer for 10 to 12 minutes, stirring once halfway through, until the pasta shells are tender.',
      },
      {
        stepNumber: 4,
        title: 'Melt the Cheddar Cheese',
        instruction: 'Remove the lid. Stir in 1 cup of the shredded cheddar cheese until melted and creamy. Sprinkle the remaining half cup of cheese across the top, cover with the lid for 2 minutes to let the cheese melt into a gooey layer.',
      },
      {
        stepNumber: 5,
        title: 'Garnish and Serve Hot',
        instruction: 'Top with chopped fresh cilantro or green onions, and serve hot directly from the skillet with tortilla chips or a simple side salad.',
      },
    ],
    nutrition: {
      calories: 470,
      protein: '34g',
      carbs: '42g',
      fat: '19g',
      fiber: '4.2g',
      sodium: '690mg',
    },
    culinaryScienceNotes: 'Cooking pasta directly in the seasoned tomato-beef broth allows the pasta shells to soak up taco flavor inside and out while releasing starches that create a thick, velvety sauce.',
    prosAndCons: {
      pros: [
        'An absolute kid favorite that combines taco night with mac and cheese.',
        'Cooks entirely in one skillet in 25 minutes flat.',
        'Inexpensive family dinner that yields generous portions.',
        'Leftovers reheat like a dream for school or work lunches.',
      ],
      cons: [
        'Make sure the lid fits tightly so steam does not escape while cooking the pasta.',
      ],
    },
    faqs: [
      {
        question: 'Can I use ground turkey instead of beef?',
        answer: 'Yes! Lean ground turkey or ground chicken works wonderfully. Add 1 tablespoon of olive oil when browning since poultry has less natural fat.',
      },
      {
        question: 'Is it spicy for young children?',
        answer: 'Mild taco seasoning and mild diced tomatoes make it very kid-friendly. If your family enjoys extra heat, use a hot taco seasoning and add sliced jalapeños.',
      },
    ],
    fullArticleText: [
      'Getting the whole family to agree on dinner can feel like an impossible task. When you’re caught between picky eaters and busy evening schedules, this cheesy one-skillet taco pasta is the ultimate peacekeeper.',
      'It takes the irresistible Mexican flavors of taco night—seasoned ground beef, sweet corn, diced tomatoes, and warm spices—and marries them with the cozy comfort of cheesy pasta shells.',
      'The real magic of this recipe is that the dry pasta cooks right inside the skillet with the beef broth and tomato sauce. You don’t need to boil water in a second pot or wash a colander. As the pasta shells simmer, they absorb the beef broth and tomato juices, making each noodle burst with flavor.',
      'Stirring in sharp cheddar cheese right at the end turns the sauce into a creamy, luscious coating that hugs every shell. It’s warm, satisfying, and ready in 25 minutes from start to finish.'
    ],
  },
  {
    id: 'art-15',
    slug: '30-minute-healthy-dinners',
    title: 'Easy 30-Minute Mediterranean Sheet Pan Greek Chicken & Vegetables',
    subtitle: 'Marinated chicken breast, colorful bell peppers, red onions, kalamata olives, and feta cheese',
    categoryId: 'quick-easy-weeknight-dinners',
    categoryName: 'Quick & Easy Weeknight Dinners',
    keyword: '30 minute healthy dinners',
    author: {
      name: 'Elena Rostova, M.Sc., RD',
      role: 'Nutrition Research Director & Food Editor',
      avatar: 'https://images.unsplash.com/photo-1594824813580-1a7375a22d4f?w=150&auto=format&fit=crop&q=80',
    },
    publishDate: 'October 10, 2026',
    readTime: '8 min read',
    prepTime: '10 mins',
    cookTime: '20 mins',
    servings: 4,
    difficulty: 'Easy',
    imageUrl: '/images/beef_roast_1792922242729.jpg',
    imageAlt: 'Golden roasted Greek chicken breast strips on a sheet pan with caramelized red onions, sweet bell peppers, olives, and melted feta',
    excerpt: 'Bring vibrant Mediterranean flavors to your table in thirty minutes. Chicken breasts, bell peppers, zucchini, kalamata olives, and creamy feta roasted on a single sheet pan.',
    equipment: ['18x13-inch Rimmed Baking Sheet', 'Parchment Paper', 'Cutting Board', 'Small Whisk'],
    ingredients: [
      {
        category: 'Greek Herb Marinade',
        items: [
          '3 tbsp extra-virgin olive oil',
          '1 fresh lemon, juiced (about 2 tbsp)',
          '4 cloves fresh garlic, minced',
          '1.5 tsp dried oregano',
          '1 tsp dried thyme',
          '1 tsp salt and 0.5 tsp black pepper',
        ],
      },
      {
        category: 'Chicken & Mediterranean Veggies',
        items: [
          '1.5 lbs boneless skinless chicken breasts, sliced into 0.75-inch strips',
          '1 large red bell pepper, cut into chunks',
          '1 medium zucchini, sliced into half-moons',
          '1 medium red onion, cut into wedges',
          '0.5 cup pitted Kalamata olives',
          '0.5 cup crumbled Greek feta cheese',
          'Fresh chopped oregano or parsley and lemon wedges for serving',
        ],
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Preheat Oven and Whisk Marinade',
        instruction: 'Preheat your oven to 425°F (220°C). Line a large rimmed sheet pan with parchment paper. In a small bowl, whisk together the olive oil, lemon juice, minced garlic, oregano, thyme, salt, and pepper.',
      },
      {
        stepNumber: 2,
        title: 'Toss Chicken and Vegetables',
        instruction: 'Place sliced chicken strips, bell peppers, zucchini, and red onion onto the prepared sheet pan. Pour the marinade over the top and toss with your hands until everything is evenly coated.',
      },
      {
        stepNumber: 3,
        title: 'Spread and Scatter Olives',
        instruction: 'Spread the chicken and vegetables into a single layer across the pan. Scatter the Kalamata olives across the sheet pan among the ingredients.',
        proTip: 'A hot oven (425°F) is crucial for sheet pan chicken—it roasts the chicken fast so it stays juicy while caramelizing the edges of the peppers and onions.',
      },
      {
        stepNumber: 4,
        title: 'Roast for 18 to 20 Minutes',
        instruction: 'Roast for 18 to 20 minutes until the chicken reaches an internal temperature of 165°F (74°C) and the vegetables are tender with slightly charred edges.',
      },
      {
        stepNumber: 5,
        title: 'Top with Feta and Lemon',
        instruction: 'Remove the pan from the oven. Immediately crumble Greek feta cheese over the hot sheet pan (the residual heat will soften the feta). Squeeze fresh lemon juice over everything, garnish with fresh herbs, and serve.',
      },
    ],
    nutrition: {
      calories: 380,
      protein: '42g',
      carbs: '8g',
      fat: '19g',
      fiber: '2.5g',
      sodium: '640mg',
    },
    culinaryScienceNotes: 'High-heat 425°F roasting seals in moisture in lean chicken breast strips before they can dry out, while caramelizing the natural sugars in red onions and bell peppers.',
    prosAndCons: {
      pros: [
        'Naturally gluten-free, low-carb, and packed with Mediterranean heart-healthy fats.',
        'Ready in 30 minutes from fridge to table with one single pan to wash.',
        'Brilliant flavor contrast between savory chicken, tangy feta, and salty olives.',
        'Incredible for meal prep—tastes delicious served hot or cold in grain bowls.',
      ],
      cons: [
        'Slice chicken breasts into even strips so all pieces roast through at the exact same time.',
      ],
    },
    faqs: [
      {
        question: 'Can I serve this with pita or rice?',
        answer: 'Absolutely! It pairs wonderfully with warm pita bread and tzatziki sauce, or served over a bed of lemon-dill rice or quinoa.',
      },
      {
        question: 'Can I use chicken thighs instead of breasts?',
        answer: 'Yes! Boneless skinless chicken thighs work brilliantly. Cut them into strips and roast for the exact same 20 minutes.',
      },
    ],
    fullArticleText: [
      'The Mediterranean diet has long been recognized by health professionals as one of the healthiest and most sustainable ways of eating in the world. Filled with olive oil, lean proteins, vibrant vegetables, and fresh herbs, it proves that healthy food can be deeply satisfying.',
      'This 30-minute sheet pan Greek chicken brings all of those classic sunny Mediterranean flavors right to your weeknight dinner table with zero fuss.',
      'The marinade is a simple combination of extra-virgin olive oil, fresh lemon juice, garlic, and Mediterranean oregano. Tossing the chicken and vegetables directly on the sheet pan saves you from dirtying a separate bowl.',
      'Roasting at 425°F is the key technique here. The high heat roasts the chicken quickly so the meat stays succulent and juicy, while the red onions and zucchini caramelize around the edges.',
      'Sprinkling creamy crumbled feta cheese over the hot pan right out of the oven allows the cheese to soften slightly into the vegetables. Serve with warm pita bread or a spoonful of cool tzatziki sauce for a fresh, energizing dinner.'
    ],
  },
];
