<template>
  <div id="app">
    <img src="./assets/logo.png">
     <router-view/>
    <router-link to="/hello" tag="button"  replace  active-class="active">首页</router-link>
    <router-link to="/about" tag="button"  replace  active-class="active">关于</router-link>
    <!-- <router-link v-bind:to="'/user/'+userId" tag="button"  replace  active-class="active">name</router-link>
    <router-link v-bind:to="{path: '/profile' , query:{name:'陈亚', age:19}}" tag="button"  replace  active-class="active">档案</router-link> -->
    <button  @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <!-- <div @click="indexButton">首页</div>
    <div @click="aboutButton">关于</div>

    <router-view></router-view> -->

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId:'lisi'
    }
  },
  methods:{
    indexButton(){
      // 通过代码的方式修改路由跳转
      // this.$router.push('/hello')
      this.$router.replace('/hello')
      console.log('indexButton')
    },
    aboutButton(){
      // this.$router.push('/about')
      this.$router.replace('/about')
      console.log('aboutButton')
    },
    userClick(){
      this.$router.push('/user/'+ this.userId)
    },
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'chenya',
          age: 19
        }
      })
    }

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

.active{
  color: red;
}

</style>


<!-- router-link还有一些其他的属性
tag属性：tag可以指定router-link之后渲染成什么组件  比如上面的<button>就是将其渲染成一个按钮


replace属性：replace不会保留下history记录 所以在指定replace的情况下 后退键不会返回到上一个页面中

active-class属性：当router-link对应的路由匹配成功的时候  会自动将当前元素设置一个router-link-active的class  设置active-class可以修改其默认的名称  可以在router-link中进行修改 也可以在路由index.js中使用linkActiveClass: "active"进行重命名 -->
