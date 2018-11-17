<!-- src/components/Recipes.vue -->
<template>
  <div>
    <recipe v-for="(recipe, index) in recipes" :key="index" :recipe="recipe" />  
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Recipe from "./Recipe.vue";

@Component({
  components: { Recipe }
})
export default class Recipes extends Vue {
  @Prop()
  recipes!: string;
}
</script>