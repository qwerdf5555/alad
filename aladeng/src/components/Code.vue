<template>
  <div>
    <div class="info">
      <div class="phone">
        <input type="password" :placeholder="str" class="call" @blur="isPhone" @input="inp('.call')"/>
        <img src="static/img/login/password.png" alt="">
        <img class="line" src="static/img/login/line.png" alt="">
        <img src="static/img/login/clear.png" @click="clear('.code')" alt="" v-show="bol1">
      </div>
      <div class="pw">
        <input type="password" placeholder="确认密码" class="code" @blur="haveCode" @input="inp('.code')" />
        <img src="static/img/login/password.png" alt="">
        <img class="line" src="static/img/login/line.png" alt="">
        <img src="static/img/login/clear.png" @click="clear('.code')" alt="" v-show="bol2">
      </div>
    </div>
    <div class="end">
      <router-link :to="url"><p>确认</p></router-link>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Code",
    data(){
      return{
        bol1:false,
        bol2:false,
        str:'',
        url:''
      }
    },
    methods:{
      clear(inp){
        document.querySelector(inp).value='';
        inp(inp);
      },
      getCode(){
        document.querySelector('.code').value='876548';
      },
      isPhone(){
        if (!/\w{6,32}/.test(document.querySelector('.call').value)){
          document.querySelector('.call').value='';
        }
        this.inp('.call');
      },
      haveCode(){
        if (!/\w{6,32}/.test(document.querySelector('.call').value)){
          document.querySelector('.call').value='';
        }
        this.inp('.call');
      },
      inp(inp){
        if (inp=='.call') {
          if (document.querySelector(inp).value) {
            this.bol1 = true;
          } else {
            this.bol1 = false;
          }
        }else{
          if (document.querySelector(inp).value) {
            this.bol2 = true;
          } else {
            this.bol2= false;
          }
        }
      },
      getStr(){
        this.str = this.$route.params.str;
        if (this.$route.params.str=='请输入密码'){
          this.url = '/person';
        } else {
          this.url = '/login2/1';
        }
      }
    },
    mounted(){
      this.getStr();
    }
  }
</script>

<style scoped>
  .info{
    height: 2.4rem;
    width: 6rem;
    margin: auto;
    position: relative;
    padding-top: 0.3rem;
  }
  .phone{
    border:1px solid #ccc;
    height: 0.62rem;
    border-radius: 0.31rem;
    position: relative;
    margin: 0.2rem 0;
  }
  .info img{
    width: 0.24rem;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .phone img:nth-of-type(1),.pw img:nth-of-type(1){
    left: 0.35rem;
  }
  .phone img:nth-of-type(3),.pw img:nth-of-type(3){
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
  input{
    color: #666666;
  }
  .info .line{
    width: 1px;
    height: 0.4rem;
    left: 0.8rem;
  }
  .pw{
    border:1px solid #ccc;
    height: 0.62rem;
    border-radius: 0.31rem;
    position: relative;
    margin-bottom: 0.2rem;
    color: #666666;
  }

  .info>p>a{
    position: absolute;
    right: 0;
    /*top: 1.56rem;*/
    height: 0.62rem;
    text-align: center;
    line-height: 0.62rem;
    font-size: 0.2rem;
    color: #f00;
  }
  .end{
    height: 1rem;
    display: flex;
    border-top: 1px solid #ccc;
  }
  .end a{
    text-align: center;
    line-height: 1rem;
    flex: 1;
    font-size: 0.3rem;
  }
  .end a:nth-of-type(2){
    color: #f00;
    border-left: 1px solid #ccc;
  }
</style>
