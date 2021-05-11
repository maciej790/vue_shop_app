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
    const { isLoading, results, step, error, doRequest } = useFetch();

    onMounted(() => {
      doRequest(process.env.VUE_APP_ALL_ITEMS_URL);
    });

    const handleItemClick = (item) => {
      doRequest(process.env.VUE_APP_ITEMS_FOR_CATEGORY, item);
    };

    return {
      isLoading,
      results,
      step,
      error,
      doRequest,
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
