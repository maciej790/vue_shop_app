<template>
  <div class="error">
    <p class="error__title">Sorry we have an error!</p>
  </div>
</template>

<script>
export default {
  name: "ErrorInfo",

  props: {
    error: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "../style/_StyleVariables";
.error {
  width: 100%;
  text-align: center;
  margin-top: 100px;

  .error__title {
    color: $error_color;
    font-weight: bold;
    font-size: $font_mobile;
  }
}
</style>
