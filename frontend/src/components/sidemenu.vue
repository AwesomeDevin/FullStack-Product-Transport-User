<style type="text/css" scoped lang='less'>
	a{
		color:#353134;
	}
	div.body{
		
		height: 100%;
		width:100%;
		position: relative;
		
	}
	.mask_layer{
		
		height: 100%;
		width:100%;
		background: black;
		opacity: 0;
		transition: all 1.5s;
	}
	.mask_layer.active{
		opacity: 0.3;
	}
	.bar{
		left: 0;
		top: 0;
		position: absolute;
		background: white;
		width: 85%;
		height: 100%;
		.user{
			width: 100%;
			height: 25%;
			display: flex;
			align-items:center;
			background: coral;
			.info{
				width: 80%;
				height: 65%;
				margin:0 auto;
				display: flex;
				align-items:center;
				justify-content:space-between;
				i.fa-user-circle{
					font-size: 0.5rem;
					display: inline-block;
					color:white;
				}
				img{

					width: 0.54rem;
					height: 0.54rem;
					border-radius: 0.5rem;
					box-shadow: 0 0 5px white;
				}
				div{
					box-sizing: border-box;
					
					width: 1.5rem;
					float: right;
					p{
						line-height: 0.25rem;
						margin-left: 0.2rem;
						font-size: 0.16rem;
						font-family: fantasy;
						color:white;
					}
				}
			}
		}
		.menu{
			width:100%;
			height: 68%;
			li{
				width: 100%;
				line-height: 0.44rem;
				margin:0;
				box-sizing: border-box;
				padding:0 0.2rem ;
				i.fa{
					color:#353134;
					padding: 0 0.15rem;
					width: 0.25rem;
				}
			}
		}
		.footer{
			width: 100%;
			height:7%;
			text-align: center;
			box-shadow: 0 0px 10px #bcb8b8;
			background: #eee;
			i.fa{
				color:#ff7f50;
				padding: 0 0.05rem;
			}
		}
	}
</style>
<template>
<div class="body"  >
	<div class="mask_layer" :class="showSideMenuFlag?'active':''" @click="clickBody()"></div>
	<div class="bar">
		<div class="user">
			<div class="info">
			<router-link v-if="userInfo.tel" to="/settings">
				<img v-if="userInfo.head_img" :src="userInfo.head_img"/>
				<i v-if="!userInfo.head_img" class="fa fa-user-circle" aria-hidden="true"></i>
				<div>
					<p>{{userInfo.tel}}</p>
					<p>{{userInfo.username}}</p>
				</div>
			</router-link>
			<router-link v-if="!userInfo.tel" to="/login">
				<i class="fa fa-user-circle" aria-hidden="true"></i>
				<div>
					<p>Login</p>
					<p>点击登录</p>
				</div>
			</router-link>
			</div>
		</div>
		<ul class="menu">
			 <router-link to="/order"><li><i class="fa fa-file-text" aria-hidden="true"></i><span>订单记录</span></li></router-link>
			<li><i class="fa fa-truck" aria-hidden="true"></i><span>我的司机</span></li>
			<li><i class="fa fa-ticket" aria-hidden="true"></i><span>优惠券</span></li>
			<li><i class="fa fa-phone-square" aria-hidden="true"></i><span>客服中心</span></li>
			<li><i class="fa fa-handshake-o" aria-hidden="true"></i><span>邀请有奖</span></li>
			<li @click="logout()"><i class="fa fa-sign-out" aria-hidden="true"></i><span>退出登录</span></li>
			
		</ul>
		<div class="footer">
			<i class="fa fa-truck" aria-hidden="true"></i>
			<span> 托运就上托卡 Tohcart</span>
		</div>
	</div>
	
</div>
</template>

<script type="text/javascript">
import bus from '../module/bus';
import g from '../module/global';
import Vue from 'vue';

export default{
	props:{
		controlSideMenu:null,
		showSideMenuFlag:null,
		userInfo:null,
	},
	watch:{
	},
	name:'sideMenu',
	data(){
		return{
			
		}
	},
	methods:{
		clickBody(){
			this.controlSideMenu();
		},
		logout(){
			console.log(this.userInfo.tel);
			if (!this.userInfo.tel)
			{
				return;
			}
			this.$emit('logout',{
				username:null,
			  	tel:null,
			  	head_img:null,
			  	sex:null,
			});
			Vue.set(g,'userInfo',{
				username:null,
			  	tel:null,
			  	head_img:null,
			  	sex:null,
			});
			bus.$emit('getUserInfo',g.userInfo);
			this.$forceUpdate();
		}
	},
	created(){
		// bus.$on('getUserInfo',function(data){
		// 	for(var key in data)
		// 	{
		// 		Vue.set(this.userInfo,key,data[key]);
		// 	}
		// 	console.log('sideMenu',this.userInfo);
		// })
		
		// this.userInfo.head_img = 'src/assets/logo.png';
		// this.userInfo.tel='13145950323';
		// this.userInfo.username = 'Tohcart';
	}
}
</script>