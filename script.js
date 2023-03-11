// FUNCTION
function createRecipeHTML(recipe) {
  const recipeHTML = document.createElement("div");
  recipeHTML.classList.add("one-recipe-toggle");
  recipeHTML.id = recipe.id;

  const recipeImage = document.createElement("img");
  recipeImage.src = recipe.image;
  recipeImage.alt = recipe.title;
  recipeHTML.appendChild(recipeImage);

  const recipeName = document.createElement("h3");
  recipeName.innerText = recipe.name || recipe.title;
  recipeHTML.appendChild(recipeName);

  const ingredientsHeader = document.createElement("h4");
  ingredientsHeader.innerText = "Ingredients";
  recipeHTML.appendChild(ingredientsHeader);

  const ingredientsList = document.createElement("ul");
  recipe.ingredients.forEach((ingredient) => {
    const ingredientListItem = document.createElement("li");
    ingredientListItem.innerText = ingredient;
    ingredientsList.appendChild(ingredientListItem);
  });
  recipeHTML.appendChild(ingredientsList);

  const stepsHeader = document.createElement("h4");
  stepsHeader.innerText = "Steps";
  recipeHTML.appendChild(stepsHeader);

  const stepsList = document.createElement("ol");
  recipe.steps.forEach((step) => {
    const stepListItem = document.createElement("li");
    stepListItem.innerText = step;
    stepsList.appendChild(stepListItem);
  });
  recipeHTML.appendChild(stepsList);

  return recipeHTML;
}

