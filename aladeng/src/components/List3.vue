<template>
  <div>
    <div class="list3" v-for="item in list">
      <div class="numList">
        <p>订单编号：<span>{{item.numlist}}</span></p>
        <span>待收货</span>
      </div>
      <router-link to="/orderinfo">
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
      </router-link>
      <div class="pay">
        <p>应付：<span>￥{{item.price * item.num}}</span></p>
        <p><router-link to="###">确认收货</router-link></p>
        <p><router-link :to="'/logistics/'+item.numlist+'/'+item.logistics">查看物流</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "List3",
    data(){
      return{
        bol1:false,
        bol2:false,
        list:[
          {name:'会呼吸丝滑蜜粉',spec:'蜜粉',price:166.06,num:1,src:'static/img/order/1.png',numlist:'1485269676465',bol:false,logistics:'快递100'},
          {name:'会呼吸丝滑蜜粉',spec:'蜜粉',price:166.06,num:1,src:'static/img/order/1.png',numlist:'1485269676465',bol:false,logistics:'快递100'}
        ]
      }
    },

  }
</script>

<style scoped>
  .list3{

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
  .pay{
    padding: .2rem;
  }
  .pay p{
    display: inline-block;
    height: .45rem;
    line-height: .45rem;
    font-size: .27rem;
  }
  .pay p:nth-of-type(1) span{
    color: #f00;
  }
  .pay p:nth-of-type(2),.pay p:nth-of-type(3){
    float: right;
    width: 1.4rem;
    background-color: #f00;
    border-radius: .15rem;
    text-align: center;
    margin-left: .15rem;
  }
  .pay a{
    color: #fff;
  }

</style>
