<template>
<div class="all">
<div class="head">
<header class="header">
<div class="zujian">
      <h2></h2>
      <img src="./assets/1.png" alt="" class="picture1">
<div class="list-group">
      <router-link class="list-group-item" active-class="active" to="/indexA">首页</router-link>
      &nbsp;&nbsp;&nbsp;
       <router-link class="list-group-item" active-class="active" to="/aboutA">关于我们</router-link>   
</div>
</div>
</header>
</div>
<div class="body">
  <router-view></router-view>
   
</div>
<br>
<br>
<div class="footer">
<div>
<span><a href="">粤ICP备19046302号</a></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span><a href="">Email@:835304264@qq.com</a></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span><a href="">隐私政策</a></span>
<div><img src="./assets/JH.png" alt=""><a href="">粤公网安备44010502001353号</a></div>
<div><p>build 4,Guangzhou Venture Capital, No. 1601-20,Guangzhou Avenue,Haizhu District,Guangzhou,P.R.C</p></div>
</div>
</div>
</div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
.head::before{
  content:'';
  position: fixed;
  z-index: -1;
  background-size: 100% auto;
  background:linear-gradient(1000deg,rgb(235, 218, 253),#ffffff);
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
}
.header, .footer{
  top: 0;
  flex: 1;
}

.zujian{
  display: flex;
  justify-content: flex-end;
}
.picture1{
  width: 150px;
  height: 40px;
  position: absolute;
  top: 0px;
  left: 0px;
}
.list-group{
  text-align: right;
  margin: 0px;
  padding-right: 15%;
}
.container{
  min-width: 1200px;
  max-width: 2048px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
  display: flex;
}
.footer{
  display: flex;
  justify-content: center;
  align-items: flex-end;

}
</style>
