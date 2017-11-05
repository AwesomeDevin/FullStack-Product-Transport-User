<style type="text/css" scoped lang='less'>
    #order{
        width: 100%;
        height: 100%;
        background: #edf0f5;
        box-shadow: 0 0 10px #ccc;
        box-sizing: border-box;
        header.mint-header{
                background: #3f3e3d;
                height: 0.4rem;
            }
        section{
            display: flex;
            flex-direction:column;
            width: 100%;
            height: 5.28rem;
            box-sizing: border-box;
            // padding: 0 0.15rem;
            
        }
        .order-none{
            margin:1.5rem auto 0 auto;
            p{
                font-size: 0.14rem;
                text-align: center;
                padding: 0.1rem 0;
            }
        }
        .order-none i.fa{
            font-size: 0.5rem;
            
            display: block;
            text-align: center;
        }
    }
    .item.doing .border{
            width: 0.05rem;
            height: 100%;
            background:#2980b9;
            filter:blur(1px);
    }
    .item.done .border{
            width: 0.05rem;
            height: 100%;
            background:#16a085;
            filter:blur(1px);
    }
    .item.cancel .border{
            width: 0.05rem;
            height: 100%;
            background:#c0392b;
            filter:blur(1px);
    }
    .item{
        margin:0.1rem 0;
        width: 100%;
        height: 1rem;
        background: white;
        box-sizing: border-box;
        box-shadow: 0 2px 3px 1px #b2aaaa;
        border-radius: 0.25em;
        padding: 0.08rem;
        display: flex;
        .border,.content{
            float: left;
        }
        .content{
            width: 100%;
        }
        
        .content .top{
            width: 100%;
            height: 0.55rem;
            padding-left: 0.05rem;
            p:nth-of-type(1) i.fa{
                color:#12b266;
                font-size: 0.13rem;
                margin-right: 0.05rem;
            }
            p:nth-of-type(2) i.fa{
                color:red;
                font-size: 0.13rem;
                margin-right: 0.05rem;
            }
            p:nth-of-type(3){
                color:#ccc;
                font-size: 0.14rem;
                margin-right: 0.05rem;
                span:nth-of-type(2){
                    margin-left: 0.15rem;
                }
            }
            p:nth-of-type(3) i.fa{
                color:#ccc;
                font-size: 0.13rem;
                margin-right: 0.05rem;

            }
            p{
                width: 100%;
                white-space: nowrap;
                text-overflow:ellipsis;
                overflow: hidden;
                line-height: 0.18rem;
                font-size: 0.13rem;
            }
        }
        .content .bottom{
            width: 100%;
            height: 0.29rem;
            background: #eaeaea;
            color:black;
            p{
                line-height: 0.29rem;
                text-indent: 0.05rem;
                span:nth-of-type(2){
                    margin-left: 0.1rem;
                }
            }
        }

    }
    .item_list{
        width: 100%;
        height: 100%;
        flex:1;
        box-sizing: border-box;
        padding: 0 0.1rem;
    }
