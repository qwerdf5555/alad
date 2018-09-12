<template>
  <div>
    <p @click="edit" class="edit">编辑</p>
    <div class="list4" v-for="item in list">
      <div class="numList">
        <p>订单编号：<span>{{item.numlist}}</span></p>
        <span>交易完成</span>
      </div>
      <router-link to="/orderinfo">
      <div class="goods">
        <div class="gdImg">
          <img :src="item.src" alt="">
          <img :src="item.src" alt="">
          <img :src="item.src" alt="">
          <img :src="item.src" alt="">
        </div>
      </div>
      </router-link>
      <div class="pay">
        <p>实付：<span>￥{{item.price * item.num}}</span></p>
        <p><router-link to="###">发表心得</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "List4",
    data(){
      return{
        bol1:false,
        bol2:false,
        list:[
          {name:'会呼吸丝滑蜜粉',spec:'蜜粉',price:166.06,num:1,src:'static/img/order/1.png',numlist:'1485269676465',bol:false},
          {name:'会呼吸丝滑蜜粉',spec:'蜜粉',price:166.06,num:1,src:'static/img/order/1.png',numlist:'1485269676465',bol:false}
        ]
      }
    },
    methods: {
      edit() {
        this.bol1 = true;
      },
      chse() {
        this.bol2 = !this.bol2;
        this.isAll2();
      },
      choose(item) {
        item.bol = !item.bol;
        this.isAll1();
      },
      del() {
        for (var i = 0; i < this.list.length; i++){
          if (this.list[i].bol){
            this.list.splice(i,1);
            i--;
          }
        }
        this.isAll1();
        if (!this.list.length) {
          this.bol1 = false;
        }
      },
      isAll1() {
        var sum = 0;
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i].bol) {
            sum++;
          }
        }
        if (sum == this.list.length && this.list.length) {
          this.bol2 = true;
        }else{
          this.bol2 = false;
        }
      },
      isAll2() {
        if (this.bol2) {
          for (var i = 0; i < this.list.length; i++) {
            this.list[i].bol = true;
          }
        }else {
          for (var i = 0; i < this.list.length; i++) {
            this.list[i].bol = false;
          }
        }
      },
    },
  }
</script>

<style scoped>
  .list4{

    margin-bottom: .2rem;
    color: #808080;
    background-color: #fff;

  }
  .edit{
    color: #fff;
    font-size: .35rem;
    position: fixed;
    right: .2rem;
    top: .3rem;
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
  .gdImg img{
    width: .9rem;
    margin-left: .77rem;
    margin-top: .4rem;
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
    height: .5rem;
    line-height: .5rem;
    font-size: .3rem;
  }
  .pay p:nth-of-type(1) span{
    color: #f00;
  }
  .pay p:nth-of-type(2){
    float: right;
    width: 1.4rem;
    background-color: #f00;
    border-radius: .15rem;
    text-align: center;
  }
  .pay a{
    color: #fff;
  }
</style>
