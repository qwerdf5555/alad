<template>
<div class="account">
  <header>
    <p>账户管理</p>
    <router-link to="/set">
      <img src="static/img/personal/back.png" alt="" class="back">
    </router-link>
  </header>
  <router-link to="personinfo">
    <p class="phone"><img src="static/img/personinfo/phone.png" alt="">手机号： {{phone}}</p>
  </router-link>
</div>
</template>

<script>
    export default {
        name: "Account",
      data(){
          return{
            phone:''
          }

      },
      mounted(){
          if(localStorage.phone){
            this.phone = localStorage.phone;
          }
      }
    }
</script>

<style scoped>
  .account header{
    width: 100%;
    height: 1rem;
    background-color: #f00;
    color: #fff;
    font-size: .4rem;
    text-align: center;
    line-height: 1rem;
    position: fixed;
    top: 0;
  }
  .account header .back{
    position: absolute;
    width: .25rem;
    left: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .phone{
    padding: 0 .2rem;
    margin-top: 1rem;
    font-size: .3rem;
    height: .9rem;
    line-height: .9rem;
    background-color: #fff;
  }
  .phone img{
    width: .25rem;
    vertical-align: middle;
    margin-right: .2rem;
  }
</style>
