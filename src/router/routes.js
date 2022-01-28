const header = () => import('@/components/Header.vue')

const routes = [

  {
    path: '/home',
    name: 'home',
    components: {
      header,
      default: () => import('@/views/Home.vue'),
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '*',
    redirect: '/home',
  },
]
export default routes
