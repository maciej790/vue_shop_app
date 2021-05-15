<template>
  <div class="loading">
    <div class="loading__icon"><i class="fas fa-store-alt fa-5x"></i></div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style lang="scss">
@import "../style/_StyleVariables";
.loading {
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  .loading__icon {
    width: 200px;
    height: 200px;
    background-color: $main;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    -webkit-animation: rotate-center 0.6s ease-in-out infinite both;
    animation: rotate-center 0.6s ease-in-out infinite both;
  }

  @-webkit-keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
}
</style>
