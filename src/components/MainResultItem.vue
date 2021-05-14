<template>
  <div class="item"></div>
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
.item {
  width: 90%;
  height: 400px;
  background-color: orange;
}
</style>
