import Vue from 'vue'
import Router from 'vue-router'
import Mine from 'components/mine/mine'
import musicHouse from 'components/musichouse/musichouse'
import Found from 'components/found/found'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/musichouse'
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/musichouse',
      name: 'musicHouse',
      component: musicHouse
    },
    {
      path: '/found',
      name: 'Found',
      component: Found
    }
  ]
})
