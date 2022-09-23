import Vue from "vue";
// import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap";
// import { library } from "@fortawesome/fontawesome-svg-core";

// import { faPhone } from "@fortawesome/free-solid-svg-icons";

// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Vue.config.productionTip = false;

// library.add(faPhone);

// createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

new Vue({
  render: (h) => h(App),
}).$mount("#app");
