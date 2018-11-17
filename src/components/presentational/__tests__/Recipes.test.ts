import { shallowMount } from '@vue/test-utils';
import Recipes from '../Recipes.vue';

describe('Recipes', () => {
  it('should render', () => {
    const recipes = [
      {
        title: 'Fry-up',
        ingredients: [
            'Bacon',
            'Eggs'
        ]
      },
      {
        title: 'Salad',
        ingredients: [
          'Lettuce',
          'Tomato'
        ]
      }
    ];
    const wrapper = shallowMount(Recipes, {
        propsData: { recipes }
    })
    const recipeStubs = wrapper.findAll('recipe-stub');
    expect(recipeStubs.length).toEqual(2)
  });
});