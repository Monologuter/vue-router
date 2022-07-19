<template>
  <div>
    <h2>我是name页面标题</h2>
    <p>我是name页面内容</p>
    <h2>{{userId}}</h2>
  </div>
</template>

<script>
export default {
  name:"User",
  computed:{
    userId(){
      return  this.$route.params.userId
    }
  }

}
</script>

<style>

</style>
