<template>
<div class="reset">
  <header>
    <p>修改登录密码</p>
    <router-link to="/set">
      <img src="static/img/personal/back.png" alt="" class="back">
    </router-link>
    <span class="save" @click="save">完成</span>
  </header>
  <div class="set">
    <p>输入原密码：<input class="input" type="password" placeholder="请输入原密码" @change="is1"></p>
    <p>输入新密码：<input class="input" type="password" placeholder="请输入新密码" @change="is2"></p>
    <p>确认新密码：<input class="input" type="password" placeholder="请确认新密码" @change="is3"></p>
  </div>
</div>
</template>

<script>
    export default {
        name: "ResetCode1",
      data(){

          return{
            password:''
          }

      },
      methods:{
          is1(){
            if (!(document.querySelectorAll('.input')[0].value == this.password)){
              document.querySelectorAll('.input')[0].value='';
            }
          },
        is2(){
          if (!(document.querySelectorAll('.input')[1].value == document.querySelectorAll('.input')[0].value)){
            document.querySelectorAll('.input')[1].value='';
          }
        },
        is3(){

          if (!(document.querySelectorAll('.input')[2].value == document.querySelectorAll('.input')[1].value)){
            document.querySelectorAll('.input')[2].value='';
          }
        },
        save(){
          if (!document.querySelectorAll('.input')[1].value) {
            return;
          }
          localStorage.password = document.querySelectorAll('.input')[2].value;
        }
      },
      mounted(){
          if (localStorage.password) {
            this.password = localStorage.password;
          }else{
            this.password = '1234567890'
          }

      }
    }
</script>

<style scoped>
  .reset header{
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
  .reset header .back{
    position: absolute;
    width: .25rem;
    left: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .reset header .save{
    position: absolute;
    font-size: .4rem;
    right: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
    color: #ffff;
  }
  .set{
    margin-top: 1rem;

  }
  .set p{
    height: .9rem;
    line-height: .9rem;
    font-size: .35rem;
    color: #808080;
    background-color: #fff;
    padding: 0 .2rem;
  }
  .set input{
    -web-kit-appearance:none;
    -moz-appearance: none;
    height: .9rem;

    font-size: .3rem;
    padding: 0 .2rem;
  }
</style>
