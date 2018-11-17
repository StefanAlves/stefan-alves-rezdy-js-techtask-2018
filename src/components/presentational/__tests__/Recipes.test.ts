import { shallowMount, mount, config } from '@vue/test-utils';
import Recipes from '../Recipes.vue';

config.logModifiedComponents = false

describe('Recipes', () => {
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
  

  it('renders correctly', () => {
    const wrapper = mount(Recipes, {
        propsData: { recipes }
    });
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render', () => {
    const wrapper = shallowMount(Recipes, {
        propsData: { recipes }
    })
    const recipeStubs = wrapper.findAll('recipe-stub');
    expect(recipeStubs.length).toEqual(2)
  });
});