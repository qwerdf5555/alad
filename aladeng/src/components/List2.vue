<template>
  <div>
  <div class="list2" v-for="item in list">
    <div class="numList">
      <p>订单编号：<span>{{item.numlist}}</span></p>
      <span>待发货</span>
    </div>
    <div class="goods">
      <div class="gdImg">
        <img :src="item.src" alt="">
      </div>
      <div class="info">
        <p>{{item.name}}</p>
        <p>规格：{{item.spec}}</p>
        <p><span>￥{{item.price}}</span>×{{item.num}}件</p>
      </div>

    </div>
    <div class="off">
      <p><span>共计{{item.num}}件商品</span><span>合计：￥{{item.price * item.num}}（含运费：￥{{item.sp|toFixed(2)}}）</span></p>
      <p>
        <span>催单</span><span @click="not(item)" :class="{noBuy:item.bol}">取消订单</span>
      </p>
      <p v-show="!item.bol">{{item.time}}</p>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "List2",
      data(){
        return{
          bol1:false,
          bol2:false,
          list:[
            {name:'会呼吸丝滑蜜粉',spec:'蜜粉',price:166.06,num:1,src:'static/img/order/1.png',numlist:'1485269676465',bol:false,sp:1.00,time:'05:00:00'},
            {name:'会呼吸丝滑蜜粉',spec:'蜜粉',price:166.06,num:1,src:'static/img/order/1.png',numlist:'1485269676465',bol:false,sp:10.00,time:'05:00:00'}
          ]
        }
      },
      methods:{
        not(item){
          item.bol = true;
        }
      },
      filters:{
          toFixed(num){
            return Number(num).toFixed(2);
          }
      }
    }
</script>

<style scoped>
  .list2{

    margin-bottom: .2rem;
    color: #808080;
    background-color: #fff;

  }
  .numList{
    overflow: hidden;
    border-bottom: 1px #ccc solid;
    padding: 0 .2rem;
  }
  .numList p{
    font-size: .3rem;
    line-height: .6rem;
    float: left;
  }
  .numList >span{
    float: right;
    font-size: .25rem;
    line-height: .6rem;
    color: #f00;
  }
  .goods{
    padding: 0 .2rem;
    height: 2rem;
    border-bottom: 1px #ccc solid;
  }
  .goods > div{
    position: relative;
    height: 100%;
    display: inline-block;
  }
  .goods .choose{
    width: .4rem;
  }
  .goods .choose p{
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
    border: 1px #666 solid;
    position: absolute;
    top: .6rem;
  }
  .goods .choose img{
    width: 100%;
  }
  .gdImg{
    width: 1rem;
    margin: 0 .6rem;
  }
  .gdImg img{
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .info{
    font-size: .25rem;
    vertical-align: top;
    padding: .2rem 0;
  }
  .info p:nth-of-type(1){
    font-size: .3rem;
    line-height: .6rem;
  }
  .info p:nth-of-type(3){
    margin-top: .3rem;
  }
  .info p:nth-of-type(3) span{
    color: #f00;
    margin-right: .2rem;
  }
  .off{
    padding:.2rem .2rem 0;
    text-align: right;
    height: 1.25rem;
  }
  .off p{
    line-height: .5rem;
    font-size: .27rem;
  }
  .off p:nth-of-type(1) span{
    margin-left: .2rem;
  }
  .off p:nth-of-type(2) span{
    display: inline-block;
    width: 1.4rem;
    background-color: #f00;
    border-radius: .15rem;
    text-align: center;
    color: #fff;
    margin-left: .15rem;
  }
  .off p:nth-of-type(2) .noBuy{
    background-color: #cccccc;
    color: #808080;
  }
  .off p:nth-of-type(3){
    font-size: .2rem;
    line-height: .25rem;
    padding: 0 .3rem;
    color: #f00;
  }
</style>
