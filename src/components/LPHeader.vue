<template>
  <header class="header container-fluid">
    <nav class="navbar navbar-expand-lg text-d h-100 row">
      <a class="navbar-brand offset-lg-1" href="#">
        <img src="../assets/img/logo.svg" alt="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navNav"
        aria-controls="navNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navNav">
        <ul class="navbar-nav row w-100">
          <li class="nav-item offset-lg-2 col-lg-2">
            <a class="nav-link" href="#"><span>Home</span></a>
          </li>
          <li class="nav-item col-lg-2">
            <a class="nav-link" href="#"><span>About</span></a>
          </li>
          <li class="nav-item col-lg-2">
            <a class="nav-link" href="#"><span>Skills</span></a>
          </li>
          <li class="nav-item col-lg-2">
            <a class="nav-link" href="#"><span>Link</span></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
// import SearchGenre from "./SearchGenre.vue";
export default {
  name: "LPHeader",
  components: {
    // SearchGenre,
  },
  methods: {
    // searchChange(event) {
    //   this.$emit("searchChange", event);
    //   // console.log(typeof event);
    // },
  },
};
</script>
<style lang="scss" scoped>
@import "../style/variables.scss";
.header {
  // height: 90px;
  background-color: $brand-secondary-color;
}
</style>
