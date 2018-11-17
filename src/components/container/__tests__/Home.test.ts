import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Home from '../Home.vue';

describe('Home', () => {
  const localVue = createLocalVue()
  const store = new Vuex.Store({
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
    // actions
  })
  localVue.use(Vuex)

  it('should render', () => {
    const wrapper = shallowMount(Home, { store, localVue });
    // const recipeStubs = wrapper.findAll('recipe-stub');
    // expect(recipeStubs.length).toEqual(2)
  });
});