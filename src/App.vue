<template>
  <div id="app">
    <h1>Main Component</h1>
    <img src="./assets/logo.png">
    <About></About>
    <Contact></Contact>
    <HelloWorld></HelloWorld>

    <router-view/>
  </div>
</template>

<script>
import About from '@/components/About'
import Contact from '@/components/Contact'
import HelloWorld from '@/components/HelloWorld'


export default {
  name: 'App',
  components: {
    About,
    // eslint-disable-next-line no-undef
    Contact,
    // eslint-disable-next-line no-undef
    HelloWorld
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
