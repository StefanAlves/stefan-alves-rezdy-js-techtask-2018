<!-- src/components/Recipe.vue -->
<template>
  <div class="recipe">
    <div class="title">{{recipe.title}}</div>
    <ul class="ingredients">
      <li class="ingredient" v-for="(ingredient, index) in recipe.ingredients" :key="index">
        {{ingredient}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Recipe extends Vue {
  @Prop()
  recipe!: string;
}
</script>

<style>
.recipe {
  border: 1px solid #eeeeee;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  font-size: 13px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  margin: 10px 0px;
}
.title {
  border-bottom: 1px solid #eeeeee;
  background: #fafafa;
  color: rgba(0, 0, 0, 0.7);
  font-size: 17px;
  font-weight: bold;

  padding: 10px;
}
.ingredients {
  color: rgba(0, 0, 0, 0.7);
  padding: 0px;
}
.ingredient {
  list-style: none;
  padding: 5px 10px;
}
</style>
