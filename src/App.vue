<template>
<div class="all">
<div class="body">
  <router-view></router-view>
   
</div>
</div>
</template>

<script>
export default {
 name: 'App',
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
.head::before{
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

.all{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  height:100%;
}
.body{
  width: 100%;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.picture-title{
  width: 150px;
  height: 40px;
  position: absolute;
  left: 20px;
  top: 30px;
  width: 170px;
}
.container{
  min-width: 1200px;
  max-width: 2048px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
  display: flex;
}

</style>
