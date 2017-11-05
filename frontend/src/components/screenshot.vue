<style type="text/css" scoped lang="less">
		.showimg{
			
			width: 100%;
			height: 100%;
			background-color: #222;
			
			/*top:6rem;*/
			
		}
		#toshow_img{
			max-height: 5.68rem;
			max-width: 3.2rem;
		}

		.showimg .btn-bar{
			position: absolute;
			bottom:0;
			left: 0;
			background-color:white;
			display: block;
		    width: 100%;
		    height: 0.4rem;
		    display: flex;
    		align-items: center;
    		justify-content: space-between;
		}
		.showimg .btn-bar .back{
			color:white;
			background-color: #ec3838;
			height: 30px;
		    line-height: 30px;
		    padding: 0;
		    width: 60px;
		    margin-left: 10px;
		    border:0;
		}
		.showimg .btn-bar .ok{
			color:white;
			background-color: #22bdbd;
			height: 30px;
		    line-height: 30px;
		    padding: 0;
		    width: 60px;
		    margin-right: 10px;
		    border:0;
		}
		.cropper-container{
			top: 50%;
			transform: translateY(-50%);
		}

		.cropper-face{
		  background-color: transparent;
		}
		// .showimg .cropper-container {
		//     font-size: 0;
		//     line-height: 0;
		//     position: absolute;
		//     -webkit-user-select: none;
		//     -moz-user-select: none;
		//     -ms-user-select: none;
		//     user-select: none;
		//     direction: ltr;
		//     top: 50%;
		//     /* top: 100%; */
		//     transform: translateY(-50%);
		// }
		// .showimg .cropper-view-box{
		// 	border-radius: 50%;
		// 	outline: none;
		// }
		// .showimg .cropper-face, .cropper-line, .cropper-point{
		// 	opacity: 0;
		// }
</style>
<template>
	<div class="showimg">
			<div >
				<img src="" id="toshow_img">
			</div>
						
			<div class="btn-bar" >
			<button @click="toBack()" class="back" >返回</button>
			<button @click="toUpload()" class="ok">确定</button>
			</div>
	</div>
</template>
<script type="text/javascript">
import EXIF from 'exif-js';
import Cropper from 'cropperjs';
import { Toast } from 'mint-ui';
import g from '../module/global';
	export default{
		name:'screenShot',
		data(){
			return{
				userInfo:g.userInfo,
				files:null,
				Orientation:null,
				cropperObj:null,
			}
		},
		methods:{
			toUpload(){
				// if(!this.userInfo.tel)
				// {
				// 	this.$router.push('Login');
				// 	return;
				// }
				this.userInfo.head_img=this.cropperObj.getCroppedCanvas().toDataURL();
				this.$http.post('http://localhost:9090/api/transport/user/update_userinfo_user/', this.userInfo).then(function(res){
					if(res.status==200)
					{
						Toast({
						  message: '修改成功',
						  iconClass: 'fa fa-check',
						  duration: 2000
						});
						this.$router.goBack()
						this.$router.push('/home');
					}
				}, function(res){
					Toast({
						  message: '网络异常',
						  iconClass: 'fa fa-times',
						  duration: 2000
					});
				});

			},
			toBack(){
				this.$router.goBack()
				this.cropperObj.destroy();
				this.cropperObj=null;
				this.$router.push('Settings');
			}
		},
		mounted(){
			console.log('screenShot1',g.files);
			this.files = g.files;
			const self =this;
			EXIF.getData(this.files, function() {
					this.Orientation = EXIF.getTag(this, 'Orientation'); //去获取拍照时的信息，解决拍出来的照片旋转问题  
				})
				// 看支持不支持FileReader  
				if(!this.files || !window.FileReader) return;
				if(/^image/.test(this.files.type)) {
					var reader = null;
					reader = new FileReader();
					console.log('screenShot2',reader);
					reader.readAsDataURL(this.files);
					reader.onload = function(e) {

						var oimg = document.getElementById("toshow_img");
						console.log('screenShot3',e);
						oimg.setAttribute("src", e.target.result);
						console.log('screenShot4',oimg);
						$(".showimg").addClass('active');
						self.cropperObj = new Cropper(oimg, {
							  aspectRatio: 1 / 1,
							  dragMode:'none',
							  dragCrop:false,
							  background:false,
							  cropBoxResizable:false,
							  guides:false,
							  aspectRatio: 1,  
      						  viewMode: 1, 
      						  // zoomable:false, 
      						  center:false,
      						  scalable:true,
							  // autoCropArea:0.7,
							  crop: function(e) {
							    console.log('screenShot5',e)
							  }
						});
						// self.toCropper(oimg);
					}
				} else {
					alert('不支持该图片格式');
				}




		}
	}
</script>