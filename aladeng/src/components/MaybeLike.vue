<template>
<div class="maybe">
  <p>为你推荐<img src="static/img/maybe/line.png" alt=""></p>
  <div v-for="item in maybeLike" class="gd">
    <router-link to="###">
      <div>
    <img :src="item.src" alt="">
      </div>
    <p>{{item.name}}</p>
    <p class="red">￥{{item.price}}</p>
    </router-link>
  </div>
</div>
</template>

<script>
    export default {
        name: "MaybeLike",
      data(){
          return{
            maybeLike:[
              {name:'野生蓝莓果汁饮料',src:'static/img/maybe/blueberry.png',price:'100'},
              {name:'原味坚果',src:'static/img/maybe/nut.png',price:'99'}
            ]
          }
      }
    }
</script>

<style scoped>
.maybe{
  width: 100%;
  overflow: hidden;
  padding-bottom: .4rem;
  color: #808080;
  background-color: #fff;
}
  .maybe > p{
    height: .8rem;
    font-size: .4rem;
    line-height: .8rem;
    text-align: center;
    position: relative;
  }
.maybe > p img{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin:auto;
  width: 2.8rem;
}
  .maybe .gd{
    float: left;
    width: 3.3rem;
    height: 2.8rem;
    margin-left: .2rem;
    border: 1px #ccc solid;
    text-align: center;
  }
.gd div{
  height: 2rem;
  position: relative;
}
  .gd img{
    width: 1.6rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .gd p{
    font-size: .25rem;
  }
  .gd .red{
    color: #f00;
  }
</style>
