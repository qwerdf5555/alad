<template>
    <div class="set">
      <header>
        <p>设置</p>
        <router-link to="/person">
          <img src="static/img/personal/back.png" alt="" class="back">
        </router-link>
      </header>
      <div class="setList">
        <router-link to="/account">
          <p>账户管理<img src="static/img/personal/more.png" alt=""></p>
        </router-link>
        <router-link to="/resetcode1">
          <p>修改登录密码<img src="static/img/personal/more.png" alt=""></p>
        </router-link>
        <router-link to="###">
          <p @click="clear">清除缓存<span>{{cache|cache}}</span></p>
        </router-link>
        <router-link to="###">
          <p>阿拉灯平台用户协议<img src="static/img/personal/more.png" alt=""></p>
        </router-link>
        <router-link to="###">
          <p>个人委托协议<img src="static/img/personal/more.png" alt=""></p>
        </router-link>
        <router-link to="###">
          <p @click="inspect">检查更新<img src="static/img/personal/more.png" alt=""></p>
        </router-link>
        <p v-show="bol1">{{str1}}</p>
        <p v-show="bol2">{{str2}}</p>
      </div>
      <div class="clear" v-show="bol">
        <div>
          <p>确认清除缓存？</p>
          <p><span @click="clear1(false)">取消</span><span class="red" @click="clear1(true)">确认</span></p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Set",
      data(){
          return{
            cache:0,
            bol:false,
            bol1:false,
            bol2:false,
            str1:'清除成功',
            str2:'检查中...'
          }
      },
    methods:{
      clear(){
        this.bol = true;
      },
      clear1(bol){
        if (bol){
        this.bol1 = true;
        var t1 = setTimeout(()=>{
          this.bol1 = false;
          this.cache = 0;
          clearTimeout(t1);
        },1500);
        }
        this.bol = false;
      },
    inspect(){
        this.str2 = '检查中...';
      this.bol2 = true;
        var t2 = setTimeout(()=>{
          this.str2 = '已是最新版本';
          var t3 = setTimeout(()=>{
            this.bol2 = false;
            clearTimeout(t2);
            clearTimeout(t3);
          },1500);
        },1500);
    }
    },
      filters:{
          cache(num){
            if(num>1024){
              return Math.floor(num/1024) + 'M';
            }else {
              return num+'KB'
            }
          }
      },
      mounted(){

          if (typeof localStorage.cache == 'undefined'){
            this.cache = 10;
          } else {
            this.cache = localStorage.cache;
          }
      }

    }
</script>

<style scoped>
  .set header{
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
  .set header .back{
    position: absolute;
    width: .25rem;
    left: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .setList{
    margin-top: 1.2rem;
    border-top: 1px #ccc solid;
  }
  .setList p{
    padding: 0.2rem;
    height: .9rem;
    line-height: .9rem;
    font-size: .3rem;
    position: relative;
    border-bottom: 1px #ccc solid;
    background-color: #fff;
  }
  .setList p img{
    height: .25rem;
    position: absolute;
    top: 0;
    bottom: 0;
    right: .2rem;
    margin: auto;
  }
  .setList p span {
    float: right;
  }
  .clear{
    width: 100%;
    height: 12.8rem;
    background-color: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
  }
  .clear div{
    width: 4rem;
    height: 2.5rem;
    position: absolute;
    top: 4.2rem;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #fff;
    color: #808080;
    font-size: .35rem;
    text-align: center;

  }
  .clear p:nth-of-type(1){
    height: 1.7rem;
    line-height: 1.7rem;
    border-bottom: 1px #ccc solid;
  }
  .clear p:nth-of-type(2){
    height: .8rem;
    display: flex;
  }
  .clear span{
    flex: 1;
    line-height: .8rem;
    text-align: center;
    border-right: 1px #ccc solid;
    position: relative;
    left: 1px;
  }
  .clear .red{
    color: #f00;
  }
  .setList > p{
    width: 2rem;
    height: .6rem;
    font-size: .3rem;
    line-height: .6rem;
    text-align: center;
    background-color: rgba(0,0,0,.5);
    margin: .5rem auto;
    color: #fff;
  }
</style>
