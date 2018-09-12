<template>
  <div class="logistics">
  <header>
    <p>物流信息</p>
    <router-link to="/order/3">
      <img src="static/img/personal/back.png" alt="">
    </router-link>
  </header>
    <div class="info">
      <p>包裹</p>
      <p>运单号:<span>{{$route.params.numlist}}</span></p>
      <p>快递公司:<span>{{$route.params.logistics}}</span></p>
    </div>
    <div class="logi">
      <p :style="'height:'+i+'rem'"></p>
      <div v-for="item in logistics">
        <p :class="{co:item.bol}"><span :class="{ok:item.bol}"></span>{{item.info}}</p>
        <p>{{item.time}}</p>
      </div>
    </div>
    <maybe-like></maybe-like>
  </div>
</template>

<script>
    import MaybeLike from "./MaybeLike";
    export default {
        name: "Logistics",
      components: {MaybeLike},
      data(){
          return{
            i:0,
            logistics:[
              {info:'卖家发货',bol:true,time:'2017-06-09  22:44:36'},
              {info:'包裹正在等待揽件',bol:true,time:'2017-06-10  08:09:22'},
              {info:'快件...',bol:false}
              ]
          }
      },
      mounted(){
          this.i = this.logistics.length;
      }
    }
</script>

<style scoped>
  .logistics{
    height: 12.8rem;
    background-color: #f2f2f2;
  }
  .logistics header{
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
  .logistics header img{
    position: absolute;
    width: .25rem;
    left: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .logistics .info{
    margin-top: 1rem;
  }
  .info p{
    height: .8rem;
    line-height: .8rem;
    font-size: .35rem;
    color: #808080;
    padding: 0 .2rem;
    border-bottom: 1px #666 solid;
    background-color: #fff;
  }
  .info p span{
    color: #4d4d4d;
    margin-left: .1rem;
  }
  .info p:nth-of-type(1){
    font-size: .4rem;
    height: 1rem;
    line-height: 1rem;
    color: #4d4d4d;
  }
  .logi{
    padding: .2rem 0;
    position: relative;
    margin-bottom: 3rem;
  }
  .logi > p{
    width: 2px;
    position: absolute;
    left: .57rem;
    top: .5rem;
    background-color: #ccc;
  }
  .logi div{
    padding: 0 .5rem;
    height: 1rem;
  }
  .logi span{
    display: inline-block;
    width: .15rem;
    height: .15rem;
    border-radius: 50%;
    background-color: #cccccc;
    vertical-align: center;
    position: relative;
    margin-right: .4rem;
  }
  .logi .ok{
    background-color: #4d4d4d;
  }
  .logi p{
    color: #808080;
  }
  .logi .co{
    color: #4d4d4d;
  }
  .logi p:nth-of-type(1){
    font-size: .35rem;
    height: .5rem;
    line-height: .5rem;
  }
  .logi p:nth-of-type(2){
    font-size: .27rem;
    padding-left: .55rem;
    line-height: .4rem;
  }
</style>
