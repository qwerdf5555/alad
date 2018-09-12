<template>
  <div>
    <p @click="edit" class="edit">编辑</p>
    <div class="del" v-show="bol1">
      <p @click="chse"><img src="static/img/order/del.png" alt="" v-show="bol2"></p>
      <span>全选</span>
      <span class="delete" @click="del">删除</span>
    </div>
    <div class="list1" v-for="item in list">
      <div class="numList">
        <p>订单编号：<span>{{item.numlist}}</span></p>
        <span>待付款</span>
      </div>
      <div class="goods">
        <div class="choose" v-show="bol1">
        <p @click="choose(item)"><img src="static/img/order/del.png" alt="" v-show="item.bol"></p>
        </div>
        <div class="gdImg">
        <img :src="item.src" alt="">
        </div>
        <div class="info">
          <p>{{item.name}}</p>
          <p>规格：{{item.spec}}</p>
          <p><span>￥{{item.price}}</span>×{{item.num}}件</p>
        </div>

      </div>
      <div class="pay">
        <p>应付：<span>￥{{item.price * item.num}}</span></p>
        <p><router-link to="###">去付款</router-link></p>
        <p>倒计时：03:02:56</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "List1",
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
  .list1{

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
  .del{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1rem;
    border-top: 1px #ccc solid;
    background-color: #fff;
    padding: .2rem;
  }
  .del >p{
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
    border: 1px #666 solid;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .del img{
    width: 100%;
  }
  .del span{
    height: .55rem;
    font-size: .4rem;
    position: absolute;
    left: .8rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .del .delete{
    left: 5.8rem;
    font-size: .3rem;
    width: 1.2rem;
    height: .5rem;
    text-align: center;
    line-height: .5rem;
    background-color: #f00;
    color: #fff;
    border-radius: .15rem;
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
    width: 1.2rem;
    background-color: #f00;
    border-radius: .15rem;
    text-align: center;
  }
  .pay a{
    color: #fff;
  }
  .pay p:nth-of-type(3){
    float: right;
    margin-right: .2rem;
    color: #f00;
  }
</style>
