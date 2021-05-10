<template>
  <nav class="nav">
    <div class="nav__logo">
      <i class="fas fa-store-alt fa-3x"></i>
    </div>
    <div class="nav__basket">
      <i class="fas fa-shopping-basket"></i>
    </div>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import "./style/_StyleVariables";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "IBM Plex Mono", monospace;
}
.nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .nav__logo {
    width: 120px;
    height: 120px;
    background-color: $main;
    border-bottom-right-radius: 100px;
    text-align: center;
    color: white;
    padding: 20px 0 0 0;
  }

  .nav__basket {
    width: 50px;
    height: 50px;
    position: relative;
    top: 20px;
    right: 20px;
    border-radius: 20px;
    background-color: $main;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: $font-mobile;
  }
}
</style>
