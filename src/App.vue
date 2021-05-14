<template>
  <header>
    <nav class="nav">
      <div class="nav__logo">
        <i class="fas fa-store-alt fa-3x"></i>
      </div>
      <div class="nav__cart">
        <i class="fas fa-shopping-basket"></i>
      </div>
    </nav>
  </header>
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
  font-family: "Heebo", sans-serif;
  background-color: $bacground;
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

  .nav__cart {
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
