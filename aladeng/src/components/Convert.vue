<template>
  <div class="convert">
  <header>
    <p>兑换记录</p>
    <router-link to="/mine0">
      <img src="static/img/personal/back.png" alt="">
    </router-link>
    <p><span @click="clear">清空</span>|<span @click="edit">{{bol?'完成':'编辑'}}</span></p>
  </header>
    <div class="del" v-show="bol">
      <p @click="chse"><img src="static/img/order/del.png" alt="" v-show="bol1"></p>
      <span>全选</span>
      <span class="delete" @click="del">删除</span>
    </div>
    <div class="content">
    <div v-for="item1 in arr1" class="day">
      <p>{{item1[0].time}}</p>
      <div class="goods" v-for="item2 in item1">
        <div class="choose" v-show="bol">
          <p @click="choose(item2)"><img src="static/img/order/del.png" alt="" v-show="item2.bol"></p>
        </div>
        <div class="gdImg">
          <img :src="item2.src" alt="">
        </div>
        <span class="line"></span>
        <div class="info">
          <p>{{item2.name}}</p>
          <p><img :src="item2.banner" alt=""><img src="static/img/server/plane.png" alt="">{{item2.from}}</p>
          <p>{{item2.money}}<img src="static/img/server/money.png" alt=""><span>￥{{item2.price}}</span></p>
        </div>
        <span class="red">已兑换</span>
      </div>
    </div>
      <div class="clear" v-show="bol2">
        <div>
          <p>确定要清空所有记录？</p>
          <p><span @click="btn(0)">取消</span><span @click="btn(1)" class="red">确定</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Convert",
      data(){
          return{
            bol:false,
            bol1:false,
            bol2:false,
            arr:[
              {name:'焕彩萃璨花蕊唇彩4.8g',src:'static/img/server/goods1.png',banner:'static/img/server/banner.png',from:'海外直邮',money:500,price:'160.06',time:'2017-07-03',bol:false},
              {name:'焕彩萃璨花蕊唇彩4.8g',src:'static/img/server/goods1.png',banner:'static/img/server/banner.png',from:'海外直邮',money:500,price:'160.06',time:'2017-07-03',bol:false},
              {name:'焕彩萃璨花蕊唇彩4.8g',src:'static/img/server/goods1.png',banner:'static/img/server/banner.png',from:'海外直邮',money:500,price:'160.06',time:'2017-07-09',bol:false},
              {name:'焕彩萃璨花蕊唇彩4.8g',src:'static/img/server/goods1.png',banner:'static/img/server/banner.png',from:'海外直邮',money:500,price:'160.06',time:'2017-07-09',bol:false},
              {name:'焕彩萃璨花蕊唇彩4.8g',src:'static/img/server/goods1.png',banner:'static/img/server/banner.png',from:'海外直邮',money:500,price:'160.06',time:'2017-07-09',bol:false},
            ],
            arr1:[],
          }
      },
      methods:{
        edit(){
          this.bol = !this.bol;
        },
        clear(){
          this.bol2 = true;
        },
        btn(bol){
          if (bol){
            this.arr1.splice(0);
          }
          this.bol2 = false;
        },
        choose(obj){
          obj.bol = !obj.bol;
          this.isAll1();
        },
        chse() {
          this.bol1 = !this.bol1;
          this.isAll2();
        },
        del() {
          for (var i = 0; i < this.arr1.length; i++){
            for (var j = 0; j < this.arr1[i].length; j++){
              if (this.arr1[i][j].bol){
                this.arr1[i].splice(j,1);
                j--;
              }
            }
            if(!this.arr1[i].length){
              this.arr1.splice(i,1);
              i--;
            }
          }
          this.isAll1();
        },
        isAll1() {
          var m = 0;
          var sum = 0;

            for (var i = 0; i < this.arr1.length; i++) {
              for (var j = 0; j < this.arr1[i].length; j++) {
                m++;
                if (this.arr1[i][j].bol) {
                  sum++;
                }
              }
            }

          if ((sum !=0 && sum == m)) {
            this.bol1 = true;
          }else{
            this.bol1 = false;
          }
        },
        isAll2() {
          if (this.bol1) {
            for (var i = 0; i < this.arr1.length; i++){
              for (var j = 0; j < this.arr1[i].length; j++){
                this.arr1[i][j].bol = true;
              }
            }
          }else {
            for (var i = 0; i < this.arr1.length; i++){
              for (var j = 0; j < this.arr1[i].length; j++){
                this.arr1[i][j].bol = false;
              }
            }
          }
        },
      },
      mounted(){
          var m = 0;
          var flag = true;
          this.$set(this.arr1,m,[]);
          this.$set(this.arr1[0],0,this.arr[0]);
          for (var i = 1; i < this.arr.length; i++){
            flag = true;
              for (var j = 0; j < this.arr1.length; j++){
                if(this.arr[i].time == this.arr1[j][0].time){
                  this.$set(this.arr1[j],this.arr1[j].length,this.arr[i]);
                  flag = false;
                  break;
                }
              }
              if(flag){
                m++;
                this.$set(this.arr1,m,[]);
                this.$set(this.arr1[m],0,this.arr[i]);
              }
          }
      }
    }
