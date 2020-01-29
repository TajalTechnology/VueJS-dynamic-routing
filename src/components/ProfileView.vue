<template>
    <div>
    <h2>Your Profile ID : {{ userId }} </h2>
    </div>
</template>


<script>
  export default {
    name: 'ProfileView',
    data(){
      return{
        userId: this.$route.params.user_id

      }
    },
    methods:{
      updateId(){
        this.userId=this.$route.params.user_id

      }
    },
    watch:{
      $route:'updateId'
    }
  }
</script>

<style scoped>

</style>
