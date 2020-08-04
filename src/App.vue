<template>
<div class="nav">

<router-link to="/composition-api">composition API</router-link>
<router-link to="/multiple-root-elements">Multiple root elements</router-link>
<router-link to="/multiple-v-models">Multiple V Models</router-link>
<router-link to="/better-reactivity">Better reactivity</router-link>
</div>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav {
  display: flex;
  justify-content: space-between;
  padding: 2rem 5rem;
}
</style>
