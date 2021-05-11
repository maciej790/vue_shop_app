<template>
  <nav class="categories">
    <li
      v-for="(item, index) in menuItems"
      :key="index"
      class="categories__ul--item"
      @click="$emit('handleItemClick', item)"
    >
      {{ item }}
    </li>
  </nav>
</template>

<script>
import { ref } from "vue";
export default {
  name: "CategoriesMenu",

  setup() {
    const menuItems = ref([
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ]);

    return {
      menuItems,
    };
  },
};
</script>

<style lang="scss">
@import "../style/_StyleVariables";
.categories {
  width: 90%;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  list-style-type: none;

  .categories__ul--item {
    width: 60%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    color: $second_text;
    background-color: rgba(60, 190, 55, 0.5);
    font-weight: bold;
    text-align: center;
  }
}
</style>
