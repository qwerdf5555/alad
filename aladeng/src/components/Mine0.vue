<template>

  <div class="mine0">
    <header>
      <p>我的神灯值</p>
      <router-link to="/person">
        <img src="static/img/personal/back.png" alt="">
      </router-link>
      <router-link to="###">
        <img src="static/img/server/more1.png" alt="" class="more">
      </router-link>
    </header>
    <div class="money">
      <p><img :src="head" alt=""></p>
      <p>{{name}}</p>
      <p class="mn">{{money}}<img src="static/img/server/money.png" alt=""></p>
      <p class="help"><img src="static/img/server/help1.png" alt="">神灯规则</p>
      <div class="how">
        <div>
          <p>今年购物抵钱已省</p>
          <p>{{money1}}￥</p>
        </div>
        <div>
          <p>今年神灯值抵扣订单</p>
          <p>{{num}}笔</p>
        </div>
      </div>
    </div>
    <div class="other">
      <router-link to="/convert">
    <p><img src="static/img/server/3.png" alt=""><span><img src="static/img/server/1.png" alt="">兑换记录</span></p>
      </router-link>
      <router-link to="/detail">
    <p><img src="static/img/server/3.png" alt=""><span><img src="static/img/server/2.png" alt="">神灯值明细</span></p>
      </router-link>
    </div>
    <p class="mayLike"><img src="static/img/server/likeline.png" alt="">神灯值猜你喜欢</p>
    <div class="content">

      <div v-for="item in goods" class="goods">
        <router-link to="###">
          <div class="img"><img src="static/img/server/goods.png" alt=""></div>
          <div class="info">
            <p>{{item.name}}</p>
            <p>{{item.money}}<img src="static/img/server/money.png" alt=""></p>
            <p >￥{{item.price}}</p>
          </div>
        </router-link>
      </div>


    </div>
    <div class="goTop" @click="goTop">
      <img src="static/img/server/top.png" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "Mine0",
      data(){
          return{
            name:'空空空',
            head:'',
            money:100,
            money1:0,
            num:0,
            goods:[
              {name:'蜗牛饰容BB霜50g',money:'500',price:'22.30'},
              {name:'蜗牛饰容BB霜50g',money:'500',price:'22.30'},
              {name:'蜗牛饰容BB霜50g',money:'500',price:'22.30'},
              {name:'蜗牛饰容BB霜50g',money:'500',price:'22.30'}
            ]
          }
      },
      methods:{
        goTop(){
          if (document.body.scrollTop>0){
            var t1 = setInterval(()=>{
              document.body.scrollTop -= 10;
              if (document.body.scrollTop<=0) {
                document.body.scrollTop = 0;
                clearInterval(t1);
              }
            },10);
          }

        }
      }
    }
</script>

<style scoped>
  .mine0 header{
    width: 100%;
    height: 1rem;
    background-color: #e53e42;
    color: #fff;
    font-size: .4rem;
    text-align: center;
    line-height: 1rem;
    position: fixed;
    top: 0;
    z-index: 999;
  }
  .mine0 header a:nth-of-type(1) img{
    position: absolute;
    width: .25rem;
    left: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .mine0 header a:nth-of-type(2) img{
    width: .37rem;
    position: absolute;
    right: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .money{
    margin-top: .98rem;
    text-align: center;
    background: url('../../static/img/server/bgimg1.png') no-repeat;
    background-size: 100% 100%;
    padding-top: .4rem;
    position: relative;
  }
  .money > p:nth-of-type(1){
    width: 1rem;
    height: 1rem;
    background-color: #fff;
    border-radius: 50%;
    margin: auto;
    overflow: hidden;
  }
  .money > p:nth-of-type(1) img{
    width: 100%;
    height: 100%;
  }
  .money > p:nth-of-type(2){
    font-size: .3rem;
    color: #fff;
  }
  .money .mn{
    color: #ffd21f;
    font-size: .5rem;
    height: .8rem;
    line-height: .8rem;
  }
  .mn img{
    width: .35rem;
    margin-left: .1rem;
  }
  .money .help{
    position: absolute;
    right: .2rem;
    top: .5rem;
    color: #fff;
    font-size: .25rem;
  }
  .help img{
    width: .3rem;
    margin-right: .1rem;
    vertical-align: middle;
  }
  .how{
    padding: .1rem 0;
  }
  .how div{
    font-size: .25rem;
    color: #fff;
    display: inline-block;
    width: 3.56rem;
    border-right:1px rgba(255,255,255,.3) solid;
    position: relative;
    left: .02rem;
  }
  .how p:nth-of-type(1){
    color: rgba(255,255,255,.5);
  }
  .other p{
    height: .8rem;
    border-bottom: 1px #ccc solid;
    position: relative;
    padding: 0 .2rem;
    background-color: #fff;
  }
  .other p >img{
    height: .2rem;
    position: absolute;
    right: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .other p span{
    font-size: .3rem;
    color: #808080;
    line-height: .8rem;
  }
  .other p span img{
    width: .35rem;
    vertical-align: middle;
    margin-right: .1rem;
  }
  .mayLike{
    height: 1rem;
    line-height: 1rem;
    position: relative;
    text-align: center;
    font-size: .3rem;
    color: #808080;
  }
  .mayLike img{
    width: 5.6rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .content{
    overflow: hidden;
    margin-bottom: 1rem;
  }
  .goods{
    width: 3.3rem;
    border: 1px #ccc solid;
    float: left;
    margin-left: .2rem;
    margin-bottom: .2rem;
    background-color: #fff;
  }
  .goods div{
    position: relative;
    text-align: center;
  }
  .goods .img{
    height: 2.64rem;
    border-bottom: 1px #ccc solid;
  }
  .goods .img img{
    width: .66rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .goods .info{
    height: 1.5rem;
  }

  .info p:nth-of-type(1){
    color: #4d4d4d;
    font-size: .25rem;
    line-height: .6rem;
  }
  .info p:nth-of-type(2){
    color: #e53e42;
    font-size: .25rem;
  }
  .info p:nth-of-type(2) img{
    width: .25rem;
    margin-left: .1rem;
  }
  .info p:nth-of-type(3){
    font-size: .23rem;
    line-height: .6rem;
    text-decoration: line-through
  }
  .moreGoods p{
    font-size: .3rem;
    text-align: center;
    margin: 3rem auto 1.2rem;
    color: #808080;
  }
  .goTop{
    width: .5rem;
    height: .5rem;
    border: 1px #ccc solid;
    border-radius: 50%;
    position: fixed;
    bottom: .6rem;
    right: .45rem;
  }
  .goTop img{
    width: .25rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
</style>
