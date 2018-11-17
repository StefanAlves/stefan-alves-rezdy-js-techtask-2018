import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import ingredients from './modules/ingredients';
import recipes from './modules/recipes';
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    recipes,
    ingredients,
  },
  getters,
});
