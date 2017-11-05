<style type="text/css" scoped lang='less'>

	#map{
		width: 100%;
		height: 100%;
		#mapview{
			width: 100%;
			height: 100%;
		}
	}
	.search{
			width: 100%;
			height: 0.34rem;
			background: white;
			border:1px solid #ccc;
			display: flex;
			align-items:center;
			i{
				
				color:#686363;
				padding: 0 0.1rem;
				border-right: 1px solid #686363;
			}
			input {
				border:0;
				margin:0 0.1rem;
				height:0.18rem;
				line-height:0.34rem;
				outline: none;
				width: 60%;
				border-right: 1px solid #686363;
			}

	}
	.search_box{
		width: 80%;
		top: 0;
		left: 0;
		position: absolute;
		z-index:100;
		left: 50%;
		top: 0.1rem;
		transform:translateX(-50%);
		#siteList{
			width: 80%;
		}
	}
	footer{
		width: 100%;
		position:absolute;
		bottom:0;
		left: 0;
		height: 0.84rem;
		color:white;
		box-shadow: 0 1px 5px black;
		p{
			width: 100%;
			height:0.4rem;
			background: #3f3e3d;
			color:white;
			line-height: 0.4rem;
			i{
				
				padding:0 0.1rem;
			}
			i.start{
				color:#12b266;
			}
			i.end{
				color:red;
			}
		}
		button{
			width: 100%;
			height:0.44;
			line-height:0.44rem;
			border:0;
			color:white;
			background:#ef5217;
			
		}
	}

</style>
<template>
	<div id="map">
		<div id="mapview"></div>
		<div class="search_box">
			<div class="search"><i class="fa fa-dot-circle-o" aria-hidden="true"></i><input v-model="address" id="search_ipt" placeholder="搜索地址" type="text" /><p @click="toSearch">搜索</p></div>
			<div id="siteList"></div>
		</div>
		<footer>
			<p><i class="fa fa-map-marker" :class="mapType == 'start'?'start':'end'" aria-hidden="true"></i>{{selectAddress}}</p>
			<button @click="confirm()">确认{{$route.query.site === 'start'?'起点':'终点'}}</button>
			
		</footer>
	</div>
</template>

