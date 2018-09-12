<template>
<div class="info">
  <header>
    <p>订单详情</p>
    <router-link to="/order/3">
      <img src="static/img/personal/back.png" alt="">
    </router-link>
  </header>
  <div class="wait">
    <p>待收货</p>
    <p>已签收：由{{instead.name}}代签收，如有问题联系{{instead.connenct}}（{{instead.conphone}}）</p>
    <p>{{instead.time}}</p>
    <p><span>{{goods.time1}}</span>后系统将自动确认收货</p>
  </div>
  <div class="person">
    <p><span>{{person.name}}</span><span>{{person.call}}</span></p>
    <p>{{person.site}}</p>
  </div>
  <div class="perInfo">
    <p>实名信息</p>
    <p><span>{{person.name}}</span><span>{{person.id|id}}</span></p>
    <p>身份证正面照<img :src="person.srcz" alt="" v-show="person.srcz"></p>
    <p>身份证反面照<img :src="person.srcf" alt="" v-show="person.srcf"></p>
  </div>
  <div class="goods">
    <p>{{goods.area}}</p>
    <div>
      <img :src="goods.src" alt="">
      <div class="gds">
        <p>{{goods.name}}</p>
        <p>规格：{{goods.spec}}</p>
        <p><router-link to="###">发表心得</router-link></p>
        <p><span>￥{{goods.price}}</span>×{{goods.num}}件</p>
      </div>
    </div>
  </div>
  <div class="price">
    <p>订单金额：<span>￥{{goods.price*goods.num+goods.sp+goods.tax|toFixed}}</span></p>
    <p>商品金额：<span>￥{{goods.price*goods.num|toFixed}}</span></p>
    <p>订单邮费：<span>￥{{goods.sp|toFixed}}</span></p>
    <p>关税：<span>￥{{goods.tax}}</span></p>
  </div>
  <div class="serve">
    <p>联系客服：<span class="red">9:00-24:00</span><span>工作时间：</span></p>
    <p><span class="red">安全提醒：</span>付款成功后，阿拉灯不会以付款异常、卡单、系统 升级为由联系您。请勿泄露银行卡号、手机验证码，否则会造成 钱款的损失。如有疑问请咨询客服，谨防电话诈骗！</p>
  </div>
  <div class="numList">
    <p>订单编号：{{goods.numlist}}</p>
    <p>下单时间：{{goods.time2}}</p>
  </div>
  <p><router-link to="###">确认收货</router-link></p>
  <p><router-link to="###">退货退款</router-link></p>
  <maybe-like class="may"></maybe-like>
  </div>
</template>

<script>
    import MaybeLike from "./MaybeLike";
    export default {
        name: "OrderInfo",
      components: {MaybeLike},
      data(){
          return{

              person:{name:'李四',call:'15012340708',site:'河南省新乡市红旗区南干道与新中大道交叉口B座10楼102室；邮编453000',id:'410711111111111115'},
              goods:{name:'会呼吸丝滑蜜粉',spec:'蜜粉',price:166.06,area:'日本直邮',num:1,src:'static/img/order/1.png',numlist:'1485269676465',bol:false,sp:50,tax:10,time1:'16天16小时56分19秒',time2:'2017-06-23  12:02:54'},
              instead:{name:'商会大厦（南干道220号）',connenct:'张小强',conphone:'15012340809',time:'2017-07-01'},

          }
      },
      filters:{
          id(id){
            var arr = id.split('');
            var arr1 = [];
            for (var i = 0; i < arr.length; i++) {
              if (i < 4 || i > 16){
                arr1.push(arr[i]);
              } else {
                arr1.push('*');
              }
            }
            var str = arr1.join('');
            return str;
          },
          toFixed(num){
            return Number(num).toFixed(2);
          }
      }
    }
</script>

