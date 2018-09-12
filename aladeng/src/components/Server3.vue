<template>
<div class="server3">
  <header>
    <p>关注公众号</p>
    <router-link to="/person">
      <img src="static/img/personal/back.png" alt="">
    </router-link>
  </header>
  <div class="content">
    <p>微信服务号：</p>
    <p>aladeng</p>
    <p>长按可复制</p>
    <div class="code">
      <img src="static/img/server/codebgimg.png" alt="">
      <img src="static/img/server/code.png" alt="" @touchstart.prevent="lang">
    </div>
    <p>您可以：通过微信”扫一扫”扫描上方二维码，找到我们</p>
    <div class="footer">
      <p>关注阿拉灯微信服务号</p>
      <p><span>发货、物流、补货</span>通知早知道</p>
    </div>

  </div>
  <p v-show="bol">已复制</p>
</div>
</template>

<script>
    export default {
        name: "Server3",
      data(){
          return{
            bol:false,
          }
      },
      methods:{
        lang(){
          var t1 = setTimeout(()=>{
            this.bol = true;
            var t2 = setTimeout(()=>{
              this.bol = false;
            },1500);
          },1500);
        }
      }
    }
</script>

<style scoped>
  .server3 header{
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
  .server3 header img{
    position: absolute;
    width: .25rem;
    left: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .content{
    margin-top: 1.4rem;
    font-size: .35rem;
    text-align: center;
    color: #808080;
  }
  .content p:nth-of-type(1){
    color: #4d4d4d;
  }
  .content > p:nth-of-type(2){
    color: #f00;
  }
  .content p:nth-of-type(4){
    font-size: .26rem;
  }
  .content .code{
    height: 5.4rem;
    position: relative;
    margin-top: .6rem;
  }
  .code img{
    position: absolute;
  }
  .code img:nth-of-type(1){
    width: 5rem;
    left: 1rem;
    top: .4rem;
  }
  .code img:nth-of-type(2){
    width: 2rem;
    left: 2.9rem;
    top: 1.7rem;
  }
  .footer{
    width: 6rem;
    margin: .3rem auto;
    padding-top: .4rem;
    border-top: 1px #ccc solid;
  }
  .footer p:nth-of-type(1){
    font-size: .26rem;
    line-height: .4rem;
  }
  .footer p:nth-of-type(2){
    font-size: .26rem;
  }
  .footer p:nth-of-type(2) span{
    color: #4d4d4d;
    font-size: .3rem;
  }
  .server3 > p{
    width: 2rem;
    height: .8rem;
    font-size: .4rem;
    line-height: .8rem;
    text-align: center;
    background-color: rgba(0,0,0,.5);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 3rem;
    margin: auto;
  }

</style>
