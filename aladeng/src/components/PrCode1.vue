<template>
  <div class="prd">
    <div>
      <p>分享二维码</p>
      <p>保存到手机</p>
      <p><router-link to="/prcode">取消</router-link></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PrCode1"
  }
</script>

<style scoped>
  .prd{
    width: 100%;
    height: 12.8rem;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    left: 0;
    top: 0;
  }
  .prd div{
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: #fff;
  }
  .prd p {
    height: 1rem;
    line-height: 1rem;
    font-size: .4rem;
    text-align: center;
    color: #808080;
    border-bottom: 1px #ccc solid;
  }
  .prd a{
    width: 100%;
    color: #808080;
  }
</style>
