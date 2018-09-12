<template>
  <div class="server1">
    <header>
      <p>身份实名认证</p>
      <router-link to="/person">
        <img src="static/img/personal/back.png" alt="">
      </router-link>
      <span><router-link to="/certification">添加新身份</router-link></span>
    </header>
    <div class="content" v-show="bol">
      <div v-show="bol1">
        <p><span>{{data.name}}</span><span>{{data.id|id}}</span></p>
        <p>
          <span><img :src="data.srcz" alt="" v-show="data.srcz">身份证正面照</span>
          <span><img :src="data.srcf" alt="" v-show="data.srcf">身份证反面照</span>
        </p>
        <p>

          <span @click="del(0)"><img src="static/img/server/del.png" alt="">删除</span>
          <span><img src="static/img/server/edit.png" alt="">编辑</span>
        </p>
      </div>

      <div v-show="bol2">
        <p><span>{{data.name}}</span><span>{{data.id|id}}</span></p>
        <p>
          <span><img :src="data.srcz" alt="" v-show="data.srcz">身份证正面照</span>
          <span><img :src="data.srcf" alt="" v-show="data.srcf">身份证反面照</span>
        </p>
        <p>

          <span @click="del(1)"><img src="static/img/server/del.png" alt="">删除</span>
          <span><img src="static/img/server/edit.png" alt="">编辑</span>
        </p>
        <p>审核通过</p>
      </div>

    </div>
    <div class="null" v-show="!bol">
      <p></p>
      <p>暂无身份信息，请添加</p>
      <p><router-link to="/certification">添加新身份信息</router-link></p>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Server1",
      data(){
          return{
            bol:false,
            bol1:true,
            bol2:true,
            data:{name:'李四',id:'410781111111111111',srcz:'',srcf:''}
          }
      },
      methods:{
          del(i){
            if (i){
              this.bol2=false;
            } else {
              this.bol1=false;
            }
          }
      },
      filters:{
          id(id){
            var arr = id.split('');
            var str = '';
            for (var i = 0; i < arr.length; i++){
              if (i > 5){
                arr.splice(i,1,'*');
              }
            }
            return arr.join('');
          }
      }
    }
</script>

<style scoped>
  .server1 header{
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
  .server1 header img{
    position: absolute;
    width: .25rem;
    left: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .server1 header span{
    position: absolute;
    right: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
    font-size: .35rem;

  }
  .server1 header span a{
  color: #fff;
  }
  .content{
    margin-top: 1rem;
    font-size: .35rem;
    color: #808080;


  }

  .content div p:nth-of-type(1){
    padding: .2rem .2rem 0;
  }
  .content div p:nth-of-type(1) span{
    margin-right: .8rem;
  }
  .content div p:nth-of-type(2){
    margin: .35rem 0;
    padding: 0 .2rem;
  }
  .content div p:nth-of-type(2) span{
    display: inline-block;
    width: 2rem;
    height: 1.2rem;
    text-align: center;
    line-height: 1.2rem;
    font-size: .2rem;
    border: 1px #ccc solid;
    margin-right: .2rem;
    position: relative;
  }
  .content div p:nth-of-type(2) img{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .content div p:nth-of-type(3){
    border-top: 1px #ccc solid;
    height: .8rem;
    line-height: .8rem;
    padding: 0 .2rem;
  }
  .content div p:nth-of-type(3) img{
    height: .35rem;
    vertical-align: -.05rem;
    margin: 0 .1rem;
  }
  .content div p:nth-of-type(3) span{
    float: right;
    margin-left: .3rem;
  }
  .content div{
    position: relative;
    margin-bottom: .2rem;
    background-color: #fff;
  }

  .content div p:nth-of-type(4){
    color: #62bb32;
    font-size: .45rem;
    position: absolute;
    right: .2rem;
    top: .2rem;
  }
  .null{
    margin-top: 2rem;
    text-align: center;
  }
  .null p:nth-of-type(1){
    width: 3.5rem;
    height: 3rem;
    background-color: #fee3e3;
    margin: auto;
  }
  .null p:nth-of-type(2){
    font-size: .28rem;
    line-height: .8rem;
    color: #808080;
  }
  .null p:nth-of-type(3){
    width: 3rem;
    height: .6rem;
    line-height: .6rem;
    background-color: #fff;
    color: #000;
    border: 1px #000 solid;
    border-radius: .3rem;
    font-size: .35rem;
    margin: auto;
  }
</style>
