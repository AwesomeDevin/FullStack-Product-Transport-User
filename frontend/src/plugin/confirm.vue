<style type="text/css" scoped>
  #player{
    position: fixed;
    width: 100%;
    height: 100%;
    background: black;
    display: none;
  }
  #player.active{
    display: block;
  }
</style>
<template>
  <div id="payer" :class="show?'active':''">123</div>
</template>
<script>
// use bluebird instead
// import $ from 'jquery';
// import { modal } from 'vue-strap';
import eventbus from './eventbus';
export default {
  name: 'vconfirm',
  components: [
    // modal,
  ],
  data() {
    return {
      show: false,
      promise: null,
      title: '',
      text: '',
    };
  },
  methods: {
    open(p) {
      this.title = p.title;
      this.text = p.text;
      // this.promise = $.Deferred();
      // return this.promise;
    },
    ok() {
      // this.promise.resovle(true);
      this.show = false;
      eventbus.$emit('vconfirm-close', true);
    },
    closed() {
      eventbus.$emit('vconfirm-close', false);
    },
    cancel() {
      // this.promise.resovle(false);
      this.show = false;
      // eventbus.$emit('close', false);
    },
  },
  created() {
    eventbus.$on('vconfirm-open', (event) => {
      console.log(123);
      this.open(event);
      this.show = true;
    });
  },
};
</script>