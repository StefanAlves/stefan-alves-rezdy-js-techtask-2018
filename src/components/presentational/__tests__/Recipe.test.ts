import { mount, shallowMount } from '@vue/test-utils';
import Recipe from '../Recipe.vue';

describe('Recipe', () => {
    const recipe = {
        title: 'Fry-up',
        ingredients: [
            'Bacon',
            'Eggs',
            'Baked Beans',
            'Mushrooms',
            'Sausage',
            'Bread',
        ],
    };

    it('renders correctly', () => {
        const wrapper = mount(Recipe, {
            propsData: { recipe },
        });
        expect(wrapper.element).toMatchSnapshot();
    });

    it('should render', () => {

        const wrapper = shallowMount(Recipe, {
            propsData: { recipe },
        });
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
            'Bread',
        ]);
    });
});
