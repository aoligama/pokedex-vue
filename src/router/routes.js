const header = () => import('@/components/Header.vue')

const routes = [

  {
    path: '/home',
    name: 'home',
    components: {
      header,
      default: () => import('@/views/Home.vue'),
    },
  },
  {
    path: '/my-pokemon',
    name: 'my-pokemon',
    components: {
      header,
      default: () => import('@/views/MyPokemon.vue'),
    },
  },
  {
    path: '*',
    redirect: '/home',
  },
]
export default routes
