<!-- src/components/Recipe.vue -->
<template>
  <div class="recipe">
    <div class="title">{{recipe.title}}</div>
    <ul>
      <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
        {{ingredient}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Recipe extends Vue {
    @Prop() recipe!: string;
}

</script>

<style>
.recipe {
  margin: 10px;
  padding: 10px;
  border: 1px solid #d3d3d3;
  font-size: 13px;

}
.title {
  font-size: 15px;
}
</style>
