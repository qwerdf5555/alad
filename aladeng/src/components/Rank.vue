<template>
    <div class="lank">
      <header>
        <p>我的返金排行</p>
        <router-link to="/person">
          <img src="static/img/personal/back.png" alt="">
        </router-link>
      </header>
      <div class="content">
        <ul>
          <li v-for="(item,index) in list" @click="btn(index)"><router-link :to="'/ranklist/'+index" :class="{red:index==indexC}">{{item}}</router-link></li>
          <img src="static/img/personal/more.png" alt="">
        </ul>
        <rank-list></rank-list>
      </div>
    </div>
</template>

<script>
    import RankList from "./RankList";
    export default {
        name: "Rank",
      components: {RankList},
      data(){
          return{
            list:['0~499元','500~999元','1000~1499元'],
            indexC:0,
          }
      },
      methods:{
          btn(i){
            this.indexC = i;
          }
      }
    }
</script>

<style scoped>
  .lank header{
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
  .lank header img{
    position: absolute;
    width: .25rem;
    left: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .content{
    margin-top: 1rem;
    background-color: #fff;
  }
  .content ul{
    position: relative;
    height: .8rem;
    line-height: .8rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: .3rem;
    border-bottom: 1px #ccc solid;
    color: #808080;
  }
  .content li{
    /*flex: 1;*/
    text-align: center;
  }
  .content ul img{
    height: .2rem;
    position: absolute;
    top: 0;
    bottom: 0;
    right: .2rem;
    margin: auto;
  }
  .content a{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .content .red{
    color: #f00;
  }
</style>
