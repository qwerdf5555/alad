<template>
  <div class="server0">
  <header>
    <p>我的商城</p>
    <router-link to="/person">
      <img src="static/img/personal/back.png" alt="">
    </router-link>
    <span>神灯值<router-link to="/mine0"><img src="static/img/server/more1.png" alt="" class="more"></router-link></span>
  </header>
    <div class="money" :class="{big:bol}">
      <p v-show="bol"><img :src="head" alt="" v-show="head"></p>
      <p v-show="bol">{{name}}</p>
      <p class="mn">{{money}}<img src="static/img/server/money.png" alt=""></p>
    </div>
    <p><input type="text" @blur="search" @click="search"><span v-show="bol1"><img src="static/img/server/search.png" alt="">查找你想要的商品</span> </p>
    <ul class="type">
      <li v-for="(item,index) in type" v-if="index < 5" @click="choose(index)" :class="{choose:indexC==index}">{{item}}</li>
      <div class="line" :style="'left:'+(indexC*1.44+0.36)+'rem'"></div>
      <img src="static/img/server/more2.png" alt="" @click="more">
      <div class="moreType" v-show="bol">
        <p>所有商品分类</p>
        <div>
          <span v-for="(item,index) in type" v-if="index>4" :class="{red:indexS==index}" @click="choose(index)">{{item}}</span>
        </div>
      </div>
    </ul>

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

    <div class="moreGoods">
      <p @click="load">加载更多</p>
    </div>
    <div class="goTop" @click="goTop">
      <img src="static/img/server/top.png" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "Server0",
      data(){
          return{
            bol:false,
            bol1:true,
            name:'空空空',
            head:'',
            money:100,
            type:['精选','面膜','母婴','美妆','眼妆','防晒','爽肤水×精华','乳液×面霜','卸妆水','散粉蜜粉','眼妆','面膜','粉饼×粉霜','榜上有名'],
            indexC:0,
            indexS:5,
            goods:[
              {name:'蜗牛饰容BB霜50g',money:'500',price:'22.30'},
              {name:'蜗牛饰容BB霜50g',money:'500',price:'22.30'},
              {name:'蜗牛饰容BB霜50g',money:'500',price:'22.30'},
              {name:'蜗牛饰容BB霜50g',money:'500',price:'22.30'}
            ]
          }
      },
      methods:{
          choose(i){
            if(i<5){
              this.indexC = i;
            }else {
              this.indexS = i;
             }

          },
        more(){

            this.bol = !this.bol;
        },
        search(){
            this.bol1 = !this.bol1;
        },
        load(){
            console.log('加载更多');
        },
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
      },
    }
</script>

<style scoped>
  .server0{
    background-color: #fff;
  }
  .server0 header{
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
  .server0 header img{
    position: absolute;
    width: .25rem;
    left: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .server0 header span{
    position: absolute;
    right: .95rem;
    top: 0;
    bottom: 0;
    margin: auto;
    font-size: .35rem;
    color: #fff;
  }
  .server0 header span a{
    width: .37rem;
    position: absolute;
    right: -.45rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .server0 .more{
    width: 100%;
  }
  .money{
    background-color: #e53e42;
    margin-top: .98rem;
    text-align: center;
  }
  .server0 .big{
    background: url('../../static/img/server/bgimg.png') no-repeat;
    background-size: 100% 100%;
    padding-top: .4rem;
  }
  .big p:nth-of-type(1){
    width: 1rem;
    height: 1rem;
    background-color: #fff;
    border-radius: 50%;
    margin: auto;
    overflow: hidden;
  }
  .big p:nth-of-type(1) img{
    width: 100%;
    height: 100%;
  }
  .big p:nth-of-type(2){
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
  .server0 > p{
    height: .8rem;
    position: relative;
  }
  .server0 > p input{
    width: 6.4rem;
    height: .5rem;
    border: 1px #ccc solid;
    border-radius: .15rem;
    background-color: #f2f2f2;
    font-size: .3rem;
    padding: 0 .2rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .server0 > p span{
    font-size: .25rem;
    color: #f00;
    height: .4rem;
    width: 2.4rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .server0 > p span img{
    height: .3rem;
  }
  .type{
    height: .8rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: .3rem;
    color: #fff;
    background-color: #680a0c;
    position: relative;
  }
  .type li{
    /*flex: 1;*/
    text-align: center;
  }
  .type .choose{
    color: #ffd21f;
  }
  .type .line{
    width: .7rem;
    height: 2px;
    background-color: #ffd21f;
    position: absolute;
    bottom: 0;
    left: .36rem;
  }
  .type img{
    width: .25rem;
    position: absolute;
    top: .35rem;
    right: .15rem;
  }
  .type .moreType{
    position: absolute;
    top: .8rem;
    width: 100%;
    background-color: #f2f2f2;
    color: #808080;
    z-index: 998;
  }
  .moreType p{
    height: .6rem;
    line-height: .6rem;
    font-size: .35rem;
    padding: 0 .2rem;
    border-bottom: 1px #ccc solid;
  }
  .moreType div{
    overflow: hidden;
    border-bottom: 1px #ccc solid;
  }
  .moreType span{
    margin: 0 .2rem;
    line-height: .6rem;
    font-size: .27rem;
    float: left;
    color: #4d4d4d;
  }
  .moreType .red{
    color: #e53e42;
  }
  .content{
    overflow: hidden;
  }
  .goods{
    width: 3.3rem;
    border: 1px #ccc solid;
    float: left;
    margin-left: .2rem;
    margin-bottom: .2rem;
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
  .moreGoods{
    height: 2rem;
    margin-top: 3rem;
  }
  .moreGoods p{
    font-size: .3rem;
    text-align: center;
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
