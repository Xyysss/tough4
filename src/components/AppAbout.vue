<template>
<div class="AllAbout">
<div class="Head"></div>
<div class="HeadClassAbout">
    <!-- 头部导航栏 -->
<AppHead ref="AppHead"></AppHead>
</div>
<div class="Img">
<img src="../assets/LongPicture.jpg" data-type="pc" class="LongPicture">
</div>
<div class="About">
<div class="AboutTough">
<main class="Content">
      <!-- 公司介绍 -->
<AppIntroduce ref="AppText"></AppIntroduce>
      <!-- 公司环境图片 -->
<div class="ContentPicture">
<div class="ToughCompany">公司环境</div>
<div class="TextGangCompany"></div>
<div class="Company">
<img src="../assets/CompanyHall.png" alt=""  class="CompanyHall">
<div class="Right">
<img src="../assets/Office.png" alt="" class="Office">
<img src="../assets/Meditation.png" alt="" class="Meditation">
</div>
</div>
      <!-- 地址 -->
<div class="Map">
  <span class="Address">我们在这里：<a target="_blank" href="https://map.baidu.com/search/%E5%B9%BF%E5%B7%9E%E5%B8%82%E6%B5%B7%E7%8F%A0%E5%8C%BA%E5%B9%BF%E5%B7%9E%E5%A4%A7%E9%81%93%E5%8D%971601-20%E5%8F%B7%E5%B9%BF%E5%B7%9E%E5%88%9B%E6%8A%95%E5%B0%8F%E9%95%874%E5%8F%B7%E6%A5%BC(%E6%92%AD%E7%A7%8D%E7%BD%91)/@12615021.586347306,2624840.9015206737,19z?querytype=s&da_src=shareurl&wd=%E5%B9%BF%E5%B7%9E%E5%B8%82%E6%B5%B7%E7%8F%A0%E5%8C%BA%E5%B9%BF%E5%B7%9E%E5%A4%A7%E9%81%93%E5%8D%971601-20%E5%8F%B7%E5%B9%BF%E5%B7%9E%E5%88%9B%E6%8A%95%E5%B0%8F%E9%95%874%E5%8F%B7%E6%A5%BC(%E6%92%AD%E7%A7%8D%E7%BD%91)&c=257&src=0&pn=0&sug=0&l=13&b=(12587411,2613501;12648787,2641693)&from=webmap&biz_forward=%7B%22scaler%22:1,%22styles%22:%22pl%22%7D&device_ratio=1" class="TextMap">广州市海珠区广州大道南1601-20号广州创投小镇4号楼(播种网)</a></span>
</div>
</div>
      <!-- 建议渠道 -->
<div class="ToughText">
        <div class="ToughTitle">她扶孕育关心每一位用户与合作伙伴</div>
        <div class="TextGang"></div>
        <p class="TextTough">如果你在她扶孕育的使用中遇到难以解决的问题，或者任何对平台发展有益的意见及建议，欢迎你直接写信到产品经理的邮箱：“<a href="mailto:tfyy@bozhong.com" class="Email">tfyy@bozhong.com</a>”</p>
</div>
</main>
<nav class="Nav"></nav>
<aside class="Ads"></aside>
</div>
</div>
      <!-- 底部 -->
<div class="FooterClassAbout">
<AppFooter ref="AppFooter" class="FooterClassAbout"></AppFooter>
</div>
</div>
</template>



<script>
import AppFooter from './AppFooter.vue'
import AppHead from './ApphHead.vue'
import AppIntroduce from './AppIntroduce.vue'

export default {
    components:{
      AppFooter,AppHead,AppIntroduce    //注册
    },
}

</script>

<style>
.AllAbout{
  padding-top: 70px;
}
.About{
  display: flex;
  margin: 0;
}
.AboutTough{
  display: flex;
  flex: 1;
  justify-content: center; 
}
.Content{
  flex: 1;
  justify-content: center;
  align-items: center;
}
.ContentPicture{
  padding-top: 40px;
  padding-bottom: 70px;
}
.TextFirst{
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    color: #7F798D;
    font-size: 0.17rem;
    text-align: left;
    line-height: 2;
}
.Ads{
  flex: 0 0 30%;
}
.Nav{
  order: -1;
  flex: 0 0 30%;
}
.Img{
  padding-top: 17.98px;
}
.LongPicture{
    max-width: 100%;
    width: auto;
    width:100%;
}
.TextTough{
  margin: 0;
  flex-wrap: wrap;
  padding-bottom: 15px;
  color: #7F798D;
  font-size: 0.17rem;
  text-align: center;
  line-height: 2;
  width: 100%;
}
.ToughCompany{
  text-align: left;
  padding-top: 20px;
  font-size: 0.2rem;
  width: 10rem;
  font-size: 0.31rem;
  color: #21163A;
  position: relative
}
.Company{
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-size: 18px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.CompanyHall{
    font-size: 18px;
    max-width: 100%;
    width: 11.5rem;
    margin-right: 1.7%;
    border-radius: 5px;
    border-top-right-radius: 10px;
}
.Office{
    font-size: 18px;
    max-width: 100%;
    border-radius: 5px;
}
.Meditation{
    font-size: 18px;
    max-width: 100%;
    margin-top: 5%;
    vertical-align: bottom;
    border-radius: 5px;
}
.Right{
    font-size: 18px;
    flex: 1;
}
.ToughOffice{
  display: flex;
  width: 100%;
  height: 35%;
  padding-bottom: 3%;
}
.ToughMeditation{
  display: flex;
  width: 100%;
  height: 35%;
}
.Map{
    margin-top: 0.2rem;
    background: #fcfcfc;
    box-shadow: 0px 24px 102px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    padding: 0.2rem;
    text-align: center;
    font-size: 0.2rem;
}
.Mappng{
  height: 100%;
  width: 115%;
  border-radius: 10px;
}
.ListGroupItem{
  padding-right: 10px;
}
.TextGang{
  background: linear-gradient(180deg, #5C42FF 0%, #9A5DF9 100%);
  width: 20px;
  height: 4px;
  position: relative;
  left: 49%;
  margin-top: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
}
.TextGangCompany{
  background: linear-gradient(180deg, #5C42FF 0%, #9A5DF9 100%);
  width: 0.3rem;
  height: 0.05rem;
  position: relative;
  margin-top: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
}
.Address{
  display: inline-block;
  background: url(../assets/Location.png) left center no-repeat;
  padding-left: 20px;
}
.TextMap{
  color: #7F798D;
  text-decoration: none;
}
.Email{
  color: #7F798D;
}
.AddressText{
  margin: 0;
  display: inline-block;
}
.FooterClassAbout{
  position: static;
  width: 100%;
}
.HeadClassAbout{
  position: static;
  width: 100%;
  padding: 0;
}
</style>



