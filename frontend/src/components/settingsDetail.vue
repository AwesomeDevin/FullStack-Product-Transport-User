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
		.mint-cell{
			border-bottom:1px solid #f1f1f1;
			.heaer_img{
				width: 0.44rem;
				height: 0.44rem;
				border-radius: 50%;
				border:1px solid #eee;
			}
			.name{
				width: 100%;
				height: 0.44rem;
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
		  <router-link to="/" slot="right">
		    <mt-button>保存</mt-button>
		  </router-link>
		  <!-- <mt-button icon="more" slot="right"></mt-button> -->
		</mt-header>
		<div class="alignment">
			<a class="mint-cell">
				<input v-model="userInfo.userName" class="name" type="text" placeholder="请输入昵称" />
			</a>
			<a class="mint-cell">
				<div class="mint-cell-left"></div>
				<div class="mint-cell-wrapper">
					<div class="mint-cell-title"><!----> 
						<span class="mint-cell-text">{{userInfo.tel}}</span> <!---->
					</div> 
					<div class="mint-cell-value">
						<button class="mint-button mint-button--primary mint-button--small">
							<span class="mint-button-icon"><i class="mintui mintui-back"></i></span> 
							<label class="mint-button-text">更换手机号码</label>
						</button>
					</div>
				</div> 
				<div class="mint-cell-right"></div>
			</a>
		</div>
		
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'settingsDetail',
		data(){
			return{
				userInfo:{},
			}
		},
		methods:{
			
		},
		created(){
			
			this.userInfo.head_img = 'src/assets/logo.png';
			this.userInfo.tel='13145950323';
			this.userInfo.userName = 'Tohcart';
			this.userInfo.sex = '男';

		}
	}
</script>