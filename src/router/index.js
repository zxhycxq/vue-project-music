import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/Singer/Singer'
import Rank from 'components/Rank/Rank'
import Search from 'components/Search/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/Singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/Rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    }
  ]
})
