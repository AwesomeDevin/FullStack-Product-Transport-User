<style type="text/css" scoped lang='less'>
	#home{
		
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction:column;
		position: relative;
	}
	#header{
		width: 100%;
		height: 0.44rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #3f3e3d;
		img{
			height: 0.4rem;
		}
		p{
			font-family: -webkit-body;
			font-weight: bold;
			font-size: 0.18rem;
			color:#ef5217;
		}
	}
	nav{
		width: 100%;
		background: #3f3e3d;
		padding:0 0.1rem;
		height: 0.44rem;
		box-sizing: border-box;
		overflow: hidden;
		border-bottom: 1px solid #ccc;
		div{
			width: 100%;
			height: 0.44rem;
			overflow-x: auto;
			ul{
				width: 3.5rem;
				height: 0.44rem;
				position: relative;
				li{
					width: 0.5rem;
					line-height: 0.44rem;
					display: inline-block;
					float: left;
					text-align: center;
					color:white;
					box-sizing: border-box;
					position: relative;
					margin:0 0.1rem;
				}
				li.active{
					color:#ef5217;
				}

			}
			.border{
					display: block;
					position: absolute;
					left: 0;
					bottom:0;
					width: 0.5rem;
					height: 0.04rem;
					background: #ef5217;
					z-index: 100;
					transform:translateX(0.1rem);
					transition: all 0.3s;

				}
		}
		div::-webkit-scrollbar{
			height: 0.01rem;
		}
	}
	section::-webkit-scrollbar{
			width: 0.01rem;

		}
	section{
		width: 100%;
		height: 100%;
		flex:1;
		box-sizing: border-box;
		padding:0 0.25rem;
		background:#f0f0f0;
		overflow-y: auto;

		.car{
			width: 100%;
			height: 2rem;
			overflow:hidden;
			position: relative;
			ul{
				width: 2.7rem;
				height: 1.5rem;
				div.mint-swipe-item{
						text-align: center;
						vertical-align: middle;
						display: table-cell;
					img{
						margin-top:0.2rem;
						width: 2rem;
						box-shadow: 0 5px 10px #a09898;
					}
				}
				.car_title{
					position: absolute;
					left: 50%;
					transform:translateX(-50%);
					top: 1.3rem;
					color:#a9acb1;
				}
				
			}
			.introduce{
				width: 100%;
				height: 0.5rem;
				position: relative;
				.text{
					width: 33%;
					height: 100%;
					float: left;
					p{
						text-align: center;
						line-height: 0.2rem;
					}
					p:nth-child(2){
						color:#a9acb1;
					}
				}
			}
			.introduce:before{
				content: '';
				display: block;
				position: absolute;
				width: 100%;
				height: 1px;
				background:#eeeeee;
				bottom: 0;
				box-shadow: 0 0px 5px #4b4745;
			}
			i.banner-left{
				position: absolute;
				padding:10px 5px;
				font-size: 0.4rem;
				top: 50%;
				left: 0;
				transform:translateY(-100%);
				z-index: 100;
				color:#3f3e3d;

			}
			i.banner-right{
				position: absolute;
				padding:10px 5px;
				font-size: 0.4rem;
				color:#3f3e3d;
				top: 50%;
				right: 0;
				z-index: 100;
				transform:translateY(-100%);

			}
		}
		.route{
			width: 100%;
			height: 1rem;
			background: white;
			margin-top: 0.5rem;
			box-shadow: 0 0 4px #ccc;
			.icon_box{
				width: 8%;
				float: left;
				height: 100%;
				display: flex;
				flex-direction:column;
				border-right: 1px solid #edeaea;
    			box-sizing: border-box;
				align-items:center;
				i{
					
				}
				i:nth-child(1){
					color:#12b266;
					margin-top: 0.1rem;
				}	
				i:nth-of-type(2){
					color:red;
					
				}
				p{
					width: 1px;
					height: 0.3rem;
					background: #ccc;
					margin: 0.04rem 0;
				}
			}
			.route_box{
				width: 92%;
				float: left;
				height: 100%;
				div{
					width: 100%;
					height: 50%;
					position: relative;
					p{

						line-height: 0.15rem;
						box-sizing: border-box;
						padding-top: 0.05rem;
					}
					p:nth-child(2){
						color:#a9acb1;
					}
					i.fa{
						position: absolute;
						right: 0.1rem;
						z-index: 100;
						top: 50%;
						transform:translateY(-50%);

					}
					.placeholder{
						height: 100%;
						line-height: 0.35rem;
						color:#888;
						text-indent: 0.1rem;
					}
					.place{
						width: 2.2rem;
						overflow: hidden;
						-ms-text-overflow: ellipsis;
						white-space: nowrap;
						height: 100%;
						line-height: 0.35rem;
						color:black;
						text-indent: 0.1rem;
					}
				}
				.start_site{
					i.fa{
						color:#ef5217;
					}
				}
				.end_site{
					i.fa{
						color:black;
					}
				}
			}
		}
	}
	footer{
		width: 100%;
		height: 0.88rem;
		background:#3f3e3d;

		.price_box{
			width: 100%;
			height: 0.5rem;
			color:white;
			p{
				line-height: 0.5rem;
				text-align: center;
				font-family: "微软雅黑";
				color:white;
				span{
					font-family: "微软雅黑";
					font-size: 0.22rem;
					color:#ef5217;
					margin:0 0.1rem;
				}
			}
		}
		.action_box{
			width: 100%;
			height: 0.38rem;
			background: #ef5217;
			p:nth-child(1){
				width: 30%;
				height:0.38rem;
				float: left;
				line-height: 0.38rem;
				color:white;
				background: darkorange;
				text-align: center;
				i.fa{
					color:white;
					padding: 0.08rem;
    				font-size: 0.14rem;
				}
			}
			p:nth-child(2){
				width: 70%;
				height:0.38rem;
				float: left;
				line-height: 0.38rem;
				color:white;
				text-align: center;
				i.fa{
					color:white;
					padding: 0.08rem;
    				font-size: 0.14rem;
				}
			}
		}
	}
	#sidemenu{
		position: absolute;
		left: -100%;
		top: 0;
		
		transition: all 0.15s;
		transition-timing-function: ease-in-out;
		z-index: 1000;
	}
	#sidemenu.active{
		left: 0;
		
	}
	
	
	
