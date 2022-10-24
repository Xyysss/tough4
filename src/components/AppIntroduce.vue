<template>
  <div class="ToughText">
    
        <div class="ToughTitle">什么是她抚孕育</div>
        <div class="TextGangFirst"></div>
        <p class="TextFirst">她抚孕育是年轻妈妈的孕期管家，由播种网于2022年在广州创立。她抚孕育以“快乐孕育、科学孕育”为目标，为广大女性用户提供全面的知识科普、孕期管理等服务。
           她抚孕育，美好孕期的一种新方式。</p>
</div>
</template>

<script>
export default {
    name:'AppText',
    props:{

    }
}
</script>

<style>
.ToughText{
  margin: 0;
  /* display: flex; */
  width: 100%;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 40px;
}
.ToughTitle{
  text-align: center;
  padding-top: 20px;
  font-size: 18px;
  width: 17.7rem;
  margin: 0 auto;
  color: #21163A;
  position: relative
}
.TextGangFirst{
  background: linear-gradient(180deg, #5C42FF 0%, #9A5DF9 100%);
  width: 0.3rem;
  height: 0.05rem;
  position: relative;
  left: 49%;
  margin-top: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
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
</style>