export default {
  name: 'admin',
  avatar: 'http://www.qiaofangzidemao.top/database/back-stage/avatar-5.png',
  routes: [{
    path: '/login',
    component: 'login/index',
    hidden: true
  },
    {
      path: '/404',
      component: '404',
      hidden: true
    },

    {
      path: '/',
      component: 'Layout',
      redirect: '/home',
      children: [{
        path: 'home',
        component: 'home',
        meta: {
          title: 'Home',
          icon: 'home'
        }
      }]
    },
    {
      path: '/example',
      component: 'Layout',
      redirect: '/example/table',
      meta: {
        title: 'Example',
        icon: 'example'
      },
      children: [{
        path: 'table',
        component: 'example/table',
        meta: {
          title: 'Table',
          icon: 'table'
        }
      },
        {
          path: 'tree',
          component: 'example/tree',
          meta: {
            title: 'Tree',
            icon: 'tree'
          }
        }
      ]
    },
    {
      path: '/form',
      component: 'Layout',
      redirect: '/form/index',
      children: [{
        path: 'index',
        component: 'form',
        meta: {
          title: 'Form',
          icon: 'form'
        }
      }]
    },
    {
      path: '/nested',
      component: 'Layout',
      redirect: '/nested/menu2',
      meta: {
        title: 'Nested',
        icon: 'nested'
      },
      children: [{
        path: 'menu1',
        redirect: '/nested/menu1/menu1-1',
        component: 'nested/menu1',
        meta: {
          title: 'Menu1',
          icon: 'nested'
        },
        children: [{
          path: 'menu1-1',
          component: 'nested/menu1/menu1-1',
          meta: {
            title: 'Menu1-1',
            icon: 'nested'
          }
        },
          {
            path: 'menu1-2',
            redirect: '/nested/menu1/menu1-2/menu1-2-1',
            component: 'nested/menu1/menu1-2',
            meta: {
              title: 'Menu1-2',
              icon: 'nested'
            },
            children: [{
              path: 'menu1-2-1',
              component: 'nested/menu1/menu1-2/menu1-2-1',
              meta: {
                title: 'Menu1-2-1',
                icon: 'nested'
              }
            },
              {
                path: 'menu1-2-2',
                component: 'nested/menu1/menu1-2/menu1-2-2',
                meta: {
                  title: 'Menu1-2-2',
                  icon: 'nested'
                }
              },
            ]
          },
          {
            path: 'menu1-3',
            component: 'nested/menu1/menu1-3',
            meta: {
              title: 'Menu1-3',
              icon: 'nested'
            }
          }
        ]
      },
        {
          path: 'menu2',
          component: 'nested/menu2',
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
