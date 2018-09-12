<template>
  <div class="cname">
  <header>
    <p>修改昵称</p>
    <router-link to="/personinfo">
      <img src="static/img/personal/back.png" alt="" class="back">
    </router-link>
      <span class="save" @click="save">保存</span>
  </header>
    <p><input type="text" class="nm"></p>
  </div>
</template>

<script>
    export default {
        name: "ChangeName",
      methods:{
        save(){
          localStorage.nickname = document.querySelector('.cname .nm').value;
          console.log(localStorage.nickname);
        }
      },
      mounted(){
          if (localStorage.nickname) {
            document.querySelector('.cname .nm').value = localStorage.nickname;
          }
      }
    }
</script>

<style scoped>
  .cname header{
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
  .cname header .back{
    position: absolute;
    width: .25rem;
    left: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .cname header .save{
    position: absolute;
    font-size: .4rem;
    right: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
    color: #ffff;
  }
  .cname > p{
    height: .44rem;
    margin: 1.4rem .2rem;
    border-bottom: 1px #ccc solid;
  }
  .cname .nm{
    -web-kit-appearance:none;
    -moz-appearance: none;
    height: .4rem;
    font-size: .4rem;
    background-color: #f2f2f2;
    padding: 0 .2rem;
  }
</style>
