import Vue from 'vue'
// import Vonic from 'vonic'
// import Axios from 'axios'
import App from './App.vue'
import Home from './components/home.vue'
import Settings from './components/setting.vue'
import SettingsDetail from './components/settingsDetail.vue'
import Login from './components/login.vue'
import ScreenShot from './components/screenshot.vue'
import MapView from './components/map.vue'
import Confirm from './components/confirm.vue'
import Order from './components/order.vue'
import PageTransition from './components/PageTransition.vue'







import Mint from 'mint-ui';
import { Header } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import { Cell } from 'mint-ui';
import { Actionsheet } from 'mint-ui';
import { Popup } from 'mint-ui';
import { DatetimePicker  } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';



import store from './module/vuex.js';
import 'mint-ui/lib/style.css'



Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Cell.name, Cell);
Vue.component(Header.name, Header);
Vue.component(Actionsheet.name, Actionsheet);
Vue.component(Popup.name, Popup);
Vue.component(DatetimePicker .name, DatetimePicker );
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
require('../css/style.less');
require('../css/animate.css');
require('../font-awesome/css/font-awesome.css');
// require('cropperjs');
require('../node_modules/cropperjs/dist/cropper.min.css');


const jQuery = require('jquery');
window.jQuery = jQuery;
window.$ = window.jQuery;

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Mint);
// Vue.use(socket);
const routes = [
	{
		path:'/user',
		name: 'PageTransition',
      	component: PageTransition,
      	children:[{
			path: '/home',
			component: Home,
		},
		{
			path: '/settings',
			component: Settings,
		},
		{
			path: '/settingsdetail',
			component: SettingsDetail,
		},
		{
			path: '/login',
			name:'login',
			component: Login,
		},
		{
			path: '/screenshot',
			component: ScreenShot,
		},
		{
			path: '/map',
			component: MapView,
		},
		{
			path: '/confirm',
			name:'confirm',
			component: Confirm,
		},
		{
			path: '/order',
			name:'order',
			component: Order,
		},]
	},
	
	{path:'*', redirect:'/home'}  //404
];


const router = new VueRouter({
	routes,
})

VueRouter.prototype.goBack  = function () {
  this.isBack = true
  window.history.go(-1)
}
VueRouter.prototype.go  = function () {
  this.isBack = true
  window.history.go(-1)
}

new Vue({
	router,
	store,
	el: '#app',
	render: h => h(App)
})
