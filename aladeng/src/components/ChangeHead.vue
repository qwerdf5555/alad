<template>
  <div class="head">
    <header>
      <p>头像</p>
      <router-link to="/personinfo">
        <img src="static/img/personal/back.png" alt="" class="back">
      </router-link>
      <router-link to="/changehead1">
        <img src="static/img/personinfo/more.png" alt="" class="more">
      </router-link>
    </header>
    <p>图片<img src="" alt="" v-show="false"></p>
    <router-view></router-view>
  </div>
</template>

<script>

    export default {
        name: "ChangeHead",

    }
</script>

<style scoped>
  .head header{
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
  .head header .back{
    position: absolute;
    width: .25rem;
    left: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .head header .more{
    position: absolute;
    width: .4rem;
    right: .2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .head > p{
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin: 1.7rem auto;
    text-align: center;
    line-height: 5rem;
    font-size: .45rem;
    background-color: #fff;
    color: #666666;
    position: relative;
    overflow: hidden;
  }
  .head > p img{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
</style>
