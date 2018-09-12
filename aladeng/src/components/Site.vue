<template>
  <div class="site">
  <header>
    <p>添加新地址</p>
    <router-link to="/server2">
      <img src="static/img/personal/back.png" alt="">
    </router-link>
    <span @click="save"><router-link to="###">完成</router-link></span>
  </header>
    <div class="content">
      <p>请使用您的真实姓名，否则订单将无法发出</p>
      <p><input type="text" placeholder="请填写真实姓名"></p>
      <ul>
        <li><input type="text" placeholder="请填写手机号" @change="judge(1,$event)"></li>
        <li><router-link to="###"> <p><span id="city">请选择城市</span><img src="static/img/server/more.png" alt=""></p></router-link></li>
        <li><input type="text" placeholder="请填写详细地址"></li>
        <li><input type="text" placeholder="请填写邮编" @change="judge(0,$event)"></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Site",
      data(){
          return{
            new:{name:'',phone:'',city:'',site:'',postcode:''}
          }
      },
      methods:{
          judge(bol,$event){
            if(bol){
              if (!/1\d{10}/.test($event.target.value)){
                $event.target.value='';
              }
            }else {
              if (!/\d{6}/.test($event.target.value)){
                $event.target.value='';
              }
            }
          },
          save(){
            var inps = document.querySelectorAll('input');
            for (var i = 0; i < inps.length; i++){
              if (!inps[i].value) {
                return;
              }
            }
            if (document.getElementById('city').innerText == '请选择城市') {
              return;
            }
            this.new.name = inps[0].value;
            this.new.phone = inps[1].value;
            this.new.site = inps[2].value;
            this.new.postcode = inps[3].value;
            this.new.city = document.getElementById('city').innerText
          }
      }
    }
</script>

<style scoped>
  .site{
    overflow: hidden;
  }
  .site header{
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
  .site header img{
    position: absolute;
    width: .25rem;
    left: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .site header span{
    position: absolute;
    right: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
    font-size: .35rem;

  }
  .site header span a{
    color: #fff;
  }
  .content{
    margin-top: 1rem;
    font-size: .35rem;
    color: #808080;
  }
  .content > p:nth-of-type(1){
    padding: 0 .2rem;
    font-size: .3rem;
    color: #f00;
    height: .75rem;
    line-height: .75rem;
  }
  .content > p:nth-of-type(2) input{
    width: 100%;
    padding: .2rem;
    height: 1rem;
    line-height: 1rem;
    margin-bottom: .2rem;
    border-bottom: 1px #ccc solid;
  }
  .content li{
    border-bottom: 1px #ccc solid;
  }
  .content li input{
    width: 100%;
    padding: .2rem;
    height: 1rem;
    line-height: 1rem;
  }
  .content li p{
    height: 1rem;
    line-height: 1rem;
    background-color: #fff;
    padding: .2rem;
    position: relative;
  }
  .content li p img{
    height: .3rem;
    position: absolute;
    right: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
</style>
