import { mount, createLocalVue, config } from '@vue/test-utils';
import * as Vuex from 'vuex';
import getters from '../../../store/getters';
import Home from '../Home.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
config.logModifiedComponents = false;

describe('Home', () => {

  let store: any;
  
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        recipes : [
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
        ],
        ingredients: {
          Bacon: {
            title: 'Bacon',
            'best-before': '2018-11-25',
            'use-by': '2018-11-30'
          },
          Eggs: {
            title: 'Eggs',
            'best-before': '2018-11-20',
            'use-by': '2018-11-25'
          },
          Lettuce: {
            title: 'Lettuce',
            'best-before': '2018-11-20',
            'use-by': '2018-11-25'
          },
          Tomato: {
            title: 'Tomato',
            'best-before': '2018-11-20',
            'use-by': '2018-11-25'
          }
        }
      },
      getters
    });
  })

  it('should render', () => {

  // localVue.use(Vuex)
    const wrapper = mount(Home, { store, localVue });
    expect(wrapper.element).toMatchSnapshot();
    const button = wrapper.find('button')
    button.trigger('click');
    expect(wrapper.element).toMatchSnapshot();
    // console.log(wrapper.html());
    // const recipeStubs = wrapper.findAll('recipe-stub');
    // expect(recipeStubs.length).toEqual(2)
  });
});