</style>
<template>
<div style="height:100%;width:100%;overflow: hidden;" v-cloak>
	<div id="home">
		<header id="header" class="">
			<i @click="controlSideMenu()" class="fa fa-btn fa-user-circle-o" aria-hidden="true" ></i>
			<p>Tohcart</p>
			<i class="fa fa-btn fa-bell" aria-hidden="true"></i>
		</header>
		<nav>
			<div>
				<ul >
					<li @click="switchCar(index)" :class="carIndex==index?'active':''" v-for="(car,index) in carConfig">{{car.name}}</li>
					<i class="border" ref="nav_border"></i>
				</ul>
			</div>
		</nav>
		<section>
			<div class="car">
				<div>
					<i @click.stop="front()" class="fa fa-angle-left fa-btn banner-left" aria-hidden="true"></i>
					<i @click.stop="back()" class="fa fa-angle-right fa-btn banner-right" aria-hidden="true"></i>
					
					<ul ref="carBox">
						<mt-swipe :show-indicators="false"  ref="mtSwipe" @change="handleChange" :auto="0">
						  <mt-swipe-item ref="mtItem" v-for="car in carConfig" :key="car.name"><img :src="car.img_src"/></mt-swipe-item>
							
						</mt-swipe>
						<p class="car_title">{{carConfig[carIndex].name}} 起步价: ￥{{curCarConfig.price}}</p>
					</ul>
				</div>
				<div class="introduce">
					<div class="text">
						<p>{{carConfig[carIndex].load}}</p>
						<p>载重</p>
					</div>
					<div class="text">
						<p>{{carConfig[carIndex].volume}}</p>
						<p>载货空间</p>
					</div>
					<div class="text">
						<p>{{carConfig[carIndex].area}}</p>
						<p>长*宽*高</p>
					</div>
				</div>
			</div>
			<div class="route">
				<div class="icon_box">
					<i class="fa fa-map-marker start"  aria-hidden="true"></i>
					<p></p>
					<i class="fa fa-map-marker end"  aria-hidden="true"></i>
				</div>
				<div class="route_box">
					<div class="start_site" @click="selectStartSite()">
						<p v-if="!startSite"  class="placeholder">点击选择起点</p>
						<p  v-if="startSite" class="place">{{startSite}}</p>

						<!-- <p v-if="startSite">方圆E时光</p>
						<p v-if="startSite">天河区科韵路12号</p> -->
						<i v-if="startSite" class="fa fa-bullseye" aria-hidden="true"></i>
					</div>
					<div class="end_site" @click="selectEndSite()">
						<p v-if="!endSite"  class="placeholder">点击选择目的地</p>
						<p v-if="endSite"  class="place">{{endSite}}</p>

						<!-- <p v-if="endSite">中国光大银行(黄埔大道支行)</p>
						<p v-if="endSite">黄埔大道中205</p> -->
						<i @click="clearEndSite()" v-if="endSite" class="fa fa-times-circle-o" aria-hidden="true"></i>
					</div>
				</div>
			</div>
		</section>
		<footer>
			<div class="price_box"><p>价格 : <span>￥{{curPrice}}</span>  距离 : <span>{{distance}}公里</span></p> </div>
			<div class="action_box"><p @click="appointOrder"><i class="fa fa-clock-o" aria-hidden="true"></i>预约</p><p @click="makeOrder"><i class="fa fa-rocket" aria-hidden="true"></i>现在用车</p></div>
		</footer>
	</div>
	<sidemenu @logout="logout" :userInfo="userInfo"  :showSideMenuFlag="showSideMenuFlag" :controlSideMenu="controlSideMenu" :class="showSideMenuFlag?'active':''" id="sidemenu"></sidemenu>
	<mt-datetime-picker
    ref="picker"
    type="time"
    v-model="pickerValue" @confirm="confirmDate">
  </mt-datetime-picker>
