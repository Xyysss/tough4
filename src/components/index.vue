<template>
<div class="All">
<div class="Head"></div>
<div class="HeadClass">
<AppHead ref="AppHead"></AppHead>
</div>
<div class="Body">
<main class="Content">
<div class="PartToughInoculaiton">
<div class="ToughInoculaiton" style="display:inline-block">
      <img src="../assets/toughyy.png" alt="" class="PicTitle">
      <p class="TextToughInoculaiton" data-type="pc">你的孕期管家</p>
      <div class="TextGangBirth"></div>
<div class="Lcon">
      <a href="https://apps.apple.com/cn/app/flo-me-period-tracker-calendar/id1473558062?l=en" target="_blank"><img src="../assets/apple.png" alt="" class="PictureIos"></a>
      <a href="https://play.google.com/store/apps/details?id=com.flomeapp.flome" target="_blank" class="Android"><img src="../assets/google.png" alt="" class="PictureAndroid"></a>
</div>
</div>
<div class="PhotoInoculaiton" style="display:inline-block">
      <img src="../assets/tough-index.png" alt="" class="PicInoculaiton">
</div>
</div>
<div class="PartToughBaby">
<div style="display:inline-block">
<img src="../assets/toughbb.png" alt="" class="PicBaby">
</div>
<div class="ToughBaby"  style="display:inline-block">
      <h2 class="TextContent">看宝宝大小</h2>
      <h2 class="TextGangBaby"></h2>
      <font class="Slider">不错过宝宝的每一次成长</font> 
</div>
</div>

<div class="PartToughHelp">
<div class="ToughHelp"  style="display:inline-block">
      <h2 class="TextContent">产检指南</h2>
      <h2 class="TextGangBaby"></h2>
      <font class="Slider">产检要注意什么？看这里</font> 
</div>
<div style="display:inline-block">
<img src="../assets/tough-help.png" alt="" class="PicHelp">
</div>
</div>
<div class="PartToughBaby">
<div style="display:inline-block">
<img src="../assets/tough-food.png" alt="" class="PicFood">
</div>
<div class="ToughFood"  style="display:inline-block">
      <h2 class="TextContent">饮食助手</h2>
      <h2 class="TextGangBaby"></h2>
      <font class="Slider">能不能吃？一查就知道</font> 
</div>
</div>
</main>
<nav class="nav"></nav>
<aside class="ads"></aside>
</div>
<div class="FooterClass">
<AppFooter ref="appFooter"></AppFooter>
</div>
</div>
</template>

<script>
import AppFooter from './AppFooter.vue'
import AppHead from './ApphHead.vue'
export default {
    // inject:['reload'],
    components:{
      AppFooter,AppHead,
    },
    
}
// this.reload()
</script>

<style>

.Content{
  padding-top: 30px;
}
.PartToughInoculaiton{
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap:wrap;
    justify-content: center;
    padding-bottom: 300px;
    padding-top: 180px;
}
.ToughInoculaiton{
    padding-right: 23%;
}
.PicTitle{ 
  width: 45vh;
  height: 11.3vh;
  min-width: 0;
  padding-bottom: 4%;
  position: relative;
  bottom: 10px;
}
.TextToughInoculaiton{
  line-height: 2;
  font-size: 300%;
  margin: 0;
  padding-bottom: 20px;
}
.PicInoculaiton{
    position: absolute;
    right: 6.5%;
    top: 45%;
    width: 1050px;
    transform: translateY(-50%);
    pointer-events: none;
}
.PictureIos{
  width: 22.7vh;
  height: 7.2vh;
  border-radius: 12px;
}
.PictureAndroid{
  width: 22.7vh;
  height: 7.2vh;
  border-radius: 12px;
}
.Android{
  padding-left: 20px;
}

.TextGangBirth{
  background: #B68AEA;
  border-radius: 8px;
  width: 33px;
  height: 7px;
  margin: 2vw 0 4vw;
}
.TextGangBaby{
  background: #B68AEA;
  border-radius: 8px;
  width: 33px;
  height: 7px;
  margin: 2.5vw 0;
}
.PicBaby{
  width: 500px;
  height: 632px;
  position: relative;
  right: 10%;
  bottom: 18px;
}
.PartToughBaby{
  flex-wrap: wrap-reverse;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 400px;
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
.PartToughHelp{
  display: flex;
  align-items: center;
  flex-wrap:wrap;
  justify-content: center;
  padding-bottom: 400px;
}
.PicHelp{
  width:500px;
  height: 559px;
  position: relative;
  right: 6%;
  bottom: 10px;
}
.ToughHelp{
  padding-right: 15%;
  margin-bottom: 30px;
  padding-left: 75px;
  position: relative;
  left: 1%;
  bottom: 10px;
}
.PicFood{
  width: 500px;
  height: 559px;
  padding-top: 0.3rem;
  position:relative;
  right: 33%;
}
.Content{
  flex: 1;
}
.nav, .ads{
  flex: 0 0 15%;
}
.nav{
  order: -1;
}
.Slider{
  color: #7F798D;
  font-size:20px;
}
/* .Footer{
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
} */
/* .FooterMain{
  display: inline-block;
  text-align: left;
  width: 900px;
}
.FooterPart{
  display: flex;
  justify-content: space-between;
}
.FooterText{
  padding: 1.2vw 0 0.8vw;
  display: inline-block;
  margin-right: 30px;
  color: #7F798D;
  text-decoration: none;
}
.FooterJh{
  vertical-align: middle
}
.FooterGh{
  color: #7F798D;
  text-decoration: none;
} */
.FooterClass{
  position: fixed;
  top: 89%;
  text-align: center;
}
.AddressText{
  margin: 0;
}
.HeadClass{
  position: fixed;
  width: 100%;
}

/* //躯干三栏变成自动叠加 */
@media (max-width: 768px) {
  .Body {
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