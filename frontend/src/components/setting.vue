<style type="text/css" scoped lang='less'>
	#settings{
		width: 100%;
		height: 100%;
		background: #f0f0f0;
		box-shadow: 0 0 10px #ccc;
		box-sizing: border-box;
		header{
			background: #3f3e3d;
		}
		.alignment{
			width: 100%;
			margin-top: 0.1rem;
			box-shadow: 0 0 5px #ccc;
		}
		.mint-cell{
			border-bottom:1px solid #f1f1f1;
			.heaer_img{
				width: 0.44rem;
				height: 0.44rem;
				border-radius: 50%;
				border:1px solid #eee;
			}
			.fa-user-circle{
				font-size: 0.3rem;
			}
			input{
				height: 100%;
				position: absolute;
				opacity: 0;
			}
		}
		.mint-cell:nth-last-child(1){
			border-bottom: 0;
		}
	}
</style>
<template>
	<div id="settings">
		<mt-header title="个人信息">
		  <router-link to="/home" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <!-- <mt-button icon="more" slot="right"></mt-button> -->
		</mt-header>
		<div class="alignment">
			<a class="mint-cell">
				<div class="mint-cell-wrapper">
					<div class="mint-cell-title"><!----> 
						
						<span class="mint-cell-text">头像</span> <!---->
						
					</div>
					<div class="mint-cell-value is-link">
						
							<i v-if="!userInfo.head_img"  class="fa fa-user-circle" aria-hidden="true"></i>
							<img v-if="userInfo.head_img"  class="heaer_img" :src="userInfo.head_img">
							<input type="file" accept="image/png,image/jpg, image/jpeg"  @change="chooseImg" name="img" />
						
					</div>
					<i class="mint-cell-allow-right"></i>
				</div>
			</a>
			<mt-cell
			  title="姓名"
			  to="/settingsdetail"
			  is-link
			  :value="userInfo.username?userInfo.username:'去设置'">
			</mt-cell>
			<a @click="actionSheet()" class="mint-cell"><span class="mint-cell-mask"></span> <div class="mint-cell-left"></div> <div class="mint-cell-wrapper"><div class="mint-cell-title"><!----> <span class="mint-cell-text">性别</span> <!----></div> <div class="mint-cell-value is-link"><span>{{userInfo.sex?userInfo.sex:'去设置'}}</span></div></div> <div class="mint-cell-right"></div> <i class="mint-cell-allow-right"></i></a>
			<mt-cell
			  title="手机号"
			  to="/settingsdetail"
			  is-link
			  :value="userInfo.tel?userInfo.tel:'去设置'">
			</mt-cell>
		</div>
		<mt-actionsheet
		  :actions="actions"
		  v-model="sheetVisible">
		</mt-actionsheet>
		<!-- <mt-actionsheet
		  :actions="actions_img"
		  v-model="sheetVisible_img">
		</mt-actionsheet> -->
	</div>
</template>
<script type="text/javascript">
import g from '../module/global';
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import Vue from 'vue';

	export default{
		name:'settings',
		data(){
			return{
				userInfo:g.userInfo,
				sheetVisible:false,
				actions:[{
					'name':'男',
					'method':this.selectMan
				},{
					'name':'女',
					'method':this.selectWoman
				}],
				sheetVisible_img:false,
				files:null,
				// actions_img:[{
				// 	'name':'拍照',
				// 	'method':this.selectCamara
				// },{
				// 	'name':'从相册中选择',
				// 	'method':this.selectAlbum
				// }],

			}
		},
		methods:{
			clickBody(){
				this.controlSideMenu();
			},
			actionSheet(){
				this.sheetVisible=true;
			},
			selectMan(){
				Vue.set(this.userInfo,'sex','男');
				this.updateUserInfo();
			},
			selectWoman(){
				Vue.set(this.userInfo,'sex','女');
				this.updateUserInfo();

			},
			chooseImg(e){
				console.log(this.userInfo.tel);
				if(!this.userInfo.tel)
				{
					this.$router.push('Login');
					return;
				}
				console.log('>>>>',parseInt(e.target.files[0]).size/1024>300,e.target.files[0].size/1024);
				if( parseInt(e.target.files[0].size)/1024>300)
				{
					MessageBox('错误', '请传入图片小于300kb的图片');
					return;
				}
				this.files = e.target.files[0];
				g.files = this.files;
				this.$router.push('ScreenShot');

			},
			// selectCamara(){

			// },
			// selectAlbum(){

			// },
			updateUserInfo(){
				if(!this.userInfo.tel)
				{
					this.$router.push('Login');
					return;
				}
				console.log(this.userInfo);
				this.$http.post('http://localhost:9090/api/transport/user/update_userinfo_user/', this.userInfo).then(function(res){
					if(res.status==200)
					{
						Toast({
						  message: '修改成功',
						  iconClass: 'fa fa-check',
						  duration: 2000
						});
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
			console.log('created');
			// this.userInfo.head_img = 'src/assets/logo.png';
			// this.userInfo.tel='13145950323';
			// this.userInfo.username = 'Tohcart';
			// this.userInfo.sex = '男';

		}
	}
</script>