import Vue from 'vue'
import VueRouter from 'vue-router'

const MSite = () => import('../views/msite/MSite.vue')
const Order = () => import('../views/order/Order.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Search = () => import('../views/search/Search.vue')
const Login = () => import('../views/login/Login.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/msite'
  },
  {
    path: '/msite',
    component:MSite,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/order',
    component:Order,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/profile',
    component:Profile,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/search',
    component:Search,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/login',
    component:Login
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router

