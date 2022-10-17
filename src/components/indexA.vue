<template>
<div class="all">

<div class="head">
<header class="header">
<div class="zujian">
      <h2></h2>
      <img src="../assets/title.png" alt="" class="picture-title">
<div class="list-group">
      <router-link class="list-group-item" active-class="active" to="/indexA"><a class="current">首页</a></router-link>
      <router-link class="list-group-about" active-class="active" to="/aboutA"><a class="current-about">关于我们</a></router-link>   
</div>
</div>
</header>
</div>

<div class="body">
<main class="content">
<div class="part-toughyy">
<div class="toughyy" style="display:inline-block">
      <img src="../assets/toughyy.png" alt="" class="pic-title">
      <p class="text-toughyy" data-type="pc">你的孕期管家</p>
      <div class="text-gang"></div>
<div class="lcon">
      <a href="https://apps.apple.com/cn/app/flo-me-period-tracker-calendar/id1473558062?l=en" target="_blank"><img src="../assets/apple.png" alt="" class="picture-ios"></a>
      <a href="https://play.google.com/store/apps/details?id=com.flomeapp.flome" target="_blank" class="android"><img src="../assets/google.png" alt="" class="picture-android"></a>
</div>
</div>
<div class="photoyy" style="display:inline-block">
      <img src="../assets/tough-index.png" alt="" class="picyy">
</div>
</div>
<div class="part-toughbb">
<div style="display:inline-block">
<img src="../assets/toughbb.png" alt="" class="picbb">
</div>
<div class="toughbb"  style="display:inline-block">
      <h2 class="text-content">看宝宝大小</h2>
      <h2 class="text-gang-bb"></h2>
      <font class="slider">不错过宝宝的每一次成长</font> 
</div>
</div>

<div class="part-toughhelp">
<div class="toughhelp"  style="display:inline-block">
      <h2 class="text-content">产检指南</h2>
      <h2 class="text-gang-bb"></h2>
      <font class="slider">产检要注意什么？看这里</font> 
</div>
<div style="display:inline-block">
<img src="../assets/tough-help.png" alt="" class="pic-help">
</div>
</div>
<div class="part-toughbb">
<div style="display:inline-block">
<img src="../assets/tough-food.png" alt="" class="picys">
</div>
<div class="toughys"  style="display:inline-block">
      <h2 class="text-content">饮食助手</h2>
      <h2 class="text-gang-bb"></h2>
      <font class="slider">能不能吃？一查就知道</font> 
</div>
</div>
</main>
<nav class="nav"></nav>
<aside class="ads"></aside>
</div>

<div class="footer">
<div class="footer-main">
<div class="footer-part">
<span><a href="" class="footer-text">粤ICP备19046302号</a></span>
<span><a href="" class="footer-text">Email@:tfyy@bozhong.com</a></span>
<span><a href="" class="footer-text">隐私政策</a></span>
<span><a href="" class="footer-text">用户协议</a></span>
</div>
<div><a href="" class="footer-gh"><img src="../assets/JH.png" alt="" class="footer-jh">粤公网安备44010502001353号</a></div>
<p class="address">地址：广州市海珠区广州大道南1601-20号广州创投小镇4号楼(播种网)</p>
</div>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style>

.content{
  padding-top: 30px;
}
.part-toughyy{
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap:wrap;
    justify-content: center;
    padding-bottom: 300px;
    padding-top: 60px;
    /* flex-shrink: 0;
    width: 100%;
    position: relative;
    background-repeat: no-repeat;
    background-position: left top;
    background-size: 100% auto; */
}
.toughyy{
  padding-left: 8%;
}
.pic-title{ 
  width: 43.2vh;
  height: 9.3vh;
  min-width: 0;
  font-size: 50%;
  padding-bottom: 4%;
  position: relative;
  bottom: 10px;
}
.current{
  color: #21163A;
  border-bottom: 2px solid #B68AEA;
  cursor: default;
  margin-left: 0.5rem;
  font-size: 16.5px;
  text-decoration: none;
  display: inline-block;
  padding-bottom: 0.1rem;
}
.current-about{
  color: #7F798D;
  cursor: default;
  margin-left: 0.5rem;
  font-size: 16.5px;
  text-decoration: none;
  display: inline-block;
}
.text-toughyy{
  line-height: 2;
  font-size: 300%;
  margin: 0;
  padding-bottom: 20px;
}
.picyy{
  width: 65vh;
  height: 65vh;
}
.picture-ios{
  width: 22.7vh;
  height: 7.2vh;
  border-radius: 12px;
}
.picture-android{
  width: 22.7vh;
  height: 7.2vh;
  border-radius: 12px;
}
.android{
  padding-left: 20px;
}
.picture-title{
  width: 108px;
  height: 28.58px;
  padding-left: 1%;
}
.text-gang{
  background: #B68AEA;
  border-radius: 8px;
  width: 33px;
  height: 7px;
  margin: 2vw 0 4vw;
}
.text-gang-bb{
  background: #B68AEA;
  border-radius: 8px;
  width: 33px;
  height: 7px;
  margin: 2.5vw 0;
}
.picbb{
  width: 500px;
  height: 632px;
  position: relative;
  right: 10%;
  bottom: 18px;
}
.part-toughbb{
  flex-wrap: wrap-reverse;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 400px;
}
.toughbb{
  padding-left: 8%;
  flex-wrap: wrap-reverse;
  position: relative;
  right: 3%;
  bottom: 25px;
}
.text-content{
  font-size: 380%;
  margin: 0;
  flex-wrap: wrap-reverse;
}
.part-toughhelp{
  display: flex;
  align-items: center;
  flex-wrap:wrap;
  justify-content: center;
  padding-bottom: 400px;
}
.pic-help{
  width:500px;
  height: 559px;
  position: relative;
  right: 6%;
  bottom: 10px;
}
.toughhelp{
  padding-right: 15%;
  margin-bottom: 30px;
  padding-left: 75px;
  position: relative;
  left: 1%;
  bottom: 10px;
}
.toughys{

}
.picys{
  width: 500px;
  height: 559px;
  padding-top: 0.3rem;
  position:relative;
  right: 33%;
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
.header, .footer{
  top: 0;
  flex: 1;
}
.zujian{
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0px;
  width: 100%;
}
.list-group{
  text-align: right;
  margin: 0px;
  padding-right: 25%;
  padding-top: 30px;
}
.list-group-item{
  padding-right: 10px;
}
.footer{
  position:fixed;
  left: 0;
  width: 100%;
  color: #7F798D;
  bottom: 0;
  top: 89%;
  padding: 0.2vw 0 1.4vw;
  font-size: 12px;
  text-align: center;
  transition: 0.5s ease-out all;
}
.footer-main{
  display: inline-block;
  text-align: left;
  width: 900px;
}
.footer-part{
  display: flex;
  justify-content: space-between;
}
.footer-text{
  padding: 1.2vw 0 0.8vw;
  display: inline-block;
  margin-right: 30px;
  color: #7F798D;
  text-decoration: none;
}
.footer-jh{
  vertical-align: middle
}
.footer-gh{
  color: #7F798D;
  text-decoration: none;
}
.address{
  margin: 0;
}
.slider{
  color: #7F798D;
  font-size:20px;
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