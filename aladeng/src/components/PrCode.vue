<template>
<div class="prcode">
  <header>
    <p>我的二维码</p>
    <router-link to="/personinfo">
      <img src="static/img/personal/back.png" alt="" class="back">
    </router-link>
    <router-link to="/prcode1">
      <img src="static/img/personinfo/more.png" alt="" class="more">
    </router-link>
  </header>
  <div class="code">
    <p><span class="head"><img src="" alt="" v-show="false"></span><span class="name">{{name}}</span></p>
    <p><img :src="src" alt=""></p>
    <p>扫一扫上面二维码图案，邀请好友注册吧</p>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
    export default {
        name: "PrCode",
      data(){
          return{
            name:'空空空',
            src:'static/img/personinfo/code.png'
          }
      }
    }
</script>

<style scoped>
  .prcode header{
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
  .prcode header .back{
    position: absolute;
    width: .25rem;
    left: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .prcode header .more{
    position: absolute;
    width: .4rem;
    right: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .code{
    padding: .2rem;
    margin-top: 1.7rem;
    color: #666666;
  }

  .code .head{
   float: left;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #e38e8e;
  }
  .code .name{
    float: left;
    font-size: .4rem;
    height: 1rem;
    line-height: 1rem;
    vertical-align: middle;
    margin-left: .2rem;
  }
  .code p:nth-of-type(1){
    overflow: hidden;
  }
  .code p:nth-of-type(2){
    height: 2.8rem;
    margin: .6rem 0;
    text-align: center;
  }
  .code p:nth-of-type(2) img{
    height: 100%;
  }
  .code p:nth-of-type(3){
    text-align: center;
    font-size: .3rem;
  }
</style>
