<template>
<div class="All">
<div class="head"></div>
<div class="Body">
    <router-view v-if="isRouterAlive"></router-view>              <!-- 路由接受显示    -->

</div>
</div>
</template>

<script>
import AppHead from './components/ApphHead.vue'
export default {
 name: 'App',
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    },



  }
}
//   mounted: function() {
//     if (location.href.indexOf("#reloaded") == -1) {
//         location.href = location.href + "#reloaded";
//         location.reload();
//     }
// }
// this.$router.go(0);
</script>

<style>
.Head::before{
  content:'';
  position: fixed;
  z-index: -1;
  background-size: 100% auto;
  background:linear-gradient(200deg,rgb(243, 235, 252),rgb(251, 249, 255));
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0;
  margin: 0;
}
.All{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  height:100%;
}
.Body{
  width: 100%;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

</style>
