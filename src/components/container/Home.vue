<!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template>
  <div>
    <button class="btn" @click="displayRecipes">What's for Lunch</button>
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

<style>
  .btn{
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    width: 100%;
  }
</style>