</script>

<style scoped>
  .convert header{
    width: 100%;
    height: 1rem;
    background-color: #f00;
    color: #fff;
    font-size: .4rem;
    text-align: center;
    line-height: 1rem;
    position: fixed;
    top: 0;
    z-index: 999;
  }
  .convert header img{
    position: absolute;
    width: .25rem;
    left: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .convert header p:nth-of-type(2){
    position: absolute;
    right: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
    font-size: .35rem;
  }
  .convert header span {
    margin: 0 .1rem;
  }
  .content{
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  .content > div{
    background-color: #fff;
  }
  .content >div> p{
    font-size: .3rem;
    line-height: .6rem;
    border-bottom: 1px #ccc solid;
    padding: 0 .2rem;
  }
  .goods{
    position: relative;
    height: 2rem;
  }
  .goods > div{
    position: relative;
    height: 100%;
    display: inline-block;
  }
  .goods .choose{
    width: .4rem;
    margin-left: .2rem;
  }
  .goods .choose p{
    width: .35rem;
    height: .35rem;
    border-radius: 50%;
    border: 1px #bcbcbc solid;
    position: absolute;
    top: .8rem;
  }
  .goods .choose img{
    width: 100%;
  }
  .gdImg{
    width: .75rem;
    margin: 0 .5rem  0 .6rem;
  }
  .gdImg img{
    width: .7rem;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .line{
    width: 5.2rem;
    height: 1px;
    background-color: #ccc;
    position: absolute;
    bottom: 0;
    right: 0;
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
  .info p:nth-of-type(2){
    line-height: .7rem;
  }
  .info p:nth-of-type(3){
    font-size: .3rem;
    color: #f00;
  }
  .info p:nth-of-type(3) img{
    height: .2rem;
    margin-left: .1rem ;
    margin-right: .2rem;
  }
  .info p:nth-of-type(3) span{
    color: #808080;
    font-size: .25rem;
    text-decoration:line-through
  }
  .goods .red{
    width: 1.2rem;
    height: .4rem;
    background-color: #f00;
    color: #fff;
    text-align: center;
    line-height: .4rem;
    font-size: .28rem;
    border-radius: .2rem;
    position: absolute;
    right: .3rem;
    bottom: .2rem;
  }
  .del{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1rem;
    border-top: 1px #ccc solid;
    background-color: #fff;
    padding: .2rem;
    z-index: 999;
  }
  .del >p{
    width: .35rem;
    height: .35rem;
    border-radius: 50%;
    border: 1px #ccc solid;
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
    color: #808080;
  }
  .del .delete{
    left: 5.7rem;
    font-size: .3rem;
    width: 1.2rem;
    height: .5rem;
    text-align: center;
    line-height: .5rem;
    background-color: #f00;
    color: #fff;
    border-radius: .15rem;
  }
  .content>.clear{
    position: fixed;
    width: 100%;
    height: 12.3rem;
    background-color: rgba(0,0,0,0.5);
    top: 0;
  }
  .clear div{
    position: fixed;
    top: 4.6rem;
    left: 1.6rem;
    width: 4rem;
    height: 2.5rem;
    background-color: #fff;
    font-size: .35rem;
  }
  .clear p:nth-of-type(1){
    height: 1.7rem;
    line-height: 1.7rem;
    text-align: center;
    border-bottom: 1px #ccc solid;
    color: #808080;
  }
  .clear span{
    display: inline-block;
    width: 1.98rem;
    height: .8rem;
    line-height: .8rem;
    color: #808080;
    text-align: center;
    border-right: 1px solid #ccc;
    position: relative;
    left: 1px;
  }
  .clear .red{
    color: #f00;
  }
</style>
