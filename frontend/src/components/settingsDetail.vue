<style type="text/css" scoped lang='less'>
	#settings_detail{
		width: 100%;
		height: 100%;
		background: #f0f0f0;
		header{
			background: #3f3e3d;
		}
		.alignment{
			width: 100%;
			margin-top: 0.1rem;
			box-shadow: 0 0 5px #ccc;
			
		}
		div.button{
				button{
					display: block;
					width: 90%;
					height: 0.44rem;
					margin: 0 auto;
					margin-top: 0.4rem;
					border:0;
					background: #ef5217;
					color:white;
					font-size: 0.14rem;
					outline: none;
				}
			}
		.mint-cell{
			border-bottom:1px solid #f1f1f1;
			.heaer_img{
				width: 0.44rem;
				height: 0.44rem;
				border-radius: 50%;
				border:1px solid #eee;
			}
			.title{
				width: 20%;
				text-indent: 0.1rem;
				display: inline-block;
				line-height: 0.46rem;
			}
			.name{
				width: 80%;
				height: 0.46rem;
				border:0;
				text-indent: 0.1rem;
				outline: none;
			}

		}
		.mint-cell:nth-last-child(1){
			border-bottom: 0;
		}
	}
</style>
<template>
	<div id="settings_detail">
		<mt-header title="编辑个人信息">
		  <router-link to="/settings" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  
		    <mt-button @click="updateUserInfo()" slot="right">保存</mt-button>
		  
		  <!-- <mt-button icon="more" slot="right"></mt-button> -->
		</mt-header>
		<div class="alignment">
			<a class="mint-cell">
				<p class="title">昵称 </p><input v-model="userInfo.username" class="name" type="text" placeholder="请输入昵称" />
			</a>
			<a class="mint-cell">
				<p class="title">手机号码 </p><input v-model="userInfo.tel" class="name" type="text" placeholder="手机号码" />
			</a>

			
		</div>
		<!-- <div class="button"><button >更换手机号码</button></div> -->
		
	</div>
</template>
<script type="text/javascript">
import g from '../module/global';
import { Toast } from 'mint-ui';
import Vue from 'vue';
	export default{
		name:'settingsDetail',
		data(){
			return{
				userInfo:g.userInfo,
			}
		},
		methods:{
			updateUserInfo(){
				console.log(this.userInfo);
				if(!this.userInfo.tel)
				{
					this.$router.push('Login');
					return;
				}
				this.$http.post('http://localhost:9090/api/transport/user/update_userinfo_user/', this.userInfo).then(function(res){
					if(res.status==200)
					{
						Toast({
						  message: '修改成功',
						  iconClass: 'fa fa-check',
						  duration: 2000
						});
						// g.userInfo = res.body[0];
					}
				}, function(res){
					Toast({
						  message: '网络异常',
						  iconClass: 'fa fa-times',
						  duration: 2000
					});
				});
			}
		},
		created(){
			
			// this.userInfo.head_img = 'src/assets/logo.png';
			// this.userInfo.tel='13145950323';
			// this.userInfo.userName = 'Tohcart';
			// this.userInfo.sex = '男';

		}
	}
</script>