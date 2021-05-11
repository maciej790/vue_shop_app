<template>
  <div class="container">
    <WelcomeText />
    <CategoriesMenu @handleItemClick="handleItemClick" />
    <ProductsResult />
    {{ results }}
  </div>
</template>

<script>
import WelcomeText from "../components/WelcomeText.vue";
import CategoriesMenu from "../components/CategoriesMenu.vue";
import ProductsResult from "../components/ProductsResult.vue";
import useFetch from "../composable/useFetch";
import { onMounted } from "vue";
export default {
  components: { WelcomeText, CategoriesMenu, ProductsResult },
  name: "Home",

  setup() {
    const {
      isLoading,
      results,
      step,
      error,
      getAllData,
      getDataForCategory,
    } = useFetch();

    onMounted(() => {
      getAllData();
    });

    const handleItemClick = (item) => {
      getDataForCategory(item);
    };

    return {
      isLoading,
      results,
      step,
      error,
      getAllData,
      getDataForCategory,
      handleItemClick,
    };
  },
};
</script>

<style lang="scss">
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
