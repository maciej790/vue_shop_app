<template>
  <section class="welcome">
    <h1 class="welcome__title">Hello in e-commerce!</h1>
    <p class="welcome__p">
      <span class="welcome__p--firstLetter">Lorem</span> Ipsum is simply dummy
      text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s.
    </p>
  </section>
</template>

<script>
export default {
  name: "WelcomeText",
};
</script>

<style lang="scss">
@import "../style/_StyleVariables";
.welcome {
  width: 90%;
  margin-top: 50px;

  .welcome__title {
    text-align: center;
    color: $main;
    font-weight: bold;
  }

  .welcome__p {
    text-align: center;
    margin-top: 40px;
    .welcome__p--firstLetter {
      color: $main;
      font-weight: bold;
      font-size: $font_mobile;
    }
  }
}
</style>
