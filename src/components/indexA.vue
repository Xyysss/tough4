<template>

<div>
<br>
<br>
<main class="content">
<div class="part1">
<div class="t1" style="display:inline-block">
      <img src="../assets/2.png" alt="" class="pic1">
      <br>
      <h2 class="text1">我的孕期管家</h2>
      <br>
      <h2 class="text1">-</h2>
      <br>
<div class="lcon">
      <a href="https://play.google.com/store/apps/details?id=com.flomeapp.flome" target="_blank"><img src="../assets/4.png" alt="" class="picture2"></a>
      &nbsp;
      <a href="https://apps.apple.com/cn/app/flo-me-period-tracker-calendar/id1473558062?l=en" target="_blank"><img src="../assets/5.png" alt="" class="picture2"></a>
</div>
</div>
<div class="photo1" style="display:inline-block">
      <img src="../assets/3.png" alt="" class="pic2">
</div>
</div>
      <br>
      <br>
      <br>
      <br>
      <br>
<div class="part2">
<div class="photo2" style="display:inline-block">
<img src="../assets/6.png" alt="" class="pic3">
</div>
<div class="t2"  style="display:inline-block">
      <br>
      <h2 class="text2">看宝宝大小</h2>
      <br>
      <h2 class="text2">-</h2>
      <br>
      <font color="silver" size=3>不错过宝宝的每一次成长</font> 
</div>
</div>
      <br>
      <br>
      <br>
      <br>
      <br>
<div class="part3">
<div class="t3"  style="display:inline-block">
      <br>
      <h2 class="text3">产检指南</h2>
      <br>
      <h2 class="text3">-</h2>
      <br>
      <font color="silver" size=3>产检要注意什么？看这里</font> 
</div>
<div class="photo3" style="display:inline-block">
<img src="../assets/7.png" alt="" class="pic4">
</div>
</div>
      <br>
      <br>
      <br>
      <br>
      <br>
<div class="part2">
<div class="photo2" style="display:inline-block">
<img src="../assets/8.png" alt="" class="pic3">
</div>
<div class="t2"  style="display:inline-block">
      <br>
      <h2 class="text2">饮食助手</h2>
      <br>
      <h2 class="text2">-</h2>
      <br>
      <font color="silver" size=3>能不能吃？一查就知道</font> 
</div>
</div>
</main>
<nav class="nav"></nav>
<aside class="ads"></aside>
      <br>
      <br>

</div>
</template>

<script>
export default {
    name:'indexA'
    
}
</script>

<style>
.part1{
    display: flex;
    align-items: center;
    flex-wrap:wrap;
    justify-content: center;
}
.t1{
    padding-right: 10%;
    padding-left: 3%;

}
.pic1{ 
  width: 40vh;
  height: 12vh;
  min-width: 0;
  font-size: 50%;
  padding-left: 6%;
}
.text1{
  font-size: 300%;
  margin: 0;
  padding-left: 15%;
}
.picture2{
  width: 14vh;
  height: 6vh;
}
.lcon{
  padding-left: 15%;
}
.pic3{
  width: 330px;
  height: 480px;
}
.part2{
  flex-wrap: wrap-reverse;
  display: flex;
  align-items: center;
  justify-content: center;
}
.t2{
  padding-left: 10%;
  flex-wrap: wrap-reverse;
}
.text2{
  font-size: 300%;
  margin: 0;
  flex-wrap: wrap-reverse;
}
.part3{
    display: flex;
    align-items: center;
    flex-wrap:wrap;
    justify-content: center;
}
.text3{
  font-size: 300%;
  margin: 0;

}
.pic4{
  width: 330px;
  height: 480px;
}
.t3{
  padding-left: 10%;
  padding-right: 10%;
}
.content{
  flex: 1;
}
.nav, .ads{
  flex: 0 0 15%;
}
.nav{
  order: -1;
}
/* //躯干三栏变成自动叠加 */
@media (max-width: 768px) {
  .body {
    flex-direction: column;
    flex: 1;
  }
  .nav,
  .ads,
  .content {
    flex: auto;
  }
}
</style>