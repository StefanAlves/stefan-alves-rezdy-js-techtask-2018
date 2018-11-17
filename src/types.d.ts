export type Ingredient = {
  title: string,
  'best-before': string,
  'use-by': string
}

export type Recipe = {
  title: string, 
  ingredients: string[]
}

export type State = {
  recipes: Recipe[],
  ingredients: { [key: string]: Ingredient },// Ingredient[]
}