const breakfastRecipesList = {
  pancakes: {
    id: "pancakes",
    title: "Pancakes",
    image:
      "https://www.allrecipes.com/thmb/WqWggh6NwG-r8PoeA3OfW908FUY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_001-1fa26bcdedc345f182537d95b6cf92d8.jpg",
    ingredients: [
      "1 cup all-purpose flour",
      "2 tablespoons sugar",
      "2 teaspoons baking powder",
      "1/2 teaspoon salt",
      "1 egg",
      "1 cup milk",
      "2 tablespoons vegetable oil"
    ],
    steps: [
      "In a medium bowl, whisk together the flour, sugar, baking powder, and salt.",
      "In another bowl, beat the egg until frothy, then whisk in the milk and oil.",
      "Add the wet ingredients to the dry ingredients and stir until just combined (it's okay if there are a few lumps).",
      "Heat a non-stick pan or griddle over medium heat. Drop 1/4 cup batter onto the pan for each pancake.",
      "Cook until the edges start to dry and the surface is covered with bubbles, then flip and cook until the other side is golden brown. Repeat with remaining batter.",
      "Serve hot with your favorite toppings, such as butter and syrup, fresh fruit, or whipped cream."
    ]
  },

  waffles: {
    id: "waffles",
    title: "Waffles",
    image:
      "https://www.washingtonpost.com/rf/image_982w/2010-2019/WashingtonPost/2022/01/14/Food/Images/V_newsletter_Jan120212.jpg",
    ingredients: [
      "1 3/4 cups all-purpose flour",
      "1 tablespoon baking powder",
      "1/4 teaspoon salt",
      "2 large eggs",
      "1 3/4 cups milk",
      "1/2 cup unsalted butter, melted",
      "1 tablespoon granulated sugar",
      "1/2 teaspoon vanilla extract"
    ],
    steps: [
      "In a large bowl, whisk together the flour, baking powder, and salt.",
      "In another bowl, beat the eggs until frothy, then whisk in the milk, melted butter, sugar, and vanilla extract.",
      "Add the wet ingredients to the dry ingredients and stir until just combined (it's okay if there are a few lumps).",
      "Heat your waffle maker and lightly coat it with cooking spray.",
      "Scoop batter into the waffle maker and cook according to manufacturer's instructions, until golden brown.",
      "Serve hot with your favorite toppings, such as butter and syrup, fresh fruit, or whipped cream."
    ]
  },

  eggsBenedict: {
    id: "eggs-benedict",
    title: "Eggs Benedict",
    image:
      "https://natashaskitchen.com/wp-content/uploads/2022/04/Egg-Benedict-SQ.jpg",
    ingredients: [
      "2 English muffins, split",
      "4 slices Canadian bacon",
      "4 eggs",
      "1/2 cup unsalted butter, melted",
      "3 egg yolks",
      "1 tablespoon lemon juice",
      "1/4 teaspoon salt",
      "1/8 teaspoon cayenne pepper"
    ],
    steps: [
      "Toast English muffins and place one half on each of four plates.",
      "Fry Canadian bacon in a skillet until browned, then place one slice on each English muffin half.",
      "Poach eggs to desired doneness and place one on top of each bacon slice.",
      "In a separate bowl, whisk together melted butter, egg yolks, lemon juice, salt, and cayenne pepper to make hollandaise sauce.",
      "Spoon hollandaise sauce over each egg and serve immediately."
    ]
  },
  frenchToast: {
    id: "french-toast",
    title: "French Toast",
    image:
      "https://assets.bonappetit.com/photos/57ad254ff1c801a1038bc9c9/1:1/w_2560%2Cc_limit/FRENCH-TOAST.jpg",
    ingredients: [
      "4 slices bread",
      "2 large eggs",
      "1/4 cup milk",
      "1/4 teaspoon vanilla extract",
      "1/4 teaspoon ground cinnamon",
      "1 tablespoon unsalted butter"
    ],
    steps: [
      "In a shallow dish, whisk together eggs, milk, vanilla extract, and ground cinnamon.",
      "Dip each slice of bread in the egg mixture, coating both sides evenly.",
      "In a large skillet, melt butter over medium heat and cook bread slices until golden brown on both sides.",
      "Serve hot with toppings such as maple syrup, fruit, or whipped cream."
    ]
  }
};
const lunchRecipesList = {
  spaghetti: {
    id: "spaghetti",
    title: "Spaghetti and Meatballs",
    image:
      "https://www.thereciperebel.com/wp-content/uploads/2018/11/healthy-one-pot-spaghetti-www.thereciperebel.com-1200-18-of-43.jpg",
    ingredients: [
      "1 pound spaghetti",
      "1 pound ground beef",
      "1/2 cup breadcrumbs",
      "1/2 cup milk",
      "1/2 cup grated Parmesan cheese",
      "1 egg",
      "1/4 cup finely chopped parsley",
      "1/4 cup finely chopped onion",
      "1 teaspoon salt",
      "1/2 teaspoon black pepper",
      "3 tablespoons olive oil",
      "1 onion, chopped",
      "3 garlic cloves, minced",
      "2 cans (28 ounces each) of crushed tomatoes",
      "1 teaspoon salt",
      "1/4 teaspoon black pepper",
      "1/4 teaspoon red pepper flakes"
    ],
    steps: [
      "Cook spaghetti according to package instructions and drain.",
      "In a large mixing bowl, combine ground beef, breadcrumbs, milk, Parmesan cheese, egg, parsley, onion, salt, and black pepper. Mix well and form into meatballs.",
      "In a large skillet, heat olive oil over medium heat and cook meatballs until browned on all sides. Remove meatballs from skillet and set aside.",
      "In the same skillet, cook chopped onion and minced garlic until softened. Add crushed tomatoes, salt, black pepper, and red pepper flakes. Simmer for 10-15 minutes.",
      "Add meatballs to the sauce and simmer for an additional 10-15 minutes. Serve meatballs and sauce over cooked spaghetti."
    ]
  },
  chickenAlfredo: {
    id: "chicken-alfredo",
    title: "Chicken Alfredo",
    image:
      "https://www.foodnetwork.com/content/dam/images/food/fullset/2015/9/15/1/FNK_Chicken-Fettucine-Alfredo_s4x3.jpg",
    ingredients: [
      "1 pound fettuccine",
      "2 boneless, skinless chicken breasts, sliced thin",
      "2 tablespoons olive oil",
      "4 cloves garlic, minced",
      "2 cups heavy cream",
      "1/2 cup grated Parmesan cheese",
      "1/4 teaspoon black pepper",
      "1/4 teaspoon salt",
      "1/4 teaspoon red pepper flakes",
      "1/4 cup chopped fresh parsley"
    ],
    steps: [
      "Cook fettuccine according to package instructions and drain.",
      "In a large skillet, heat olive oil over medium heat and cook chicken until browned and cooked through. Remove chicken from skillet and set aside.",
      "In the same skillet, cook minced garlic until fragrant. Add heavy cream, Parmesan cheese, black pepper, salt, and red pepper flakes. Simmer for 10-15 minutes, stirring occasionally.",
      "Add cooked fettuccine and cooked chicken to the sauce and toss until coated. Top with chopped fresh parsley and serve hot."
    ]
  },
  tacoSalad: {
    id: "taco-salad",
    title: "Taco Salad",
    image:
      "https://www.allrecipes.com/thmb/wQCrv01gJqlIFM1AnCjODW3fZ0g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/14253-Taco-Salad-ddmfs-016-4x3-1-8c152400b3a2465fbaff684bdda0a264.jpg",
    ingredients: [
      "1 pound ground beef",
      "1/2 teaspoon garlic powder",
      "1/2 teaspoon onion powder",
      "1 teaspoon ground cumin",
      "1 teaspoon paprika",
      "1/4 teaspoon salt",
      "1/4 teaspoon black pepper",
      "1 head iceberg lettuce, chopped",
      "2 tomatoes, chopped",
      "1/2 cup shredded cheddar cheese",
      "1/4 cup sliced black olives",
      "1/4 cup chopped fresh cilantro",
      "1/2 cup salsa",
      "1/2 cup sour cream",
      "2 tablespoons olive oil"
    ],
    steps: [
      "Brown ground beef in a large skillet over medium-high heat. Drain excess grease.",
      "Add garlic powder, onion powder, cumin, paprika, salt, and black pepper to the skillet. Cook until fragrant, about 1-2 minutes.",
      "Assemble the salad by layering lettuce, tomatoes, ground beef, cheddar cheese, black olives, and cilantro in a large bowl. Drizzle with salsa, sour cream, and olive oil before serving."
    ]
  },
  shepherdsPie: {
    id: "shepherds-pie",
    title: "Shepherd's Pie",
    image:
      "https://food-fanatic-res.cloudinary.com/iu/s--aotUSDOt--/c_thumb,f_auto,g_auto,h_1200,q_auto,w_1200/v1486943529/traditional-shepherds-pie-photo",
    ingredients: [
      "1 pound ground beef",
      "1/2 onion, chopped",
      "2 cloves garlic, minced",
      "1/4 teaspoon dried thyme",
      "1/4 teaspoon dried rosemary",
      "1/4 teaspoon paprika",
      "1/4 teaspoon salt",
      "1/4 teaspoon black pepper",
      "1/4 cup all-purpose flour",
      "1/2 cup beef broth",
      "1/2 cup frozen peas",
      "1/2 cup frozen corn",
      "2 cups mashed potatoes"
    ],
    steps: [
      "Preheat oven to 375°F (190°C).",
      "Cook ground beef, onion, and garlic in a large skillet over medium heat until beef is browned and onion is translucent. Drain any excess fat.",
      "Add thyme, rosemary, paprika, salt, and black pepper to the skillet. Cook for 1-2 minutes until fragrant. Stir in flour and cook for an additional 2 minutes.",
      "Add beef broth and stir until the mixture thickens. Stir in peas and corn.",
      "Transfer the beef mixture to a 9-inch (23cm) pie dish. Spread mashed potatoes over the beef mixture.",
      "Bake for 30-35 minutes until the mashed potatoes are golden brown and the filling is hot and bubbly."
    ]
  }
};
const fifteenRecipesList = {
  stirFry: {
    id: "stir-fry",
    title: "Stir Fry",
    image:
      "https://www.allrecipes.com/thmb/xvlRRhK5ldXuGcXad8XDM5tTAfE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/223382_chicken-stir-fry_Rita-1x1-1-b6b835ccfc714bb6a8391a7c47a06a84.jpg",
    ingredients: [
      "1 pound boneless, skinless chicken breasts, cut into 1/2-inch pieces",
      "1 tablespoon cornstarch",
      "1 tablespoon soy sauce",
      "1/4 teaspoon salt",
      "1/8 teaspoon ground black pepper",
      "2 tablespoons vegetable oil",
      "1 tablespoon grated fresh ginger",
      "2 cloves garlic, minced",
      "1/4 cup water",
      "1 cup snow peas, trimmed",
      "1 medium red bell pepper, cut into thin strips",
      "1/4 cup sliced green onions",
      "1/4 cup chopped cashews"
    ],
    steps: [
      "In a bowl, combine chicken, cornstarch, soy sauce, salt, and pepper; mix well.",
      "In a large skillet or wok, heat oil over high heat. Add chicken mixture, ginger, and garlic; stir-fry for 3-4 minutes or until chicken is browned.",
      "Add water, snow peas, and red pepper; stir-fry for 2-3 minutes or until vegetables are crisp-tender.",
      "Sprinkle with green onions and cashews before serving."
    ]
  },
  quesadillas: {
    id: "quesadillas",
    title: "Quesadillas",
    image:
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2Fc1ad29bc50316c85541ae423a8b7107c69e4529b",
    ingredients: [
      "2 cups shredded cooked chicken",
      "1/2 teaspoon ground cumin",
      "1/2 teaspoon chili powder",
      "1/4 teaspoon salt",
      "4 flour tortillas (10 inches)",
      "1 cup shredded cheddar cheese",
      "1/4 cup chopped green onions",
      "1/4 cup chopped fresh cilantro",
      "Salsa and sour cream, optional"
    ],
    steps: [
      "In a large bowl, combine chicken, cumin, chili powder, and salt.",
      "Place one tortilla in a skillet over medium heat. Sprinkle with 1/4 cup cheese and 1/4 cup chicken mixture. Top with another tortilla.",
      "Cook for 1-2 minutes on each side or until cheese is melted.",
      "Remove quesadilla from skillet; repeat with remaining tortillas, cheese, and chicken mixture.",
      "Cut quesadillas into wedges. Serve with green onions, cilantro, salsa, and sour cream if desired."
    ]
  },
  tunaSalad: {
    id: "tuna-salad",
    title: "Tuna Salad",
    image:
      "https://img.taste.com.au/ChmIAzAE/w1200-h630-cfill/taste/2016/11/mediterranean-tuna-salad-31059-1.jpeg",
    ingredients: [
      "2 cans of tuna, drained",
      "1/2 cup chopped celery",
      "1/2 cup chopped red onion",
      "1/4 cup chopped fresh parsley",
      "1/4 cup mayonnaise",
      "1 tablespoon Dijon mustard",
      "1 tablespoon lemon juice",
      "Salt and pepper to taste"
    ],
    steps: [
      "In a medium bowl, mix together the tuna, celery, red onion, and parsley.",
      "In a small bowl, whisk together the mayonnaise, Dijon mustard, lemon juice, salt, and pepper.",
      "Add the dressing to the tuna mixture and stir until well combined.",
      "Serve immediately or chill until ready to serve."
    ]
  },
  bltSandwich: {
    id: "blt-sandwich",
    title: "BLT Sandwich",
    image:
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2020-07-How-to-BLT%2FKitchn_HowToBLT_301",
    ingredients: [
      "8 slices bacon",
      "8 slices bread",
      "1 large tomato, sliced",
      "4 leaves lettuce",
      "Mayonnaise"
    ],
    steps: [
      "Cook the bacon in a skillet over medium heat until crispy. Drain on a paper towel-lined plate.",
      "Toast the bread slices in a toaster or on a griddle.",
      "Spread mayonnaise on one side of each bread slice.",
      "Place a lettuce leaf on four slices of bread.",
      "Top each slice of bread with tomato slices and bacon.",
      "Cover with the remaining bread slices, mayo side down.",
      "Cut each sandwich in half and serve immediately."
    ]
  },
  scrambledEggs: {
    id: "scrambled-eggs",
    title: "Scrambled Eggs and Toast",
    image: "https://i.ytimg.com/vi/PPLa3yIAoUo/maxresdefault.jpg",
    ingredients: [
      "2 large eggs",
      "1 tablespoon butter",
      "Salt and pepper to taste",
      "2 slices bread"
    ],
    steps: [
      "In a small bowl, whisk together the eggs, salt, and pepper.",
      "Heat a non-stick skillet over medium heat. Add the butter and let it melt.",
      "Pour in the egg mixture and cook, stirring frequently, until the eggs are scrambled and cooked to your liking.",
      "Toast the bread slices in a toaster or on a griddle.",
      "Serve the scrambled eggs with the toast on the side."
    ]
  }
};
const dessertRecipesList = {
chocolateChipCookies: {
id: "cookies",
title: "Chocolate Chip Cookies",
image:
"https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/62298.jpg",
ingredients: [
"2 1/4 cups all-purpose flour",
"1 tsp baking soda",
"1 tsp salt",
"1 cup unsalted butter, softened",
"3/4 cup white sugar",
"3/4 cup brown sugar",
"2 large eggs",
"2 tsp vanilla extract",
"2 cups semisweet chocolate chips"
],
steps: [
"Preheat the oven to 375°F (190°C).",
"In a medium bowl, combine the flour, baking soda, and salt.",
"In a separate large bowl, beat the butter, white sugar, and brown sugar with an electric mixer until creamy.",
"Add the eggs and vanilla to the large bowl and beat until combined.",
"Gradually mix in the flour mixture, stirring until just combined.",
"Fold in the chocolate chips.",
"Drop spoonfuls of the dough onto an ungreased baking sheet, spacing them about 2 inches apart.",
"Bake for 10-12 minutes, or until the edges are golden brown.",
"Let cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely."
]
},
iceCreamSundae: {
id: "ice-cream",
title: "Ice Cream Sundae",
image:
"https://www.foodnetwork.com/content/dam/images/food/fullset/2022/02/9/0/KC3004_katie-lee-biegel-edible-cereal-treat-bowls-for-ice-cream-sundae-2_s4x3.jpg",
ingredients: [
"1 scoop vanilla ice cream",
"1 scoop chocolate ice cream",
"1 scoop strawberry ice cream",
"1/4 cup hot fudge sauce",
"1/4 cup caramel sauce",
"1/4 cup chopped nuts",
"Whipped cream",
"Maraschino cherry"
],
steps: [
"Scoop the vanilla, chocolate, and strawberry ice cream into a bowl.",
"Heat the hot fudge sauce and caramel sauce in separate bowls in the microwave for a few seconds until warm.",
"Drizzle the hot fudge sauce and caramel sauce over the ice cream.",
"Sprinkle the chopped nuts over the top.",
"Add a dollop of whipped cream and top with a maraschino cherry."
]
},
 popcorn: {
id: "popcorn",
title: "Popcorn",
image:
"https://www.browneyedbaker.com/wp-content/uploads/2021/03/how-to-make-popcorn-10-square.jpg",
ingredients: ["1/2 cup popcorn kernels", "2 tablespoons vegetable oil", "1 teaspoon salt"],
steps: [
"Add enough vegetable oil to cover the bottom of a large pot and heat over medium-high heat.",
"Once the oil is hot, add the popcorn kernels and cover with a lid.",
"As the kernels pop, shake the pot occasionally to make sure all the kernels pop and none of them burn. Once the popping slows down, remove from heat and add salt to taste."
]
},
brownies: {
id: "brownies",
title: "Brownies",
image:
"https://img.buzzfeed.com/video-api-prod/assets/fafe8090b4f3434f80c33b6e4ce40e24/BFV21539_BestFudgyBrownies-ThumbB1080.jpg?resize=1200:*",
ingredients: [
"1 cup (2 sticks) unsalted butter, melted",
"2 1/4 cups granulated sugar",
"4 large eggs",
"1 tablespoon vanilla extract",
"1 1/4 cups all-purpose flour",
"1 cup unsweetened cocoa powder",
"1 teaspoon salt",
"1 1/2 cups semisweet chocolate chips"
],
steps: [
"Preheat the oven to 350°F (175°C). Grease a 9x13-inch baking pan with butter.",
"In a large bowl, cream together the butter and sugar until light and fluffy. Beat in the eggs one at a time, then stir in the vanilla extract.",
"In a separate bowl, whisk together the flour, cocoa powder, and salt. Gradually stir the flour mixture into the butter mixture until just blended. Fold in the chocolate chips.",
"Pour the batter into the prepared pan and bake for 25 to 30 minutes, or until a toothpick inserted into the center comes out with just a few moist crumbs attached.",
"Allow the brownies to cool completely in the pan before slicing and serving."
]
}
};

