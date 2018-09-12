<template>
  <div class="prcode">
    <header>
      <p>我的二维码</p>
      <router-link to="/personinfo">
        <img src="static/img/personal/back.png" alt="" class="back">
      </router-link>
    </header>
    <div class="code">
      <p><span class="head"><img src="" alt="" v-show="false"></span><span class="name">{{name}}</span></p>
      <p>我的邀请码：{{code}}</p>
      <p>分享邀请码，邀请好友注册吧</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "InviteCode",
    data(){
      return{
        name:'空空空',
        src:'static/img/personinfo/code.png',
        code:'1234567890'
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
    font-size: .35rem;
    margin: .6rem 0;
    text-align: center;
  }

  .code p:nth-of-type(3){
    text-align: center;
    font-size: .3rem;
    width: 5.2rem;
    height: .8rem;
    line-height: .8rem;
    border-radius: .4rem;
    background-color: #f00;
    color: #fff;
    margin: auto;
  }
</style>
