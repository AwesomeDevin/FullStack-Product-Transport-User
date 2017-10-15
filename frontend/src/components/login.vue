<style type="text/css" scoped lang='less'>
	#login{
		width: 100%;
		height: 100%;
		background: white;
		box-shadow: 0 0 10px #ccc;
		box-sizing: border-box;
		header{
			background: #3f3e3d;
		}
		h1{
			color:#ef5217;
			text-align: center;
			font-style: italic;
			font-size:0.4rem;
			font-family: fantasy;
		}
		section{
			width: 100%;
			height: 2.5rem;
			box-sizing: border-box;
			padding: 0 0.15rem;
		
				div{
					width: 100%;
					height: 0.44rem;
					
					label{
						width: 100%;
						line-height: 0.44rem;
						height: 0.44rem;
						display: inline-block;
						background: #eee;
						input{
							width: 70%;
							display: inline-block;
							line-height: 0.44rem;
							border: 0;
							outline: none;
							background: #eee;
							text-indent: 0.1rem;
						}
						span{
							text-align: center;
							width: 17%;
							display: inline-block;
							line-height: 0.44rem;
						}
						i.fa{
							float: right;
							line-height: 0.44rem;
							padding: 0 0.1rem;
							font-size: 0.2rem;
						}
						
					}
				}
				div:nth-child(2){
					margin:0.05rem 0 0.2rem 0;
					label{
						width: 60%;
						input{
							width: 50%;
						}
						span{
							width: 29%;
						}
					}
					button{
						float: right;
						width: 35%;
						height: 100%;
						border:0;
						margin-left: 0.05rem;
						background: #ef5217;
						color:white;
					}
					button[disabled]{
						opacity: 0.4;
					}
				}
				div:nth-child(3){
					button{
						width: 100%;
						height: 100%;
						border:0;
						background: #ef5217;
						color:white;
						font-size: 0.14rem;
						outline: none;
					}
					button[disabled]{
						opacity: 0.4;
					}
				}

				
			
		}
		
		
	}
	
</style>
<template>
<div id="login">
	<mt-header title="个人信息">
		  <router-link to="/home" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <!-- <mt-button icon="more" slot="right"></mt-button> -->
	</mt-header>
	<h1>Tohcart</h1>
	<section>
		
		<div>
			<label>
				<span>+86</span><input v-model="tel" type="text" name="tel" placeholder="请输入手机号码"><i class="fa fa-mobile" aria-hidden="true"></i>
			</label>
		</div>
		<div>
			<label>
				<span>验证码</span><input v-model="pin" type="text" nam="pin" placeholder="请输入验证码"><i class="fa fa-lock" aria-hidden="true"></i>
			</label>
			<button :disabled="pin.length!=6">发送验证码</button>
		</div>
		<div>
			<button :disabled="!isMobileNumber" @click="login()">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
		</div>
		
	</section>
</div>
</template>

<script type="text/javascript">
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
import g from '../module/global';
import bus from '../module/bus';

	export default{
		props:{
		},
		name:'login',
		data(){
			return{
				pin:'',
				tel:'',
			}
		},
		watch:{

		},
		computed:{
			isMobileNumber(){
				return this.tel.match(/^1[34578]\d{9}$/)?true:false;
			}
		},
		methods:{
			login(){
				Indicator.open('登陆中');
				var data={
					tel:this.tel,
					pin:this.pin,
				}
				this.$http.post('http://localhost:9090/api/transport/user/register_user/', data).then(function(res){
					Indicator.close();
					if(res.status==200)
					{
						Toast({
						  message: '登录成功',
						  iconClass: 'fa fa-check',
						  duration: 2000
						});
						g.userInfo = res.body[0];
						this.$router.push('Home');
						bus.$emit('getUserInfo',g.userInfo);
					}
					else
					{
						Toast({
						  message: '登录失败',
						  iconClass: 'fa fa-times',
						  duration: 2000
						});
					}
				}, function(res){
					Indicator.close();
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
			
		}
	}
</script>