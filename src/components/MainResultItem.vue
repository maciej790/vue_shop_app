<template>
  <router-link
    :to="{ name: 'ItemDetail', params: { item_id: resultItem.id } }"
    class="item"
  >
    <img class="item__image" :src="resultItem.image" />
    <h2 class="item__title">{{ resultItem.title }}</h2>
    <p class="item__price">{{ resultItem.price + "$" }}</p>
    <p class="item__category">{{ resultItem.category }}</p>
  </router-link>
</template>

<script>
export default {
  name: "MainResultItem",

  props: {
    resultItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "../style/_StyleVariables";
.item {
  width: 80%;
  min-height: 500px;
  background-color: white;
  color: $main_text;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  text-decoration: none;

  .item__image {
    width: 100%;
    height: 200px;
  }

  .item__title {
    text-align: center;
  }

  .item__price {
    font-size: $font_mobile;
    font-weight: bold;
    color: $main;
  }

  .item__category {
    width: 50%;
    height: 30px;
    background-color: $main;
    border-radius: 100px;
    text-align: center;
    color: white;
    line-height: 30px;
  }
}
</style>
