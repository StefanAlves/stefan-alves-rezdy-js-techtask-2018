import Vue from "vue";
import Home from './components/container/Home.vue';
import store from './store'

new Vue({
    el: "#app",
    template: `<home />`,
    store,
    components: {
      Home,
    }
});
