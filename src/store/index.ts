import Vue from 'vue'
import Vuex from 'vuex'
import recipes from './modules/recipes';
import ingredients from './modules/ingredients';
import getters from './getters';
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    recipes,
    ingredients,
  },
  getters,
})