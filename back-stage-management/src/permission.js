import router from '@/router'

import { getToken } from '@/utils/auth.js'
import store from '@/store'
import Layout from '@/views/layout'


router.beforeEach((to, from, next) => {
  if (!getToken()) { //用户未登录
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  } else { //用户登录
    if (!store.state.user.roles.routes) { //通过vuex避免重复请求后台服务器
      store.dispatch('GetInfo')
        .then(data => {
          let routes = data.routes
          let realRoutes = transformRouter(routes)
          router.addRoutes(realRoutes)
        })
        .catch(err => {
          console.log(err)
        })
    }

    if (to.path === '/login') {//跳转主页，并挂载动态路由
      next('/')
    } else {
      next()
    }
  }
})


function transformRouter (routes) { //以对象的形式挂载路由
  const realRoutes = []
  routes.forEach(item => {
    const {
      path,
      redirect,
      component,
      meta,
      children
    } = item
    const realRoute = {
      path:path,
      redirect:redirect,
      component:component === 'Layout' ? Layout : () => import(`@/views/${component}`),
      meta:meta,
      children:children ? transformRouter(children) : false
    }
    realRoutes.push(realRoute)
  })
  return realRoutes
}
