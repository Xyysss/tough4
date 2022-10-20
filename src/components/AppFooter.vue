<template>
<div class="Footer">
<div class="FooterMain">
<div class="FooterPart">
<span><a href="" class="FooterText">粤ICP备19046302号</a></span>
<span><a href="" class="FooterText">Email:tfyy@bozhong.com</a></span>
<span><a href="" class="FooterText">隐私政策</a></span>
<span><a href="" class="FooterText">用户协议</a></span>
</div>
<div><a href="" class="FooterGh"><img src="../assets/JingHui.png" alt="" class="FooterJh">粤公网安备 44010502001353号</a></div>
<p class="AddressText">地址:广州市海珠区广州大道南1601-20号广州创投小镇4号楼(播种网)</p>
</div>
</div>
</template>

<script>
export default {
    name:"AppFooter",
    props:{
        user: {type: Object, default: null}
    },
}
</script>

<style>
.Footer{
  width: 100%;
  left: 0;
  width: 100%;
  color: #7F798D;
  bottom: 0;
  top: 87.5%;
  padding: 0.2vw 0 1.4vw;
  font-size: 12px;
  text-align: center;
  transition: 0.5s ease-out all;
  padding-bottom: 0;
}
.FooterMain{
  display: inline-block;
  text-align: left;
  width: 900px;
  padding-left: 1%;
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
}
.AddressText{
  margin: 0;
}
</style>