<template>
<div class="ToughBaby"  style="display:inline-block">
<div style="display:inline-block">
  <img :src="image" alt="" class="PicFood"/>
</div>
<div class="BabyText" style="display:inline-block">
      <h2 class="TextContent">{{title}}</h2>
      <h2 class="TextGangBaby"></h2>
      <font class="Slider">{{content}}</font> 
</div>
</div>
</template>

<script>
export default {
      name:'appmaincontent',
      data(){
        return{
        }
      },
      props:{
        image:{
          type: String,
          default:''
        },
        title:{
           type: String,
        },
        content:{
           type: String,
        }
      }
}
</script>

<style>

.ToughBaby{
  padding-left: 8%;
  flex-wrap: wrap-reverse;
  position: relative;
  right: 3%;
  bottom: 25px;
  display: flex;
}
.TextContent{
  font-size: 0.5rem;
  margin: 0;
  flex-wrap: wrap-reverse;
}
.Slider{
  color: #7F798D;
  font-size:0.2rem;
}
.TextGangBaby{
  background: #B68AEA;
  border-radius: 8px;
  width: 0.4rem;
  height: 0.08rem;
  margin: 2.5vw 0;
}
.BabyText{
    position: relative;
    top: -2rem;
}
</style>