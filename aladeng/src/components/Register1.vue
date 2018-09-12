<template>
<div class="reg">
  <header>
    <p>注册</p>
  </header>
  <div class="info">
    <p class="hint">{{str}}</p>
    <div class="phone">
      <input type="text" placeholder="请输入手机号" class="call" @blur="isPhone" @input="inp()"/>
      <img src="static/img/login/phone.png" alt="">
      <img class="line" src="static/img/login/line.png" alt="">
      <img src="static/img/login/clear.png" @click="clear()" alt="" v-show="bol">
    </div>
    <div class="verify">
      <input type="text" placeholder="请输入手机验证码" class="code" />
      <img src="static/img/login/verify.png" alt="">
      <img class="line" src="static/img/login/line.png" alt="">
    </div>
    <div class="three">
      <input type="text" placeholder="请输入邀请码" />
      <img src="static/img/login/code.png" alt="">
      <img class="line" src="static/img/login/line.png" alt="">
    </div>
    <span @click="getCode">获取验证码</span>
  </div>
  <div class="end">
    <router-link to="/person"><p>取消</p></router-link>
    <router-link to="/person"><p>完成</p></router-link>
  </div>
</div>
</template>

<script>
    export default {
        name: "Register1",
      data(){
          return{
            str:'我们将发送验证码到您填写的手机号上，请注意查收',
            bol:false
          }
      },
      methods:{
        clear(){
          document.querySelector('.call').value='';
          inp();
        },
        getCode(){
          document.querySelector('.code').value='876548';
        },
        isPhone(){
          if (!/1\d{10}/.test(document.querySelector('.call').value)){
            document.querySelector('.call').value='';
          }
          this.inp();
        },
        inp(){

          if (document.querySelector('.call').value) {
            this.bol = true;
          } else {
            this.bol = false;
          }

        }
      }
    }
</script>

<style scoped>
  .reg header{
    height: 1rem;
    background-color: #f00;
    color: #fff;
    font-size: .4rem;
    text-align: center;
    line-height: 1rem;
    position: relative;
  }
  .info{
    height: 2.4rem;
    width: 6rem;
    margin: .75rem auto;
    position: relative;
    padding-top: 0.3rem;

  }
  .hint{
    text-align: center;
    font-size: 0.2rem;
    margin-bottom: 0.2rem;
    color: #808080;
  }
  .info>div{
    background-color: #fff;
  }
  .phone{
    border:1px solid #ccc;
    height: 0.62rem;
    border-radius: 0.31rem;
    position: relative;
    margin-bottom: 0.2rem;
  }
  .info img{
    width: 0.24rem;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .phone img:nth-of-type(1){
    left: 0.35rem;
  }
  .phone img:nth-of-type(3){
    right: 0.35rem;
  }
  .info input{
    position: absolute;
    width: 2.5rem;
    height: 0.32rem;
    left: 0.8rem;
    top: 0;
    bottom: 0;
    margin: auto;
    font-size: 0.25rem;
    padding: 0 0.2rem;
  }
  .info .line{
    width: 1px;
    height: 0.4rem;
    left: 0.8rem;
  }
  .verify{
    border:1px solid #ccc;
    width: 3.8rem;
    height: 0.62rem;
    border-radius: 0.31rem;
    position: relative;
    margin-bottom: 0.2rem;
    margin-right: 0.2rem;
    display: inline-block;
  }
  .verify img{
    left: 0.35rem;
  }
  .info>span{
    position: absolute;
    right: 0;
    top: 1.65rem;
    width: 2rem;
    height: 0.62rem;
    border:1px solid #ccc;
    border-radius: 0.31rem;
    text-align: center;
    line-height: 0.62rem;
    font-size: 0.25rem;
    color: #808080;
    background-color: #fff;
  }
  .three{
    border:1px solid #ccc;
    height: 0.62rem;
    border-radius: 0.31rem;
    position: relative;
    margin-bottom: 0.2rem;
  }
  .three img:nth-of-type(1){
    left: 0.35rem;
  }
  .three img:nth-of-type(3){
    right: 0.35rem;
  }
  .end{
    height: 1rem;
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
  }
  .end a{
    width: 2.4rem;
    height: .6rem;
    text-align: center;
    line-height: .6rem;
    font-size: 0.3rem;
    border: 1px solid #ccc;
    border-radius: .3rem;
    background-color: #fff;
  }
  .end a:nth-of-type(2){
    color: #fff;
    border-left: 1px solid #ccc;
    background-color: #f00;
  }
</style>
