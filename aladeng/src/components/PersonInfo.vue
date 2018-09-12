<template>
    <div class="myInfo">
      <header>
        <p>个人信息</p>
        <router-link to="/person">
          <img src="static/img/personal/back.png" alt="">
        </router-link>
      </header>
      <div class="per">
        <router-link to="/changehead">
      <div class="head">
        <span>头像</span>
        <span>头像<br/>图片<img :src="person.src" alt="" v-show="person.src"></span>
        <img src="static/img/personinfo/next.png" alt="" class="next">
      </div>
        </router-link>
        <router-link to="changename">
      <div>
        <span>昵称</span>
        <span>{{person.name}}</span>
        <img src="static/img/personinfo/next.png" alt="" class="next">
      </div>
        </router-link>
          <router-link to="prcode">
      <div>
        <span>我的二维码</span>
        <span><img src="static/img/personinfo/qrcode.png" alt=""></span>
        <img src="static/img/personinfo/next.png" alt="" class="next">
      </div>
          </router-link>
            <router-link to="/invitecode">
      <div>
        <span>我的邀请码</span>
        <span></span>
        <img src="static/img/personinfo/next.png" alt="" class="next">
      </div>
            </router-link>
              <router-link to="bindphone">
      <div>
        <span>手机号</span>
        <span>{{person.phone?person.phone:'未绑定'}}</span>
        <img src="static/img/personinfo/next.png" alt="" class="next">
      </div>
              </router-link>


      </div>

    </div>
</template>

<script>
    export default {
        name: "PersonInfo",
      data(){
          return{
            person:{
              name:'',
              src:'static/img/personal/bgimg.png',
              QRcode:'',
              invitecode:'',
              phone:''
            }
          }
      },
      mounted(){
          if(this.$route.params.name){
            this.person.name = this.$route.params.name;
          }
        if (localStorage.nickname) {
          this.person.name = localStorage.nickname;
        }
        if (localStorage.phone) {
          this.person.phone = localStorage.phone;
        }
      }
    }
</script>

<style scoped>
  .myInfo header{
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
  .myInfo header img{
    position: absolute;
    width: .25rem;
    left: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .per{
    margin-top: 1rem;
    font-size: .3rem;
    background-color: #fff;
  }
  .per div{
    height: 1rem;
    line-height: 1rem;
    position: relative;
    border-bottom: 1px #ccc solid;
    padding: 0 .2rem;
    position: relative;
  }
  .per .next{
    height: .22rem;
    position: absolute;
    top: 0;
    bottom: 0;
    right: .2rem;
    margin: auto;
  }
  .per span:nth-of-type(2){
    float: right;
    margin-right: .4rem;
  }
  .per span:nth-of-type(2) img{
    vertical-align: middle;
  }
  .per .head{
    height: 1.2rem;
  }

  .head span{
    line-height: 1.2rem;
  }
  .head span:nth-of-type(2){
    width: 1rem;
    height:.6rem;
    border-radius: 50%;
    border: 1px #ccc solid;
    line-height: .3rem;
    text-align: center;
    padding: .2rem 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: .6rem;
    margin: auto;
    overflow: hidden;
  }
  .per .head span:nth-of-type(2) img{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

</style>
