import { sortRecipes } from '../getters';
import { ingredients, recipes } from './testData';

describe('Sort recipes', () => {
  it('should sort recipes by ingredients with best-before date', () => {
    const date = Date.parse('2018-11-16');
    expect(sortRecipes(recipes, ingredients, date)).toEqual([
      { title: 'Omelette', ingredients: ['Eggs', 'Mushrooms', 'Milk', 'Salt', 'Pepper', 'Spinach'] },
      { title: 'Hotdog', ingredients: ['Hotdog Bun', 'Sausage', 'Ketchup', 'Mustard'] },
      { ingredients: ['Lettuce', 'Tomato', 'Cucumber', 'Beetroot', 'Salad Dressing'], title: 'Salad' },
      { title: 'Fry-up', ingredients: ['Bacon', 'Eggs', 'Baked Beans', 'Mushrooms', 'Sausage', 'Bread'] },
    ]);
  });
});
