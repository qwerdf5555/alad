<template>
    <div class="list">
      <p v-for="item in list" v-show="item.consume>=500*$route.params.num&&item.consume<500*($route.params.num+1)">
        <span>{{item.time}}</span>
        <span>消费：￥{{item.consume}}</span>
        <span>排号：{{item.code}}</span>
      </p>
    </div>
</template>

<script>
    export default {
        name: "RankList",
      data(){
          return{
            list:[
              {code:'10',consume:100,time:'2017-06-26'},
              {code:'10',consume:100,time:'2017-06-26'},
              {code:'10',consume:100,time:'2017-06-26'},
              {code:'10',consume:600,time:'2017-06-26'},
              {code:'10',consume:600,time:'2017-06-26'},
            ],
          }
      }
    }
</script>

<style scoped>
.list{
  background-color: #fff;
}
  .list p{
    font-size: .33rem;
    height: .8rem;
    line-height: .8rem;
    color: #808080;
    display: flex;
    border-bottom: 1px #ccc solid;
  }
  .list span{
    flex: 1;
    text-align: center;
  }
</style>
