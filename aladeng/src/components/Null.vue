<template>
  <div class="null">
    <div></div>
    <span>您暂时没有订单哦</span>

  </div>
</template>

<script>
    export default {
        name: "Null"
    }
</script>

<style scoped>
  .null{
    margin-top: .9rem;
    text-align: center;
  }
  .null div{
    width: 3.15rem;
    height: 2.5rem;
    margin:auto;
    background-color: #fbd5d5;
  }
  .null span{
    width: 100%;
    color: #808080;
    font-size: .2rem;

    line-height: 1rem;
  }
</style>
