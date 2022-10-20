<template>
<div class="ZuJian">
      <img src="../assets/Title.png" alt="" class="PictureTitle">
<div class="ListGroup">
      <router-link  active-class="active" to="/" exact><a class="IndexTitle" exact>首页</a></router-link>
      <router-link active-class="active" to="/about" exact><a class="AboutTitle" exact>关于我们</a></router-link>   
</div>
</div>
</template>

<script>
export default {
    name:"AppHead",
    props:{
        user: {type: Object, default: null}
    },
    
}
</script>

<style>
.active{
  color: #21163A;
  border-bottom: 2px solid #B68AEA;
  cursor: default;
  padding-bottom: 0.12rem;
    }
.IndexTitle{
  color: #7F798D;
  cursor: default;
  margin-left: 0.5rem;
  font-size: 16.5px;
  text-decoration: none;
  display: inline-block;
  margin: 0;
}
.AboutTitle{
  color: #7F798D;
  cursor: default;
  font-size: 16.5px;
  text-decoration: none;
  display: inline-block;
}
.ZuJian{
  display: flex;
  justify-content: flex-end;
  top: 0px;
  width: 100%;
}
.PictureTitle{
  width: 104px;
  height: 28.58px;
  padding-left: 0.7%;
  position: absolute;
  left: 20px;
  top: 30px;
}
.ListGroup{
  display: flex;
  text-align: right;
  margin: 0px;
  padding-right: 6rem;
  padding-top: 0.2rem;
  width: 10%;
  justify-content: space-around;
  padding-top: 2%;
}
</style>