<style type="text/css" scoped lang='less'>
    #confirm{
        width: 100%;
        height: 100%;
        background: #edf0f5;
        box-shadow: 0 0 10px #ccc;
        box-sizing: border-box;
        section{

            width: 100%;
            height: 5.28rem;
            box-sizing: border-box;
            // padding: 0 0.15rem;
            div.list{
                background: white;
                margin:0 0 0.25rem 0;
                box-sizing: border-box;
                border-top: 2px solid #ef5217;
                ul{
                    li{
                        display: block;
                        height: 0.38rem;
                        line-height: 0.38rem;
                        box-sizing: border-box;
                        padding:0 0.1rem;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow:ellipsis;
                        i.fa{
                            padding: 0 0.08rem;
                        }
                        i.fa.start{
                            color:#12b266;
                        }
                        i.fa.end{
                            color:red;
                        }
                        input{
                            border:0;
                            outline: none;
                            height: 100%;
                            font-family:"微软雅黑";
                        }
                    }
                    li:before{
                        content:'';
                        display: block;
                        width: 100%;
                        height: 1px;
                        background: #ddd;
                        left: 0;
                        top:0;
                        transform:scaleY(0.5);
                    }
                   
                }
            }
            p{
                line-height: 0.44rem;
                text-indent: 0.1rem;
            }
        }
    }

    footer{
        width: 100%;
        height: 0.88rem;
        background:#3f3e3d;
        position: fixed;
        left: 0;
        bottom: 0;
        .price_box{
            width: 100%;
            height: 0.5rem;
            color:white;
            line-height: 0.5rem;
            text-align: center;
            span{
            font-family: "微软雅黑";
            color: #ef5217;
            font-size: 0.22rem;

            }

        }
        button{
            width: 100%;
            height: 0.38rem;
            display: block;
            line-height: 0.38rem;
            color:white;
            background: #ef5217;
            text-align: center;
            font-size: 0.15rem;
            border:0;
            outline:none;
        }
        button:disabled{
            opacity: 0.5;
        }
    }
</style>
<template>
    <div id="confirm">
        <mt-header title="确认订单">
          <router-link to="/home" slot="left">
            <mt-button icon="back">返回</mt-button>
          </router-link>
          <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
        <section>
            <div class="list">
            <p>订单信息</p>
            <ul>
                <li><i data-v-2c2085c4="" aria-hidden="true" class="fa fa-map-marker start"></i>起点:{{startSite}}</li>
                <li><i data-v-2c2085c4="" aria-hidden="true" class="fa fa-map-marker end"></i>目的地:{{endSite}}</li>
            </ul>
            </div>
            <div class="list">
            <p>订单联系人资料</p>
            <ul>
                <li><i class="fa fa-calendar" aria-hidden="true"></i>{{date}}</li>
                <li><i class="fa fa-user" aria-hidden="true"></i><input placeholder="请使用真实姓名" v-model="username" type="text"/></li>
                <li><i class="fa fa-phone-square" aria-hidden="true"></i><input placeholder="请填写手机号" v-model="tel" type="text"/></li>
            </ul>
            </div>
            <footer>
                <div class="price_box">
                    价格:  <span>￥23</span>
                </div>
                <button @click="commit" :disabled="!allowable">下一步</button>
            </footer>
                
                <mt-actionsheet
                  :actions="actions"
                  v-model="sheetVisible">
                </mt-actionsheet>    
          
            
        </section>
        
    </div>
</template>
<script type="text/javascript">
    import g from '../module/global';
    import { Toast } from 'mint-ui';
    export default{
        name:'confirm',
        data(){
            return{
                startSite:null,
                endSite:null,
                tel:null,
                date:null,
                username:null,
                actions:[{
                    name:'微信',
                    method:this.selectVX,
                },{
                    name:'支付宝',
                    method:this.selectZFB,
                }],
                sheetVisible:false,
            }
        },
        computed:{
            allowable(){
                return this.startSite&&this.endSite&&this.tel&&this.date&&this.username?true:false;
            }
        },
        mounted(){
            this.startSite = g.startSite;
            this.endSite = g.endSite;
            this.tel = g.userInfo.tel;
            this.username = g.userInfo.username;
            console.log(this.$store);
            if(this.$store.state.expetDate)
            {
                 this.date = this.$store.state.expetDate;
                 this.$store.commit('increment',{date:null});
            }else {
                this.date=new Date().toLocaleString('chinese',{hour12:false});
            }
            
        },
        methods:{
            selectVX(){
                console.log('vx');
                Toast({
                          message: '微信支付开发中...',
                          iconClass: 'fa fa-times',
                          duration: 2000
                        });
                 this.sheetVisible = false;

            },
            selectZFB(){
                console.log('zfb');
                Toast({
                          message: '支付宝支付开发中...',
                          iconClass: 'fa fa-times',
                          duration: 2000
                        });
                 this.sheetVisible = false;
            },
            commit(){
               
                this.sheetVisible = true;
            },
        }
    }
</script>