<template>
  <div class="container">
    <WelcomeText />
  </div>
</template>

<script>
import WelcomeText from "../components/WelcomeText.vue";
export default {
  components: { WelcomeText },
  name: "Home",
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