<script>
import Vue from 'vue';
import g from '../module/global'
export default{
	name:'MapView',
	data(){
		return{
			resource:null,
			now:null,
			address:null,
			map:null,
			selectAddress:null,
			totalInfo:null,
		}
	},
	watch:{
		selectAddress(val,oldval){
			var self = this;
			var myGeo = new BMap.Geocoder();
			console.log(val,oldval,g.startSite,g.endSite,this.$route.query.site);
			if(this.$route.query.site=='start'&&val&&g.endSite)
			{
				var startPoint,endPoint;
				myGeo.getPoint(val, function(point){
					if (point) {
						startPoint = point;
						myGeo.getPoint(g.endSite, function(point){
							if (point) {
								endPoint = point;
								self.$http.get('http://restapi.amap.com/v3/direction/driving?origin='+startPoint.lng+','+startPoint.lat+'&destination='+endPoint.lng+','+endPoint.lat+'&extensions=all&output=json&key=5fd5655e86da6e3c34fd7a2bf5ac9565').then(function(res){
									self.createTip("行驶距离:"+(res.data.route.paths[0].distance/1000).toFixed(2)+"公里,耗时:"+res.data.route.paths[0].duration+"秒");
									g.distance = (res.data.route.paths[0].distance/1000).toFixed(2);
									g.duration = res.data.route.paths[0].duration;
								})
							}else{
								alert("您选择地址没有解析到结果!");
							}
						});
					}else{
						alert("您选择地址没有解析到结果!");
					}
				});

			}
			else if(this.$route.query.site=='end'&&val&&g.startSite)
			{
				var startPoint,endPoint;
				myGeo.getPoint(g.startSite, function(point){
					if (point) {
						startPoint = point;
						myGeo.getPoint(val, function(point){
							if (point) {
								endPoint = point;
								self.$http.get('http://restapi.amap.com/v3/direction/driving?origin='+startPoint.lng+','+startPoint.lat+'&destination='+endPoint.lng+','+endPoint.lat+'&extensions=all&output=json&key=5fd5655e86da6e3c34fd7a2bf5ac9565').then(function(res){
									self.createTip("行驶距离:"+(res.data.route.paths[0].distance/1000).toFixed(2)+"公里,耗时:"+res.data.route.paths[0].duration+"秒");
									g.distance = (res.data.route.paths[0].distance/1000).toFixed(2);
									g.duration = res.data.route.paths[0].duration;
								})
							}else{
								alert("您选择地址没有解析到结果!");
							}
						});
					}else{
						alert("您选择地址没有解析到结果!");
					}
				});
			}
		}
	},
	computed:{
		// selectAddress:{
		// 	get(){
		// 		return this.address;
		// 	},
		// 	set(val){
		// 		console.log(val);
		// 		return val;
		// 		// this.selectAddress = val;
		// 	}
		// },
		mapType(){
			return this.$route.query.site === 'start'?'start':'end';
		},
	},
	methods:{
		createTip(text){
			
			var myGeo = new BMap.Geocoder();
			var self = this;
			myGeo.getPoint(this.selectAddress, function(point){
				console.log(self.selectAddress,point);
			if (point) {
				var opts = {
				  
				  title : "货运信息" , // 信息窗口标题
				}
				var infoWindow = new BMap.InfoWindow(text, opts);
				self.map.openInfoWindow(infoWindow,point); //开启信息窗口
			}else{
				alert("您选择地址没有解析到结果!");
			}
			});
			
		},
		toSearch(){
			// 创建地址解析器实例
			// console.log(this.selectAddress,this.address);
			if(!this.address||this.address.length<1)
			{
				return;
			}
			this.selectAddress = this.address;
			var myGeo = new BMap.Geocoder();
			myGeo.getPoint(this.address, function(point){
				if (point) {
					map.panTo(point);
					map.addOverlay(new BMap.Marker(point));
				}else{
					alert("您选择地址没有解析到结果!");
				}
			});
		},
		confirm(){
			// console.log(this.$route.query.site);
			if(this.$route.query.site === 'start')
			{
				g.startSite = this.selectAddress;
			}
			else if(this.$route.query.site === 'end')
			{
				g.endSite = this.selectAddress;
			}
			this.$router.goBack()
			this.$router.push('/home');

		}
	},
	created(){
		// var script = document.createElement('script');
		// script.src="http://api.map.baidu.com/api?v=2.0&ak=uQSzh8Ob5bTPwlbg9j5CkQBKPLfFPop0";
		// document.body.appendChild(script);
		// script = document.createElement('script');
		// script.src="http://webapi.amap.com/maps?v=1.4.0&key=5fd5655e86da6e3c34fd7a2bf5ac9565";
		// document.body.appendChild(script);
	},
	mounted(){
		var self = this;
		setTimeout(function(){
		var map = new BMap.Map("mapview");
		var geolocation = new BMap.Geolocation();
		geolocation.getCurrentPosition(function(r){
			if(this.getStatus() == BMAP_STATUS_SUCCESS){
				var mk = new BMap.Marker(r.point);
				map.addOverlay(mk);
				self.resource = r.point;
				self.now = r.point;
				
				 new BMap.Geocoder().getLocation(r.point,(res)=>{
				 	var res = res.addressComponents;
				 	self.selectAddress = res.province+""+res.city + "" + res.district + "" + res.street + "" + res.streetNumber;
				 	// console.log(res,self.selectAddress,res.province);
					
				 })
				// console.log(r.point);
				var point = new BMap.Point(r.point.lng,r.point.lat);
				map.centerAndZoom(point,12);
				map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
				map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
			}
			else {
				alert('failed'+this.getStatus());
			}        
		},{enableHighAccuracy: true})

		var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
		{	"input" : "search_ipt",
			"location" : map
		});
		ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
		var str = "";
			var _value = e.fromitem.value;
			var value = "";
			if (e.fromitem.index > -1) {
				value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
			}    
			str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
			
			value = "";
			if (e.toitem.index > -1) {
				_value = e.toitem.value;
				value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
			}    
			str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
			// document.getElementById("siteList").innerHTML = str;
		});

		var myValue;
		ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
		var _value = e.item.value;
			myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
			// document.getElementById("siteList").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
			self.selectAddress = myValue;
			self.address = myValue;
			// console.log(self.selectAddress,myValue);
			map.clearOverlays();    //清除地图上所有覆盖物
			function myFun(){
				var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
				self.now = pp;
				map.centerAndZoom(pp, 18);
				map.addOverlay(new BMap.Marker(pp));    //添加标注
			}
			var local = new BMap.LocalSearch(map, { //智能搜索
			  onSearchComplete: myFun
			});
			local.search(myValue);
		});
		self.map=map;

		
	},50)

		
	},

}
	
</script>