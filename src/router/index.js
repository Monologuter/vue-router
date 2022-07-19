import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'

// 步骤：
// 创建路由组件
// 配置路由映射 组件和路由的映射关系
// 使用路由 使用<router-link>和<router-view>

// 通过vue.use来安装vue插件
Vue.use(Router)

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
    }
  ],
  // 配置路径为HTML5的history属性
  mode:'history',
  // linkActiveClass: "active"
})

