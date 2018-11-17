import { State, Ingredient, Recipe } from '../types';

/**
 * Filter recipes based on used by date
 * @param recipes: Array of Recipe 
 * @param ingredients: Map of Ingredients
 * @param date - Timestamp 
 * @returns Array recipes
 */
export const filterRecipes = (recipes: Recipe[], ingredients: { [key: string]: Ingredient}, beforeDate: number) => {
  return recipes.filter((recipe: Recipe) => {
    const hasAnyInvalid = recipe.ingredients.filter((ingredientTitle: string) => {
      const ingredient: Ingredient = ingredients[ingredientTitle];
      if(ingredient){
        const usedBy = Date.parse(ingredient['use-by']);
        return beforeDate > usedBy;
      }
      return false;
    });
    return hasAnyInvalid.length === 0; 
  })
}

/**
 * Sort recipes based on used best before
 * @param recipes: Array of Recipe 
 * @param ingredients: Map of Ingredients
 * @param date - Timestamp
 * @returns Array recipes 
 */
export const sortRecipes = (recipes: Recipe[], ingredients: { [key: string]: Ingredient}, beforeDate: number) => {
  const sortedRecipes: Recipe[] = [];
  /**
   * Keep previous order so let's reverse the foreach 
   */
  for (let index = recipes.length-1; index >= 0; index--) {
    const recipe = recipes[index];
    const hasAnyBestBefore = recipe.ingredients.filter((ingredientTitle: string) => {
      const ingredient: Ingredient = ingredients[ingredientTitle];
      if(ingredient){
        const usedBy = Date.parse(ingredient['best-before']);
        return beforeDate > usedBy;
      }
      return false;
    });
    if(hasAnyBestBefore.length > 0){
      sortedRecipes.push(recipe);
    }else{
      sortedRecipes.unshift(recipe);
    }
  }
  return sortedRecipes;
}

export default {
  /**
   * get app recipes
   * @returns Array recipes
   */
  getRecipes: (state: State ) => {
    const { recipes, ingredients } = state;
    const today = Date.now(); 
    const filteredRecipes = filterRecipes(recipes, ingredients, today);
    const sorteRecipes = sortRecipes(filteredRecipes, ingredients, today);
    return sorteRecipes;
  },
}