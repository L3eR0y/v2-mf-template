import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'App',
    component: () => import('../pages/Home/index.vue'),
    children: [
      // IMPORTANT: ROUTES HERE!!!!
      {
        name: 'administration-view',
        path: '/administration-view',
        component: () => import('templateRemoteEntry/AdministrationView')
      }
    ]
  }
]

const router = new VueRouter({ 
  mode: 'history',
  routes 
})

export default router