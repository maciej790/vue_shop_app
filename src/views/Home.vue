<template>
  <div class="container">
    <WelcomeText />
    <CategoriesMenu @handleItemClick="handleItemClick" />
    <section class="container__allResults">
      <MainResultItem
        v-for="item in results"
        :key="item.id"
        :resultItem="item"
      />
    </section>
  </div>
</template>

<script>
import { onMounted } from "vue";
import useFetch from "../composable/useFetch";
import WelcomeText from "../components/WelcomeText.vue";
import CategoriesMenu from "../components/CategoriesMenu.vue";
import MainResultItem from "../components/MainResultItem.vue";

export default {
  components: { WelcomeText, CategoriesMenu, MainResultItem },
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

  .container__allResults {
    margin-top: 100px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 100px;
    justify-items: center;
  }
}
</style>
