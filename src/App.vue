<template>
  <div id="app">
    <img src="./assets/logo.png">
    <m-header></m-header>
    <Tab></Tab>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import Tab from 'components/tab/tab.vue'

  export default {
    components: {
      MHeader,
      Tab
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
