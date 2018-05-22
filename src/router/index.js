import Vue from 'vue'
import Router from 'vue-router'
import Mine from 'components/mine/mine'
import musicHouse from 'components/musichouse/musichouse'
import Found from 'components/found/found'
import Singer from 'components/singer/singer'
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
      component: musicHouse,
      children: [{
        path: '/singer',
        name: 'Singer',
        component: Singer
      }]
    },
    {
      path: '/found',
      name: 'Found',
      component: Found
    },
    // {
    //   path:'/singer',
    //   name:'Singer',
    //   component:Singer
    // },
    // {
    //   path:'rank',
    //   name:'Rank',
    //   component:Rank
    // },
    // {
    //   path:'ablum',
    //   name:'Ablum',
    //   component:Ablum
    // },
    // {
    //   path:'radio',
    //   name:'Radio',
    //   component:Radio
    // },
    // {
    //   path:'video',
    //   name:'Video',
    //   component:Video
    // }
  ]
})
