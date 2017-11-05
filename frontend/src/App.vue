<template>
  <div id="app">
    <transition  name="custom-classes-transition"  enter-active-class="animated slideInRight" leave-active-class="animated slideOutLeft" >
     	<router-view></router-view> 
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },

}
</script>

<style scoped>
	#app{
    height: 100%;
    width:100%;
  }
  .animated{
    animation-duration: 0.4s;
  }
  #app div{
      position:absolute;
  }
</style>
