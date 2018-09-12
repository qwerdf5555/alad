<template>
    <div class="withDr">
      <div>
        <p>请选择提现方式</p>
        <div class="choose">
          <p @click="choose(1)"><img src="static/img/withdraw/right.png" alt="" v-show="bol"></p>
          <div class="chse">
            <p>提现到微信</p>
            <p>（提现到微信，手续费率为0.29，额外扣除10%服务费2-3个工作日到账。）</p>
          </div>
        </div>
        <div class="choose">
          <p @click="choose(0)"><img src="static/img/withdraw/right.png" alt="" v-show="!bol"></p>
          <div class="chse">
            <p>提现到支付宝</p>
            <p>（提现到微信，手续费率为0.36，额外扣除10%服务费4-6个工作日到账。）</p>
          </div>
        </div>
        <div class="end">
          <router-link to="/withdraw"><p class="blue">提现</p></router-link>
          <router-link to="/withdraw"><p>取消</p></router-link>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "WithDr",
      data(){
          return{
            bol:true,
          }
      },
      methods:{
          choose(bol){
            if(bol){
              this.bol = true;
            }else{
              this.bol = false;
            }
          }
      }
    }
</script>

<style scoped>
  .withDr{
    width: 100%;
    height: 12.8rem;
    color: #666666;
    background-color: rgba(0,0,0,0.3);
    position: fixed;
    top: 0;
  }
.withDr>div{
  width: 100%;
  height: 6rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
}
  .withDr>div>p{
    height: .8rem;
    background-color: #f00;
    color: #fff;
    font-size: .35rem;
    text-align: center;
    line-height: .8rem;
  }
  .choose{
    height: 1.2rem;
    position: relative;
    padding: 0 .75rem;
    margin-top: .4rem;
  }
  .choose > p{
    width: .3rem;
    height: .3rem;
    border: 1px solid #ccc;
    border-radius: 50%;
    position: absolute;
    top: .4rem;
    left: .2rem;
  }
  .choose > p img{
    width: 100%;
  }
  .chse p:nth-of-type(1){
    font-size: .3rem;
  }
  .chse p:nth-of-type(2){
    font-size: .23rem;
  }
  .end{
    width: 100%;
    height: 1.6rem;
    position: absolute;
    bottom: 0;
  }
  .end p{
    width: 4.8rem;
    height: .75rem;
    margin: auto;
    text-align: center;
    color: #666666;
    line-height: .75rem;
    font-size: .3rem;
  }
  .end .blue{
    background-color: #61a7ea;
    color: #fff;
  }
</style>
