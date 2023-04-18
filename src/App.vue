<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <weather></weather>
  </div>
</template>

<script>
import weather from "./views/weather.vue";
export default {
  components: { weather },
  name: "App",
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
</style>
