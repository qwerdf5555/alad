<template>
  <div class="log">
    <div>
      <div class="redLine"></div>
      <div class="login">
        <span>设置登录密码</span>
        <router-link to="/login2"><img src="static/img/login/back.png" alt="" class="back"></router-link>
        <router-link to="/person"><img src="static/img/login/off.png" alt="" class="off"></router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "SetCode",

  }
</script>

<style scoped>
  .log{
    width: 100%;
    height: 12.3rem;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
  }
  .log>div{
    width: 6.8rem;
    height: 4.55rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2.83rem;
    margin: auto;
    background-color: #fff;
    border-radius: 0.1rem;
  }
  .redLine{
    height: 0.2rem;
    background-color: #f00;
    border-radius: 0.1rem 0.1rem 0 0/0.1rem 0.1rem 0 0;
  }
  .login{
    height: 0.62rem;
    border-bottom: 1px solid #ccc;
    line-height: 0.62rem;
    font-size: 0.3rem;
    position: relative;
    text-align: center;
  }
  .login span {
    width: 1.2rem;
    height: 0.62rem;
    line-height: .62rem;
  }
  .login img{
    width: .3rem;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .login .back{
    left: .2rem;
  }
  .login .off{
    right: .2rem;
  }
</style>
