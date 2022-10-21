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
      <img src="../assets/ToughYy.png" alt="" class="PicTitle">
      <p class="TextToughInoculaiton" data-type="pc">你的孕期管家</p>
      <div class="TextGangBirth"></div>
<div class="Lcon">
      <a href="https://apps.apple.com/cn/app/flo-me-period-tracker-calendar/id1473558062?l=en" target="_blank"><img src="../assets/Apple.png" alt="" class="PictureIos"></a>
      <a href="https://play.google.com/store/apps/details?id=com.flomeapp.flome" target="_blank" class="Android"><img src="../assets/Google.png" alt="" class="PictureAndroid"></a>
</div>
</div>
<div class="PhotoInoculaiton" style="display:inline-block">
      <img src="../assets/ToughIndex.png" alt="" class="PicInoculaiton">
</div>
</div>

<div class="PartToughBaby">

<AppMainContent ref="appmaincontent" title="看宝宝大小" content="不错过宝宝每一次成长" imageSrc="../assets/ToughBaby.png"></AppMainContent>
</div>

<div class="PartToughHelp">
<AppMainContent ref="appmaincontent" title="产检指南" content="产检要注意什么？看这里"></AppMainContent>
<div style="display:inline-block">
<img src="../assets/ToughHelp.png" alt="" class="PicHelp">
</div>
</div>

<div class="PartToughBaby">
<img src="../assets/ToughFood.png" alt="" class="PicFood">
<AppMainContent ref="appmaincontent" title="饮食助手" content="能不能吃？一查就知道"></AppMainContent>
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
import AppMainContent from './AppMainContent.vue'
export default {
    // inject:['reload'],
    components:{
      AppFooter,
      AppHead,
      AppMainContent
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
    justify-content: center;
    padding-bottom: 8rem;
    padding-top: 2.5rem;
}
.ToughInoculaiton{
    padding-right: 23%;
}
.PicTitle{ 
  width: 5rem;
  min-width: 0;
  padding-bottom: 2.4%;
  position: relative;
  bottom: 5%;
}
.TextToughInoculaiton{
  line-height: 2;
  font-size: 0.5rem;
  margin: 0;
  padding-bottom: 5%;
}
.PicInoculaiton{
    position: absolute;
    right: 6.4%;
    /* top: 6rem%; */
    width: 13rem;
    transform: translateY(-50%);
    pointer-events: none;
}
.PictureIos{
  width: 2.7rem;
  height: 0.88rem;
  border-radius: 15px;
}
.PictureAndroid{
  width: 2.7rem;
  height: 0.88rem;
  border-radius: 15px;
}
.Android{
  padding-left: 20px;
}

.TextGangBirth{
  background: #B68AEA;
  border-radius: 8px;
  width: 0.4rem;
  height: 0.1rem;
  margin: 2vw 0 4vw;
}
.PartToughBaby{
  flex-wrap: wrap-reverse;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5rem;
}
.PicBaby{
  width: 6rem;
  position: relative;
  right: 10%;
  bottom: 18px;
}
.PartToughHelp{
  display: flex;
  align-items: center;
  flex-wrap:wrap;
  justify-content: center;
  padding-bottom: 5rem;
}
.PicHelp{
  width: 6rem;
  height: 50%;
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
  width: 6rem;
  height: 50%;
  padding-top: 0.3rem;
  position:relative;
  right: 6%;
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
  font-size:0.4rem;
}
.FooterClass{
  position: fixed;
  top: 87.5%;
  text-align: center;
  width: 100%;
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