</style>
<template>
    <div id="order">
        <mt-header title="订单记录">
          <router-link to="/home" slot="left">
            <mt-button icon="back">返回</mt-button>
          </router-link>
          <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
        <section>
            <mt-navbar v-model="selected" >
              <mt-tab-item id="1">进行中</mt-tab-item>
              <mt-tab-item id="2">已完成</mt-tab-item>
              <mt-tab-item id="3">已取消</mt-tab-item>
            </mt-navbar>
            <mt-tab-container v-model="selected">
              <mt-tab-container-item id="1">
                <!-- <mt-cell v-for="n in 20" :title="'content ' + n" /> -->
                <div v-if="orderListDoing.length>0" class="item_list">
                    <div v-for="item in orderListDoing" class="item doing">
                        <div class="border"></div>
                        <div class="content">
                            <div class="top">
                                <p><i class="fa fa-map-marker" aria-hidden="true"></i>{{item.startSite}}</p>
                                <p><i class="fa fa-map-marker" aria-hidden="true"></i>{{item.endSite}}</p>
                                <p><span><i class="fa fa-clock-o" aria-hidden="true"></i>{{item.date}}</span><span>距离:{{item.distance}}Km</span></p>
                            </div>
                            <div class="bottom">
                                <p><span>接单人:{{item.accept_user?item.accept_user:'未接受'}}</span><span>手机号:{{item.accept_tel?item.accept_tel:'未接受'}}</span><b style="font-family:'微软雅黑';float:right;font-size:0.13rem;color:rgb(250, 103, 6); ">{{item.price}}￥</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="!orderListDoing.length>0&&!orderLoading" class="order-none">
                    <i class="fa fa-file-text-o order-none" aria-hidden="true"></i>
                    
                    <p>没有订单哦 !</p>
                </div>
              </mt-tab-container-item>
              <mt-tab-container-item id="2">
                <div v-if="orderListDone.length>0" class="item_list">
                    <div v-for="item in orderListDone" class="item done">
                        <div class="border"></div>
                        <div class="content">
                            <div class="top">
                                <p><i class="fa fa-map-marker" aria-hidden="true"></i>{{item.startSite}}</p>
                                <p><i class="fa fa-map-marker" aria-hidden="true"></i>{{item.endSite}}</p>
                                <p><span><i class="fa fa-clock-o" aria-hidden="true"></i>{{item.date}}</span><span>距离:{{item.distance}}Km</span></p>
                            </div>
                            <div class="bottom">
                                <p><span>接单人:{{item.accept_user?item.accept_user:'未接受'}}</span><span>手机号:{{item.accept_tel?item.accept_tel:'未接受'}}</span><b style="font-family:'微软雅黑';float:right;font-size:0.13rem;color:rgb(250, 103, 6); ">{{item.price}}￥</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="!orderListDone.length>0&&!orderLoading" class="order-none">
                    <i class="fa fa-file-text-o order-none" aria-hidden="true"></i>
                    
                    <p>没有订单哦 !</p>
                </div>
              </mt-tab-container-item>
              <mt-tab-container-item id="3">
                <div v-if="orderListCancel.length>0" class="item_list">
                    <div v-for="item in orderListCancel" class="item cancel">
                        <div class="border"></div>
                        <div class="content">
                            <div class="top">
                                <p><i class="fa fa-map-marker" aria-hidden="true"></i>{{item.startSite}}</p>
                                <p><i class="fa fa-map-marker" aria-hidden="true"></i>{{item.endSite}}</p>
                                <p><span><i class="fa fa-clock-o" aria-hidden="true"></i>{{item.date}}</span><span>距离:{{item.distance}}Km</span></p>
                            </div>
                            <div class="bottom">
                                <p><span>接单人:{{item.accept_user?item.accept_user:'未接受'}}</span><span>手机号:{{item.accept_tel?item.accept_tel:'未接受'}}</span><b style="font-family:'微软雅黑';float:right;font-size:0.13rem;color:rgb(250, 103, 6); ">{{item.price}}￥</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="!orderListCancel.length>0&&!orderLoading" class="order-none">
                    <i class="fa fa-file-text-o order-none" aria-hidden="true"></i>
                    
                    <p>没有订单哦 !</p>
                </div>
              </mt-tab-container-item>
            </mt-tab-container>
        </section>
    </div>
</template>
<script type="text/javascript">
    import g from '../module/global';
    import { Indicator } from 'mint-ui';
    export default{
        name:'order',
        data(){
            return{
                selected:'1',
                userInfo:null,
                orderList:[],
                orderLoading:true,
            }
        },
        computed:{
            orderListDoing(){
                var arr=[];
                this.orderList.forEach((data)=>{
                    console.log(data);
                   if (data.status=='doing'||data.status=='appoint')
                   {
                    arr.push(data);
                   }
                })
                return arr;
            },
            orderListDone(){
                var arr=[];
                this.orderList.forEach((data)=>{
                    console.log(data);
                   if (data.status=='done')
                   {
                    arr.push(data);
                   }
                })
                return arr;
            },
            orderListCancel(){
                var arr=[];
                this.orderList.forEach((data)=>{
                    console.log(data);
                   if (data.status=='cancel')
                   {
                    arr.push(data);
                   }
                })
                return arr;
            }
        },
        created(){
            this.userInfo = g.userInfo;
            console.log(this.userInfo);
            if(!this.userInfo.tel)
            {
                this.$router.push({name:'login'});
            }
            this.initOrderAll();
        },
        methods:{
            initOrderAll(){
                var self = this;
                Indicator.open('加载中');
                this.$http.get('http://localhost:9090/api/transport/user/get_all_order/?tel='+this.userInfo.tel).then(function(res){
                    console.log(res.data);
                    this.orderList = res.data;
                    self.orderLoading = false;
                    Indicator.close();
                },function(res){
                    console.log(res.status);
                    Indicator.close();
                });
            }
        }
    }
</script>