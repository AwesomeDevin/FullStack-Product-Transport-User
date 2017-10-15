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
                <div class="order-none">
                    <i class="fa fa-file-text-o order-none" aria-hidden="true"></i>
                    <p>没有订单哦 !</p>
                </div>
              </mt-tab-container-item>
              <mt-tab-container-item id="2">
               <div class="order-none">
                    <i class="fa fa-file-text-o order-none" aria-hidden="true"></i>
                    <p>没有订单哦 !</p>
                </div>
              </mt-tab-container-item>
              <mt-tab-container-item id="3">
                <div class="order-none">
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
    export default{
        name:'order',
        data(){
            return{
                selected:'1',
            }
        },
        created(){
           
        },
    }
</script>