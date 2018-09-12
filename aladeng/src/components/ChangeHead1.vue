<template>
    <div class="change">
      <div>
        <p>从手机相册中选择</p>
        <p>拍照</p>
        <p><router-link to="/changehead">取消</router-link></p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ChangeHead1"
    }
</script>

<style scoped>
  .change{
    width: 100%;
    height: 12.8rem;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    left: 0;
    top: 0;
  }
  .change div{
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: #fff;
  }
  .change p {
    height: 1rem;
    line-height: 1rem;
    font-size: .4rem;
    text-align: center;
    color: #808080;
    border-bottom: 1px #ccc solid;
  }
  .change a{
    width: 100%;
    color: #808080;
  }
</style>
