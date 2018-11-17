import { shallowMount } from '@vue/test-utils';
import Recipe from '../Recipe.vue';

describe('Recipe', () => {

  it('should render', () => {
    const recipe = {
        title: 'Fry-up',
        ingredients: [
            'Bacon',
            'Eggs',
            'Baked Beans',
            'Mushrooms',
            'Sausage',
            'Bread'
        ]
    }
    const wrapper = shallowMount(Recipe, {
        propsData: { recipe }
    })
    const div = wrapper.findAll('div').at(1);
    const li = wrapper.findAll('li');
    expect(div.text()).toEqual('Fry-up');
    expect(li.length).toEqual(6);
    expect(wrapper.props().recipe.title).toEqual('Fry-up');
    expect(wrapper.props().recipe.ingredients).toEqual([
        'Bacon',
        'Eggs',
        'Baked Beans',
        'Mushrooms',
        'Sausage',
        'Bread'
    ]);
  });
});