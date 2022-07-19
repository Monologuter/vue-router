import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import User from '@/components/User'
import VueRouter from 'vue-router'

// 步骤：
// 创建路由组件
// 配置路由映射 组件和路由的映射关系
// 使用路由 使用<router-link>和<router-view>

// 通过vue.use来安装vue插件
Vue.use(Router)


// 如果不加这两个函数使用push 和 replace函数进行路由跳转的时候就会报错  NavigationDuplicated: Avoided redundant navigation to current location: "/about".
// 原因是因为 ：是指路由重复。虽然对项目无影响，但是看到有红的不舒服！
// 解决：打开router文件夹下的index.js文件中添加如下代码：


// 获取原型对象push函数
const originalPush = VueRouter.prototype.push

// 获取原型对象replace函数
const originalReplace = VueRouter.prototype.replace


// 修改原型对象中的push函数
VueRouter.prototype.push = function push(location){
  return originalPush.call(this , location).catch(err=>err)
}

// 修改原型对象中的replace函数
VueRouter.prototype.replace = function replace(location){
  return originalReplace.call(this , location).catch(err=>err)
}




// 创建一个router对象
export default new Router({
  routes: [
  // 路由的默认路径
    {
      path: '/',
      redirect: '/hello'
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/user/:userId',
      name: 'User',
      component: User
    },

  ],
  // 配置路径为HTML5的history属性
  mode:'history',
  linkActiveClass: "active"
})

