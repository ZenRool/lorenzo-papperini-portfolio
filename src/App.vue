<template>
  <div id="app">
    <LPHeader />
  </div>
</template>

<script>
import LPHeader from "./components/LPHeader.vue";

export default {
  name: "App",
  components: {
    LPHeader,
  },
};
</script>

<style lang="scss">
@import "./style/commonStyle.scss";
@import "./style/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");
#app {
  font-family: "Ubuntu", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
}
</style>
