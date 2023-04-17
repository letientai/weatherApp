<template>
  <div id="app">
    <div class="header">
      <header-vue />
    </div>
    <div class="section" id="weather-widget">
      <control-vue />
    </div>
  </div>
</template>

<script>
import header from "./components/header.vue";
import control from "./components/control.vue";
export default {
  name: "App",
  components: {
    "header-vue": header,
    "control-vue": control,
  },
};
</script>

<style>
body {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #48484a;
}

#weather-widget {
  font-family: Space Grotesk, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #48484a;
  width: 100%;
  margin: 0;
  padding: 0;
}
.section {
  width: 100%;
}
</style>
