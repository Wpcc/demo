export default {
  name: 'admin',
  avatar: 'http://www.qiaofangzidemao.top/database/back-stage/avatar-5.png',
  routes: [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
    {
      path: '/404',
      component: () => import('@/views/404'),
      hidden: true
    },

    {
      path: '/',
      component: () => import('@/views/Sidebar'),
      redirect: '/home',
      children: [{
        path: 'home',
        component: () => import('@/views/home'),
        meta: {
          title: 'Home',
          icon: 'home'
        }
      }]
    },
    {
      path: '/example',
      component: () => import('@/views/Sidebar'),
      redirect: '/example/table',
      meta: {
        title: 'Example',
        icon: 'example'
      },
      children: [{
        path: 'table',
        component: () => import('@/views/example/table'),
        meta: {
          title: 'Table',
          icon: 'table'
        }
      },
        {
          path: 'tree',
          component: () => import('@/views/example/tree'),
          meta: {
            title: 'Tree',
            icon: 'tree'
          }
        }
      ]
    },
    {
      path: '/form',
      component: () => import('@/views/Sidebar'),
      redirect: '/form/index',
      children: [{
        path: 'index',
        component: () => import('@/views/form'),
        meta: {
          title: 'Form',
          icon: 'form'
        }
      }]
    },
    {
      path: '/nested',
      component: () => import('@/views/Sidebar'),
      redirect: '/nested/menu2',
      meta: {
        title: 'Nested',
        icon: 'nested'
      },
      children: [{
        path: 'menu1',
        redirect: '/nested/menu1/menu1-1',
        component: () => import('@/views/nested/menu1'),
        meta: {
          title: 'Menu1',
          icon: 'nested'
        },
        children: [{
          path: 'menu1-1',
          component: () => import('@/views/nested/menu1/menu1-1'),
          meta: {
            title: 'Menu1-1',
            icon: 'nested'
          }
        },
          {
            path: 'menu1-2',
            redirect: '/nested/menu1/menu1-2/menu1-2-1',
            component: () => import('@/views/nested/menu1/menu1-2'),
            meta: {
              title: 'Menu1-2',
              icon: 'nested'
            },
            children: [{
              path: 'menu1-2-1',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
              meta: {
                title: 'Menu1-2-1',
                icon: 'nested'
              }
            },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                meta: {
                  title: 'Menu1-2-2',
                  icon: 'nested'
                }
              },
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            meta: {
              title: 'Menu1-3',
              icon: 'nested'
            }
          }
        ]
      },
        {
          path: 'menu2',
          component: () => import('@/views/nested/menu2'),
          meta: {
            title: 'Menu2',
            icon: 'menu2'
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/404',
      hidden: true
    }
  ]
}