</div>
</template>


<script type="text/javascript">
import { addClass, removeClass } from 'mint-ui/src/utils/dom';
import { Toast } from 'mint-ui';
import SideMenu from './sidemenu.vue';
import bus from '../module/bus';
import g from '../module/global';
	export default{
		name:'Home',
		data(){
			return{
				'carConfig':[
					{'name':'小面包车','load':'500公斤','area':'1.8*1.3*1.2米','volume':'2.8立方','img_src':"src/assets/car1.jpg",'price':30,'every':2},
					{'name':'中面包车','load':'1吨','area':'2.7*1.4*1.2米','volume':'4.5立方','img_src':"src/assets/car2.jpg",'price':55,'every':2.8},
					{'name':'小型货车','load':'1吨','area':'2.7*1.5*1.5米','volume':'6立方','img_src':"src/assets/car3.jpg",'price':65,'every':3.6},
					{'name':'中型货车','load':'1.5吨','area':'4.2*1.8*1.8米','volume':'13.5立方','img_src':"src/assets/car4.jpg",'price':100,'every':4.5},
					{'name':'大型货车','load':'2吨','area':'5*2*2.2米','volume':'16立方','img_src':"src/assets/car5.jpg",'price':150,'every':6},

				],
				'carIndex':0,
				// 'curCarConfig':null,
				'startSite':null,
				'endSite':null,
				'showSideMenuFlag':false,
				'userInfo':g.userInfo,
				'distance':0,
				'pickerValue':null,
			}
		},
		watch:{
			carIndex:function(value,oldvalue){
				var width=(0.7*value+0.1).toFixed(2);
				this.$refs.nav_border.style.transform="translateX("+width+"rem)";
			},
			curCarConfig:function(value,oldvalue){
				console.log(value,oldvalue);
				g.curCarConfig = value;
			},
			curPrice:function(value,oldValue)
			{
				g.curPrice = value;
			}
		},
		methods:{
			logout(data){
				this.userInfo = data;
				Toast({
					message: '退出登录',
					iconClass: 'fa fa-check',
					duration: 2000
				});
			},
			confirmDate(value){
				console.log(new Date().toLocaleDateString(),value);
				this.$store.commit('increment',{date:new Date().toLocaleDateString()+' '+value});
				this.$router.push({name:'confirm'});
			},
			openPicker() {
				this.$refs.picker.open();
			},
			appointOrder(){
				if(!g.userInfo.tel)
				{
					this.$router.push({name:'login'});
					return;
				}
				if (!this.startSite||!this.endSite){
					Toast({
						  message: '请先选择路线',
						  iconClass: 'fa fa-times',
						  duration: 2000
						});
					return;
				}
				this.openPicker();
			},
			makeOrder(){
				if(!g.userInfo.tel)
				{
					this.$router.push({name:'login'});
					return;
				}
				if (!this.startSite||!this.endSite){
					Toast({
						  message: '请先选择路线',
						  iconClass: 'fa fa-times',
						  duration: 2000
						});
					return;
				}
				this.$router.push({name:'confirm'});
			},
			controlSideMenu(){
				this.showSideMenuFlag=this.showSideMenuFlag?false:true;
				console.log(this.showSideMenuFlag);
			},
			front(){ 
				this.$refs.mtSwipe.prev();

			},
			back(){	
				this.$refs.mtSwipe.next();
			},
			handleChange(index){
				
				this.carIndex = index;
			},
			switchCar(index)
			{
				if(index==this.carIndex)
				{
					console.log('break off');
					return;
				}
				

				 var callback = () => {
		          if (index !== undefined) {
		            var newPage = this.$refs.mtItem[index].$el;
		            removeClass(curPage.$el, 'is-active');
		            addClass(newPage, 'is-active');

		           this.$refs.mtSwipe.index = index;
		          }
		          if (this.$refs.mtSwipe.isDone) {
		            this.$refs.mtSwipe.end();
		          }

		          if (prevPage) {
		            prevPage.$el.style.display = '';
		          }

		          if (nextPage) {
		            nextPage.$el.style.display = '';
		          }
		        };
				
				
				
				 if(index>this.carIndex)
				{
					var curPage = this.$refs.mtItem[this.carIndex];
					var nextPage = this.$refs.mtItem[index];
					var pageWidth= this.$refs.mtItem[0].$el.clientWidth;
			        if (nextPage) {
			            nextPage.$el.style.display = 'block';
			          	this.$refs.mtSwipe.translate(nextPage.$el, pageWidth);
			        }
					console.log(this.$refs.mtSwipe.isDone);
					this.$refs.mtSwipe.isDone = true;
					this.$refs.mtSwipe.before(curPage.$el);

					this.$refs.mtSwipe.translate(curPage.$el, -pageWidth, 300, callback);
					if (nextPage) {
						var self =this;
						var timer = setTimeout(function(){
							self.$refs.mtSwipe.translate(nextPage.$el, 0, 300);	
							clearTimeout(timer);
						},50)
		              
		            }
				}
				else if(index<this.carIndex)
				{
					var curPage = this.$refs.mtItem[this.carIndex];
					var prevPage = this.$refs.mtItem[index];
					var pageWidth= this.$refs.mtItem[0].$el.clientWidth;

					if (prevPage) {
			            prevPage.$el.style.display = 'block';
			            this.$refs.mtSwipe.translate(prevPage.$el, -pageWidth);
			        }

					this.$refs.mtSwipe.isDone = true;
					this.$refs.mtSwipe.before(curPage.$el);
					this.$refs.mtSwipe.translate(curPage.$el, pageWidth, 300, callback);
					if (prevPage) {
		              this.$refs.mtSwipe.translate(prevPage.$el, 0, 300);
		            }
				}
			},
			selectStartSite(){
				this.$router.push('/map?site=start');
				// this.startSite = true;
			},
			selectEndSite(){
				this.$router.push('/map?site=end');
			},
			clearEndSite(){
				this.endSite = null;
			},
		},
		computed:{
			curCarConfig(){
				return this.carConfig[this.carIndex];
			},
			curPrice(){
				return this.distance-10>0?parseInt(this.curCarConfig.price+this.curCarConfig.every*this.distance-10):this.curCarConfig.price;
			}
		},
		created(){
			
		},
		mounted () {
			console.log(g);
			if(g.startSite)
			{
				this.startSite = g.startSite;
			}
			if(g.endSite)
			{
				this.endSite = g.endSite;
			}
			if(g.distance)
			{
				this.distance = g.distance;
			}
			g.curCarConfig = this.curCarConfig;
			g.curPrice = this.curPrice;
			// console.log(this.$refs.mtItem);
		    // console.log(this.$refs.carLi[0].getBoundingClientRect().width);
		},
		components:{
            'sidemenu':SideMenu
        },


		
	}
</script>



