<template>
<div class="ToughBaby"  style="display:inline-block">
<div style="display:inline-block">
  <img :src=imageSrc alt="" class="PicFood">
</div>
      <h2 class="TextContent">{{title}}</h2>
      <h2 class="TextGangBaby"></h2>
      <font class="Slider">{{content}}</font> 
</div>
</template>

<script>
export default {
      name:'appmaincontent',
      data(){
        return {
          imageSrc:{

          }
        }
      },
      props:['title','content','imageSrc']
}
</script>

<style>

.ToughBaby{
  padding-left: 8%;
  flex-wrap: wrap-reverse;
  position: relative;
  right: 3%;
  bottom: 25px;
}
.TextContent{
  font-size: 0.9rem;
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
  width: 0.6rem;
  height: 0.14rem;
  margin: 2.5vw 0;
}
</style>