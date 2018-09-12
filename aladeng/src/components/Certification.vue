<template>
<div class="certification">
  <header>
    <p>身份实名认证</p>
    <router-link to="/server1">
      <img src="static/img/personal/back.png" alt="">
    </router-link>
  </header>
  <div class="name">
    <p>身份证信息<span>请确保身份证信息真实有效，否则无法通过审核</span></p>
    <p><input type="text" placeholder="您的姓名（请填写身份证上的真实姓名）"></p>
    <p><input type="text" placeholder="您的身份证号（将加密处理）" @change="id"></p>
  </div>
  <div class="card">
    <p>身份证照片<span>上传身份证正反面照片让通关更便捷</span></p>
    <div>
      <div class="aa">
        <img src="static/img/server/send1.png" alt="">
        <p>请上传</p>
      </div>
      <div  class="aa">
        <img src="static/img/server/send2.png" alt="">
        <p>请上传</p>
      </div>
      <div class="bb">
        <p><span>*</span>上传前请先查看样张</p>
        <div class="cont" >
        <p><img src="static/img/server/card1.png" alt=""></p>
        <p>如上图所示：</p>
        <ol>
          <li>1.请保证图片焦点清晰，不可太小或模糊不清</li>
          <li>2.不可有反光影响文字显示</li>
          <li>3.请让四个边角完整显示；不要用手遮挡身份证</li>
          <li>4.请不要使用复印件或扫描件</li>
        </ol>
        </div>
      </div>
      <div class="bb">
        <p><router-link to="###"><span><img src="static/img/server/help.png" alt="">查看更多帮助内容</span></router-link> </p>
        <div class="cont">
        <p><img src="static/img/server/card2.png" alt=""></p>
        <p>如上图所示：</p>
        <ol>
          <li>1.请保证图片焦点清晰，不可太小或模糊不清</li>
          <li>2.不可有反光影响文字显示</li>
          <li>3.请让四个边角完整显示；不要用手遮挡身份证</li>
          <li>4.请不要使用复印件或扫描件</li>
        </ol>
        </div>
      </div>
    </div>
  </div>
  <div class="why">
    <p>为什么需要实名认证？</p>
    <ul>
      <li>·根据海关规定，购买跨境商品需要办理清关手续，需要您上传身份证信息用于商品入境申报真实的姓名和身份信息才能确保您的包裹顺利通过海关检查</li>
      <li>·声明：阿拉灯负责提交信息，并对您的身份信息保密，绝不传播或用于其他地方请放心填写。</li>
    </ul>
  </div>
  <div class="put">
   <router-link to="###"><p>提交</p></router-link>
  </div>
</div>
</template>

<script>
    export default {
        name: "Certification",
      methods:{
          id($event){
            if (!/\d{18}/.test($event.target.value)) {
              $event.target.value = '';
            }
          }
      }
    }
</script>

<style scoped>
  .certification header{
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
  .certification header img{
    position: absolute;
    width: .25rem;
    left: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .name{
    width: 100%;
    margin-top: 1rem;
    overflow: hidden;
  }
  .name p:nth-of-type(1){
    font-size: .25rem;
    height: .6rem;
    line-height: .6rem;
    padding: 0 .2rem;
  }
  .name p:nth-of-type(1) span{
    display: inline-block;
    color: #f00;
    font-size: .2rem;
    height: .6rem;
    line-height: .6rem;
    margin-left: .4rem;
  }
  .name input{
    width: 100%;
    height: .8rem;
    background-color: #fff;
    border-bottom: 1px #ccc solid;
    font-size: .3rem;
    padding: 0 .2rem;
  }
  .card > p{
    font-size: .25rem;
    height: .6rem;
    line-height: .6rem;
    padding: 0 .2rem;
  }
  .card > p span{
    display: inline-block;
    color: #f00;
    font-size: .2rem;
    height: .6rem;
    line-height: .6rem;
    margin-left: .4rem;
  }
  .card > div{
    background-color: #fff;
    overflow: hidden;
  }
  .aa{
    width: 2.8rem;
    height: 2rem;
    border: 1px #ccc solid;
    border-radius: .1rem;
    margin-top: .4rem;
    margin-left: .5rem;
    float: left;
    text-align: center;
  }
  .aa img{
    width: 1.1rem;
    margin-top: .4rem;
  }
  .aa p{
    font-size: .25rem;
    margin-top: .2rem;
    color: #ccc;
  }
  .bb{
    width: 2.2rem;
    margin: .4rem .6rem .2rem;
    float: left;
  }
  .bb > p{
    padding: .2rem;
    font-size: .16rem;
  }
  .bb > p{
    color: #f00;
  }
  .cont p:nth-of-type(1){
    height: 1.6rem;
    background-color: #f2f2f2;
    position: relative;
  }
  .cont p:nth-of-type(1) img{
    position: absolute;
    width: 1.6rem;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .cont p:nth-of-type(2){
    font-size: .16rem;
    line-height: .3rem;
  }
  .cont ol{
    font-size: .1rem;
    line-height: .2rem;
  }
  .cont{
    border: 1px #ccc solid;
    padding-bottom: .1rem;
  }
  .why{
    margin: .2rem 0;
  }
  .why p{
    text-align: center;
    color: #f00;
    font-size: .3rem;
    background-color: #f9d3d4;
  }
  .why ul{
    list-style: disc;
    background-color: #fff;
  }
  .why li{
    list-style-type: disc;
    padding: .2rem;
    font-size: .2rem;
    line-height: .3rem;
  }
  .put{
    height: .9rem;
    background-color: #fff;
    position: relative;
  }
  .put p{
    width: 2rem;
    height: .5rem;
    font-size: .3rem;
    line-height: .5rem;
    background-color: #f00;
    color: #fff;
    text-align: center;
    border-radius: .25rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
</style>