for (const recipeObj in breakfastRecipesList) {
  const oneRecipe = breakfastRecipesList[recipeObj];
  const recipeHTML = createRecipeHTML(oneRecipe);
  const recipesContainer = document.getElementById("breakfast-container");
  recipesContainer.appendChild(recipeHTML);
}
for (const recipeObj in lunchRecipesList) {
  const oneRecipe = lunchRecipesList[recipeObj];
  const recipeHTML = createRecipeHTML(oneRecipe);
  const recipesContainer = document.getElementById("lunch-container");
  recipesContainer.appendChild(recipeHTML);
}
for (const recipeObj in fifteenRecipesList) {
  const oneRecipe = fifteenRecipesList[recipeObj];
  const recipeHTML = createRecipeHTML(oneRecipe);
  const recipesContainer = document.getElementById("fifteen-container");
  recipesContainer.appendChild(recipeHTML);
}
for (const recipeObj in dessertRecipesList) {
  const oneRecipe = dessertRecipesList[recipeObj];
  const recipeHTML = createRecipeHTML(oneRecipe);
  const recipesContainer = document.getElementById("dessert-container");
  recipesContainer.appendChild(recipeHTML);
}

function handleDisplay(recipeId) {
  const currentElement = document.getElementById(recipeId);
  const allRecipeElements = document.querySelectorAll(".one-recipe-toggle");
  allRecipeElements.forEach((element) => {
    if (element !== currentElement && element.style.display === "block") {
      element.style.display = "none";
    }
  });
  if (currentElement.style.display === "block") {
    currentElement.style.display = "none";
  } else {
    currentElement.style.display = "block";
  }
}
