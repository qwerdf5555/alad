<template>
    <div class="withDraw">
      <header>
        <p>我的账户</p>
        <router-link to="###"> <img src="static/img/withdraw/back.png" alt=""></router-link>
      </header>
      <div class="cont">
        <img src="static/img/withdraw/masonry.png" alt="">
        <div>
          <p class="red">￥{{money}}</p>
          <p>我的金额</p>
        </div>
        <router-link to="/withdr"><p>提现</p></router-link>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
  import WithDr from "./WithDr";
    export default {
        name: "WithDraw",
      components: {WithDr},
      data(){
          return{
            money:0
          }
      }
    }
</script>

<style scoped>
.withDraw header{
  height: 1rem;
  background-color: #f00;
  color: #fff;
  font-size: .4rem;
  text-align: center;
  line-height: 1rem;
  position: relative;
}
.withDraw header img{
  width: .25rem;
  position: absolute;
  left: .2rem;
  top: 0;
  bottom: 0;
  margin: auto;
}
  .cont{
    height: 11.35rem;
    background-color: #f2f2f2;
    position: relative;
  }
  .cont img{
    width: 2rem;
    position: absolute;
    top: 0.5rem;
    left: 0;
    right: 0;
    margin: auto;
  }
  .cont div{
    width: 100%;
    position: absolute;
    top: 2.5rem;
  }
.cont div p{
  height: .6rem;
  text-align: center;
  font-size: .3rem;
}
.cont div .red{
  color: #f00;
}
  .cont a p{
    width: 4.8rem;
    height: .7rem;
    background-color: #61a7ea;
    font-size: .28rem;
    color: #fff;
    line-height: .7rem;
    text-align: center;
    position: absolute;
    top: 4.3rem;
    left: 0;
    right: 0;
    margin: auto;
  }
</style>
