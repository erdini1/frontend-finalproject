<template>
  <div id="app">
    <Header />
    <router-view />
    <!-- <h1 class="text-center">Hello World</h1> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
