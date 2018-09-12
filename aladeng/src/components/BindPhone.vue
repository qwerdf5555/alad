<template>
  <div class="cphone">
    <header>
      <p>绑定手机号</p>
      <router-link to="/personinfo">
        <img src="static/img/personal/back.png" alt="" class="back">
      </router-link>
      <span class="save" @click="save">保存</span>
    </header>
    <p><input type="text" class="phone"></p>
  </div>
</template>

<script>
  export default {
    name: "BindPhone",
    methods:{
      save(){
        if(!/1\d{10}/.test(document.querySelector('.cphone .phone').value)){
          document.querySelector('.cphone .phone').value = '';
          document.querySelector('.cphone .phone').placeholder = '请输入正确的手机号'
        }else {
          localStorage.phone = document.querySelector('.cphone .phone').value;
        }
      }
    },
    mounted(){

      if (localStorage.phone) {
        document.querySelector('.cphone .phone').value = localStorage.phone;
      }
    }
  }
</script>

<style scoped>
  .cphone header{
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
  .cphone header .back{
    position: absolute;
    width: .25rem;
    left: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .cphone header .save{
    position: absolute;
    font-size: .4rem;
    right: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
    color: #ffff;
  }
  .cphone > p{
    height: .44rem;
    margin: 1.4rem .2rem;
    border-bottom: 1px #ccc solid;
  }
  .cphone .phone{
    -web-kit-appearance:none;
    -moz-appearance: none;
    height: .4rem;
    font-size: .4rem;
    background-color: #f2f2f2;
    padding: 0 .2rem;
  }
</style>
