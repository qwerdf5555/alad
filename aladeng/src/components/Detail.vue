<template>
  <div class="detail">
  <header>
    <p>神灯值明细</p>
    <router-link to="/mine0">
      <img src="static/img/personal/back.png" alt="">
    </router-link>
  </header>
    <div class="content">
      <div v-for="item in arr">
        <p>邀请一位好友注册（{{item.phone}}）</p>
        <p>{{item.time}}</p>
        <span>+10</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Detail",
      data(){
          return{
            arr:[
              {phone:'18712340708',time:'2017-08-10'},
              {phone:'18712340708',time:'2017-08-10'},
            ]
          }
      }
    }
</script>

<style scoped>
  .detail{
    background-color: #fff;
  }
  .detail header{
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
  .detail header img{
    position: absolute;
    width: .25rem;
    left: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .content{
    margin-top: 1rem;
  }
  .content div{
    padding: .35rem .2rem 0;
    background-color: #fff;
    color: #4d4d4d;
    position: relative;
    border-bottom: 1px #ccc solid;
  }
  .content p:nth-of-type(1){
    font-size: .3rem;
  }
  .content p:nth-of-type(2){
    font-size: .27rem;
    color: #808080;
  }
  .content span{
    font-size: .5rem;
    position: absolute;
    top: 0;
    bottom: 0;
    right: .2rem;
    margin: auto;
    color: #e53e42;
    line-height: 1rem;
  }
</style>
