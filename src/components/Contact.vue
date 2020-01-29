<template>
    <nav class="main-nav">
      <h1>Access from Contact page</h1>
 <ul><li>
   <router-link to="/About"> About</router-link>
   <router-link to="/Contact"> Contact</router-link>
   <router-link to="/HelloWorld"> HelloWorld</router-link>
   <router-link to="/profile"> profileView</router-link> </li></ul>

    </nav>
</template>

<script>
export default {
  name: 'Contact'
}

</script>

<style scoped>

</style>
