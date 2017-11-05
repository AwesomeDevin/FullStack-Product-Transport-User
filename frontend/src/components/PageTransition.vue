<template>
  <div>
  <transition :name="transitionName">
    <router-view class="child-view"></router-view>
  </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        transitionName: 'slide-left'
      }
    },
    beforeRouteUpdate (to, from, next) {
        console.log(this.$route.path,'/home');
        if(this.$route.path!='/home')
        {
            console.log('111');
            this.$router.isBack=true;
        }
      let isBack = this.$router.isBack
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
      next()
    }
  }
</script>

<style scoped>
  .child-view {
  position: absolute;
  width:100%;
  transition: all .3s ease;
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0.6;
    -webkit-transform: translate(80%, 0);
    transform: translate(80%, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0.6;
    -webkit-transform: translate(-80%, 0);
    transform: translate(-80%, 0);
  }
  div {
    width: 100%;
    height: 100%;
  }
</style>