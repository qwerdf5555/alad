<template>
<div class="order">
  <header>
    <p>全部订单</p>
    <router-link to="/person">
      <img src="static/img/personal/back.png" alt="">
    </router-link>
  </header>
    <div class="ord">
    <ul @touchstart="move" @touchmove="moveTo" :style="'left:'+left+'px'" class="move">
    <li  v-for="(i,index) in arr" @click="change(index)"><router-link :to="'/list'+index" :class="{red:index==num}">{{i}}</router-link> </li>
    <span class="line" :style="'left:'+(num*1.6+0.2)+'rem'"></span>
    </ul>
    </div>
  <router-view></router-view>
</div>
</template>

<script>

    import OrderList from "./OrderList";
    export default {
        name: "Order",
      components: {OrderList},
      data(){
          return{
            arr:['全部订单','待支付','待发货','待收货','交易完成'],
            num:-1,
            left:0,
            ul:null,
            startX:null,
            max:0
          }
      },
      methods:{
          change(index){
            this.num = index;
            if (this.num >= 3){
              this.left = -this.max;
            }else if(this.num<=1){
              this.left =0;
            }
          },
        getNum(){
            this.num = this.$route.params.num;

        },
        move(e){
          this.startX = e.touches[0].pageX;
        },
        moveTo(e){
            var x = e.touches[0].pageX - this.startX;
            this.left += x;
            if (this.ul.offsetLeft<-this.max-50) {
             this.left = -this.max-50;
            }else if(this.ul.offsetLeft>0){
              this.left = 0;
            }
            this.startX = e.touches[0].pageX;
        }
      },
      mounted(){
        this.getNum();
        this.ul = document.querySelector('.move');
        this.max = this.ul.offsetWidth - document.querySelector('.ord').offsetWidth;
        location.replace('http://10.90.81.215:8080/#/list'+this.num);
    }
    }
</script>

<style scoped>
  .order header{
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
  .order header img{
    position: absolute;
    width: .25rem;
    left: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .ord{
    width: 100%;
    height: .8rem;
    background-color: #fff;
    overflow: hidden;
    margin-top: 1rem;
    border-bottom: 1px #ccc solid;
  }
  .ord  ul {
    width: 8rem;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: .3rem;
    position: relative;
  }
  .ord li{
    flex: 1;
    text-align: center;
  }
  .ord .line{
    width: 1.2rem;
    height: 2px;
    background-color: #f00;
    position: absolute;
    bottom: 0;
    left: .2rem;
  }
  .ord .red{
    color: #f00;
  }
</style>
