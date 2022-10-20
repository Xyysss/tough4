<template>
<div style="display:inline-block">
<img src="../assets/ToughBaby.png" alt="" class="PicBaby">
</div>
<div class="ToughBaby"  style="display:inline-block">
      <h2 class="TextContent">看宝宝大小</h2>
      <h2 class="TextGangBaby"></h2>
      <font class="Slider">不错过宝宝的每一次成长</font> 
</div>
</template>

<script>
export default {
      name:'appmaincontent'
}
</script>

<style>
.PicBaby{
  width: 500px;
  height: 632px;
  position: relative;
  right: 10%;
  bottom: 18px;
}
.ToughBaby{
  padding-left: 8%;
  flex-wrap: wrap-reverse;
  position: relative;
  right: 3%;
  bottom: 25px;
}
.TextContent{
  font-size: 380%;
  margin: 0;
  flex-wrap: wrap-reverse;
}
.Slider{
  color: #7F798D;
  font-size:20px;
}
.TextGangBaby{
  background: #B68AEA;
  border-radius: 8px;
  width: 33px;
  height: 7px;
  margin: 2.5vw 0;
}
</style>