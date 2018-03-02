<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: rgb(201, 193, 193);
  width: 75%;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  background: #3d1010;
  padding: 2rem;
}
body, html {
  background: #666;
  margin: 0;
  padding: 0;
}
</style>
