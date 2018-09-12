<template>
  <div class="server2">
  <header>
    <p>收货地址</p>
    <router-link to="/person">
      <img src="static/img/personal/back.png" alt="">
    </router-link>
    <span><router-link to="/site">添加新地址</router-link></span>
  </header>
    <div class="null" v-show="!bol">
      <img src="static/img/server/site.png" alt="">
      <p>添加新地址</p>
    </div>
    <div v-show="bol">
      <div v-for="(item,index) in msg" class="site">
        <p><span>{{item.name}}</span><span>{{item.phone}}</span></p>
        <p>{{item.site}}</p>
        <div class="">
          <p><img :src="item.bol?'static/img/server/issite.png':'static/img/server/notsite.png'" alt="" @click="def(index)">设为默认</p>
          <span @click="del(index)"><img src="static/img/server/del.png" alt="">删除</span>
          <span><img src="static/img/server/edit.png" alt="">编辑</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Server2",
      data(){
          return{
            bol:true,
            msg:[
              {name:'李四',phone:'15012340708',site:'河南省新乡市红旗区南干道与新中大道交叉口B座10楼102室；邮编453000',bol:true},
              {name:'李四',phone:'15012340708',site:'河南省新乡市红旗区南干道与新中大道交叉口B座10楼102室；邮编453000',bol:false},
              {name:'李四',phone:'15012340708',site:'河南省新乡市红旗区南干道与新中大道交叉口B座10楼102室；邮编453000',bol:false}
            ],
            src:'static/img/server/issite.png'
          }
      },
      methods:{
          def(index){
            for (var i = 0; i < this.msg.length; i++){
              this.msg[i].bol = false;
            }
            this.msg[index].bol = true;
          },
          del(i){
            if(this.msg[i].bol){
              this.msg.splice(i,1);
              if (this.msg.length) {
                this.msg[0].bol = true;
              }
            }else{
              this.msg.splice(i,1);
            }
            console.log(this.bol);
            if(!this.msg.length){
              this.bol = false;
            }

          }
      }
    }
</script>

<style scoped>
  .server2 header{
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
  .server2 header img{
    position: absolute;
    width: .25rem;
    left: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .server2 header span{
    position: absolute;
    right: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
    font-size: .35rem;

  }
  .server2 header span a{
    color: #fff;
  }
  .null{
    text-align: center;
  }
  .null img{
    margin-top: 3.5rem;
    width: 2rem;
  }
  .null p{
    width: 2.8rem;
    height: .8rem;
    line-height: .8rem;
    font-size: .4rem;
    color: #4d4d4d;
    border: 1px #4d4d4d solid;
    border-radius: .4rem;
    margin: .5rem auto;
  }
  .server2 >div{
    margin-top: 1rem;
  }
  .site{
    margin-bottom: .2rem;
    font-size: .3rem;
    background-color: #fff;
    color: #808080;
  }
  .site > p:nth-of-type(1){
    padding: 0 .2rem;
    height: .8rem;
    line-height: .8rem;
  }
  .site p:nth-of-type(1) span{
    margin-right: 1rem;
  }
  .site p:nth-of-type(2){
    font-size: .25rem;
    padding: 0 .2rem;
    line-height: .4rem;
  }
  .site div{
    height: .9rem;
    position: relative;
    padding: .25rem .2rem;
    box-sizing: border-box;
    border-top: 1px #ccc solid;
    margin-top: .1rem;
  }
  .site div p{
    height: .8rem;
    line-height: .8rem;
    position: absolute;
    left: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .site div span{
    float: right;
    vertical-align: middle;
    margin-left: .3rem;
  }
  .site div img{
    margin-right: .1rem;
    height: .3rem;
    vertical-align: -.05rem;
  }
</style>