<style scoped>
  .info{
    -webkit-text-size-adjust: none;
  }
  .info header{
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
  .info header img{
    position: absolute;
    width: .25rem;
    left: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .info > div{
    margin-bottom: .2rem;
    background-color: #fff;
    color: #666;
  }
  .info >.wait{
    margin-top: 1rem;
    font-size: .23rem;
    padding: .2rem .2rem .1rem;
    background-color: #666666;
    color: #fff;
  }
  .wait p{
    margin-bottom: .1rem;
  }
  .wait p:nth-of-type(1){
    font-size: .27rem;
    color: #ffd21f;
  }
  .wait p:nth-of-type(2){
    width: 5.4rem;
  }
  .wait p:nth-of-type(4) span{
    color: #ffd21f;
  }
  .person{
    padding: .2rem .2rem 0;

  }
  .person p:nth-of-type(1) span{
    font-size: .3rem;
    margin-right: 1rem;
  }
  .person p:nth-of-type(2){
    width: 4rem;
    font-size: .23rem;
    padding: .3rem 0;
  }
  .perInfo{
    padding: .2rem;
  }
  .perInfo p:nth-of-type(1){
    font-size: .35rem;
    margin-bottom: .1rem;
  }
  .perInfo p:nth-of-type(2) span{
    font-size: .3rem;
    margin-right: 1rem;
  }
  .perInfo p:nth-of-type(3),.perInfo p:nth-of-type(4){
    width: 2rem;
    height: 1.2rem;
    font-size: .2rem;
    text-align: center;
    line-height: 1.2rem;
    position: relative;
    display: inline-block;
    border: 1px #ccc solid;
    margin-right: .2rem;
    margin-top: .2rem;
  }
  .perInfo img{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .goods{
    font-size: .35rem;
  }
  .goods > p{
    padding: .2rem;
    height: .8rem;
    line-height: .8rem;
    border-bottom: 1px #ccc solid;
  }
  .goods>div{
    height: 2rem;
    position: relative;
  }
  .goods>div img{
    width: .9rem;
    position: absolute;
    left: .65rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .gds{
    width: 4.9rem;
    position: absolute;
    left: 2.2rem;
    top: .3rem;
  }
  .gds>p:nth-of-type(1){
    font-size: .35rem;
    margin-bottom: .1rem;
  }
  .gds>p:nth-of-type(2){
    font-size: .3rem;
    margin-bottom: .3rem;
  }
  .gds>p:nth-of-type(3){
    width: 1.4rem;
    height: .35rem;
    line-height: .35rem;
    border-radius: .13rem;
    font-size: .3rem;
    text-align: center;
    background-color: #f00;
    float: right;
  }
  .gds>p:nth-of-type(3) a{
    color: #fff;
  }
  .gds>p:nth-of-type(4){
    font-size: .3rem;
  }
  .gds>p:nth-of-type(4) span{
    color: #f00;
    margin-right: .4rem;
  }
  .price p{
    font-size: .35rem;
    height: .6rem;
    line-height: .6rem;
    padding: 0 .2rem;
  }
  .price span{
    font-size: .25rem;
    color: #f00;
    float: right;
  }
  .serve .red{
    color: #f00;
    font-size: .28rem;
  }
  .serve p:nth-of-type(1){
    font-size: .35rem;
    height: .8rem;
    line-height: .8rem;
    border-bottom: 1px #ccc solid;
    padding: 0 .2rem;
  }
  .serve p:nth-of-type(1) span{
    float: right;
  }
  .serve p:nth-of-type(2){
    font-size: .24rem;
    padding: .2rem;
  }
  .numList p{
    font-size: .35rem;
    height: .8rem;
    line-height: .8rem;
    border-bottom: 1px #ccc solid;
    padding: 0 .2rem;
  }
  .info>p{
    width: 1.4rem;
    height: .5rem;
    font-size: .3rem;
    background-color: #f00;
    text-align: center;
    line-height: .5rem;
    float: right;
    margin-right: .2rem;
    border-radius: .17rem;
    margin-bottom: .2rem;
  }
  .info>p a{color: #fff;}
  .info >.may{
    clear: both;
    margin-bottom: 0;
  }
</style>
