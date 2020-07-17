import Vue from 'vue'
import VueRouter from 'vue-router'
import AlbumList from '../views/AlbumList.vue'
import AlbumCard from '../views/AlbumCard.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'AlbumList',
    component: AlbumList
  },
  {
    path: '/card',
    name: 'AlbumCard',
   
    component: AlbumCard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
