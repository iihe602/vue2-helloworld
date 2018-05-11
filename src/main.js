import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
// import Element from 'element-ui'

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

// 定义组件, 也可以像教程之前教的⽅方法从别的⽂文件引⼊入
const First = { template: '<div><h2>我是第 1 个⼦子⻚页⾯面</h2></div>' };

// import FirstComponent from "./component/first-component.vue"
// import SecondComponent from "./component/second-component.vue"
import SecondComponent from './component/second-component.vue'

// 创建⼀一个路路由器器实例例
// 并且配置路路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First
    }, {
          path: '/second',
          component: SecondComponent
        }
    ] })

// 现在我们可以启动应⽤用了了!
// 路路由器器会创建⼀一个 App 实例例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')


// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
