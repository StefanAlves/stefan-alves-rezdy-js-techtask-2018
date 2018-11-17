<!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template>
  <div>
    <button @click="displayRecipes">What's for Lunch</button>
    <div v-if="showRecipes" :recipes="getRecipes">
      <recipes :recipes="getRecipes" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { mapGetters } from 'vuex'
import Recipes from '../presentational/Recipes.vue';

@Component({
  components: { Recipes },
  computed: mapGetters([
    'getRecipes'
  ])
})
export default class Home extends Vue {
  @Prop() recipes!: string;
  // local props
  showRecipes = false;
  /**
   * show recipes
   */
  displayRecipes() {
    this.showRecipes = true;
  }
}
</script>
