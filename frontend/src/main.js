import Vue from 'vue'
import App from './App.vue'
import Home from './components/home.vue'
import Settings from './components/setting.vue'
import SettingsDetail from './components/settingsDetail.vue'
import Login from './components/login.vue'
import ScreenShot from './components/screenshot.vue'






import Mint from 'mint-ui';
import { Header } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import { Cell } from 'mint-ui';
import { Actionsheet } from 'mint-ui';
import { Popup } from 'mint-ui';



import 'mint-ui/lib/style.css'



Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Cell.name, Cell);
Vue.component(Header.name, Header);
Vue.component(Actionsheet.name, Actionsheet);
Vue.component(Popup.name, Popup);
require('../css/style.less');
require('../css/animate.css');
require('font-awesome/css/font-awesome.css');
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
const routes = [
	{
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
		component: Login,
	},
	{
		path: '/screenshot',
		component: ScreenShot,
	},
	{path:'*', redirect:'/home'}  //404
];


const router = new VueRouter({
	routes
})

new Vue({
	router,
  el: '#app',
  render: h => h(App)
})
