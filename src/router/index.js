import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import About from '@/components/About'
import Culture from '@/components/Culture'
import Mourn from '@/components/Mourn'
import Register from "@/components/Register"
import UserSpace from "@/components/UserSpace"
import Online from "@/components/Online"

Vue.use(Router);

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/culture',
      name: 'Culture',
      component: Culture
    }, {
      path: '/mourn',
      name: 'Mourn',
      component: Mourn
    }, {
      path: '/userspace',
      name: 'UserSpace',
      component: UserSpace
    },{
		path: "/register",
		name: "Register",
		component: Register
	},{
      path: "/online",
      name: "Online",
      component: Online
    }
  ]
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next();
//   } else {
//     let token = localStorage.getItem('Authorization');

//     if (token === null || token === '') {
//       next('/login');
//     } else {
//       next();
//     }
//   }
// });

export default router;
