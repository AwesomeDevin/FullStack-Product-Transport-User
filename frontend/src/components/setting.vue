<style type="text/css" scoped lang='less'>
	#settings{
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
		.mint-cell{
			border-bottom:1px solid #f1f1f1;
			.heaer_img{
				width: 0.44rem;
				height: 0.44rem;
				border-radius: 50%;
				border:1px solid #eee;
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
						<img class="heaer_img" :src="userInfo.head_img">
					</div>
					<i class="mint-cell-allow-right"></i>
				</div>
			</a>
			<mt-cell
			  title="昵称"
			  to="/settingsdetail"
			  is-link
			  :value="userInfo.userName?userInfo.userName:'去设置'">
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
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'settings',
		data(){
			return{
				userInfo:{},
				sheetVisible:false,
				actions:[{
					'name':'男',
					'method':this.selectMan
				},{
					'name':'女',
					'method':this.selectWoman
				}],

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
				this.userInfo.sex = '男';
			},
			selectWoman(){
				this.userInfo.sex = '女';
			}
		},
		created(){
			
			this.userInfo.head_img = 'src/assets/logo.png';
			this.userInfo.tel='13145950323';
			this.userInfo.userName = 'Tohcart';
			this.userInfo.sex = '男';

		}
	}
</script>