<template>
<div>
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
<div class="img">
<img src="../assets/longpicture.jpg" data-type="pc" class="longpicture">
</div>
<div class="about">
<div class="about-tough">
<main class="content">
<div class="toughtext">
        <div class="tough-title">什么是她抚孕育</div>
        <div class="text-gang"></div>
        <p class="text-first">她抚孕育是年轻妈妈的孕期管家，由播种网于2022年在广州创立。她抚孕育以“快乐孕育、科学孕育”为目标，为广大女性用户提供全面的知识科普、孕期管理等服务。
           她抚孕育，美好孕期的一种新方式。</p>
</div>
<div class="content-picture">
<div class="tough-company">公司环境</div>
<div class="text-gang-company"></div>
<div class="company">
<div style="display:inline-block" class="tough-left"><img src="../assets/company-hall.png" alt=""  class="company-hall"></div>
<div style="display:inline-block" class="tough-right">
<div class="tough-office"><img src="../assets/office.png" alt="" class="office"></div>
<div class="tough-meditation"><img src="../assets/meditation.png" alt="" class="meditation"></div>
</div>
</div>
<div class="map">
  <a href="https://map.baidu.com/search/%E5%B9%BF%E5%B7%9E%E5%B8%82%E6%B5%B7%E7%8F%A0%E5%8C%BA%E5%B9%BF%E5%B7%9E%E5%A4%A7%E9%81%93%E5%8D%971601-20%E5%8F%B7%E5%B9%BF%E5%B7%9E%E5%88%9B%E6%8A%95%E5%B0%8F%E9%95%874%E5%8F%B7%E6%A5%BC(%E6%92%AD%E7%A7%8D%E7%BD%91)/@12615021.586347306,2624840.9015206737,19z?querytype=s&da_src=shareurl&wd=%E5%B9%BF%E5%B7%9E%E5%B8%82%E6%B5%B7%E7%8F%A0%E5%8C%BA%E5%B9%BF%E5%B7%9E%E5%A4%A7%E9%81%93%E5%8D%971601-20%E5%8F%B7%E5%B9%BF%E5%B7%9E%E5%88%9B%E6%8A%95%E5%B0%8F%E9%95%874%E5%8F%B7%E6%A5%BC(%E6%92%AD%E7%A7%8D%E7%BD%91)&c=257&src=0&pn=0&sug=0&l=13&b=(12587411,2613501;12648787,2641693)&from=webmap&biz_forward=%7B%22scaler%22:1,%22styles%22:%22pl%22%7D&device_ratio=1"  target="_blank" >
<img src="../assets/map.png" alt="" class="mappng">
  </a>
</div>
</div>
<div class="toughtext">
        <h2 class="tough-title">她扶孕育关心每一位用户与合作伙伴</h2>
        <h2 class="tough-title">-</h2>
        <p class="text-tough">如果你在她扶孕育的使用中遇到难以解决的问题，或者任何对平台发展有益的意见及建议，欢迎你直接写信到产品经理的邮箱：“tfyy@bozhong.com”</p>
</div>
</main>
<nav class="nav"></nav>
<aside class="ads"></aside>
</div>
</div>
<div class="footer">
<div>
<span><a href="">粤ICP备19046302号</a></span>
<span><a href="" class="footer-text">Email@:835304264@qq.com</a></span>
<span><a href="">隐私政策</a></span>
<div><img src="../assets/JH.png" alt=""><a href="">粤公网安备44010502001353号</a></div>
<div><p>build 4,Guangzhou Venture Capital, No. 1601-20,Guangzhou Avenue,Haizhu District,Guangzhou,P.R.C</p></div>
</div>
</div>
</div>
</template>



<script>
export default {
    name:'aboutA'
}
</script>

<style>
.picture-title{
  width: 108px;
  height: 28.58px;
  padding-left: 0.7%;
}
.about{
  display: flex;
  margin: 0;
}
.about-tough{
  display: flex;
  flex: 1;
  justify-content: center; 
}
.content{
  flex: 1;
  justify-content: center;
  align-items: center;
}
.content-picture{
  padding-top: 40px;
  padding-bottom: 70px;
}
.text-first{
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    color: #7F798D;
    font-size: 0.226rem;
    text-align: left;
    line-height: 2;
}
.nav, .ads{
  flex: 0 0 19%;
}
.nav{
  order: -1;
}
.img{
  padding-top: 17.98px;
}
.longpicture{
    max-width: 100%;
    width: 100%;
}
.text-tough{
  display: flex;
  margin: 0;
  font-size: 150%;
  flex-wrap: wrap;
  padding-bottom: 15px;
}
.tough-title{
  text-align: center;
  padding-top: 20px;
  font-size: 18px;
  width: 900px;
  margin: 0 auto;
  font-size: 0.31rem;
  color: #21163A;
  position: relative
}
.tough-company{
  text-align: left;
  padding-top: 20px;
  font-size: 18px;
  width: 900px;
  margin: 0 auto;
  font-size: 0.31rem;
  color: #21163A;
  position: relative
}
.company{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.company-hall{
  display: flex;
  height: 100%;
  border-radius: 5px;
  max-width: 100%;
  width: 65%;
}
.office{
  display: flex;
  width: 30%;
  height: 100%;
  max-width: 100%;
  border-radius: 5px;
  padding-bottom: 5%;
}
.meditation{
  display: flex;
  width: 30%;
  height: 100%;
  max-width: 100%;
  border-radius: 5px;
}
.tough-left{

}
.tough-right{

}
.tough-office{
  display: flex;
  width: 100%;
  height: 35%;
  padding-bottom: 3%;
}
.tough-meditation{
  display: flex;
  width: 100%;
  height: 35%;
}

.map{
  display: flex;
  width: 80%;
  height: 20%;
}
.mappng{
  height: 100%;
  width: 115%;
}
.toughtext{
  margin: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 40px;
}
.header, .footer{
  top: 0;
  flex: 1;
}
.zujian{
  display: flex;
  justify-content: flex-end;
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
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 200px;
}
.footer-text{
  padding-left: 10%;
  padding-right: 15%;
}
.current{
  color: #7F798D;
  cursor: default;
  margin-left: 0.5rem;
  font-size: 16.5px;
  text-decoration: none;
  display: inline-block;
}
.current-about{
  color: #21163A;
  border-bottom: 2px solid #B68AEA;
  cursor: default;
  margin-left: 0.5rem;
  font-size: 16.5px;
  text-decoration: none;
  display: inline-block;
  padding-bottom: 0.1rem;
}
.text-gang{
  background: linear-gradient(180deg, #5C42FF 0%, #9A5DF9 100%);
  width: 20px;
  height: 4px;
  position: relative;
  left: 49%;
  margin-top: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
}
.text-gang-company{
  background: linear-gradient(180deg, #5C42FF 0%, #9A5DF9 100%);
  width: 20px;
  height: 4px;
  position: relative;
  margin-top: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
}
</style>



