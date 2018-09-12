<template>

<div class="register">
  <div>
    <div>
  <router-link to="/login"><p class="reg">登录</p></router-link>
  <router-link to="/register1"><p class="login">注册</p></router-link>
    </div>
  <router-link to="/person"> <img src="static/img/register/off.png" alt=""></router-link>
</div>
</div>
</template>

<script>
    export default {
        name: "Register",
      methods:{
          off(){
            document.querySelector('.register').style.display = 'none';
          }
      }
    }
</script>

<style scoped>
.register{
  position: fixed;
  top: 0;
  width: 100%;
  height: 12.3rem;
  background-color: rgba(0,0,0,0.5);
}
.register>div{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3.6rem;
  background-color: #fff;
}

.register  p{
    width: 6rem;
    height: 0.62rem;
    border-radius: 0.31rem;
    border: 1px solid #ccc;
    margin-bottom: 0.2rem;
    font-size: 0.3rem;
    color: #666666;
  text-align: center;
  line-height: 0.62rem;
margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  }
.register .reg{
  color: #fff;
  background-color: #f00;
  top: 1.1rem;
}
.register .login{
  top: 1.9rem;
}
  .register img{
    width: .3rem;
    position: absolute;
    right: .22rem;
    top: 0.17rem;
  }
</style>
