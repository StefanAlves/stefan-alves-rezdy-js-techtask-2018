export interface Ingredient {
  title: string;
  'best-before': string;
  'use-by': string;
}

export interface Recipe {
  title: string;
  ingredients: string[];
}

export interface State {
  recipes: Recipe[];
  ingredients: { [key: string]: Ingredient }; // Ingredient[]
}
