<template>
  <div class="city">
  <header>
    <p>选择城市</p>
    <router-link to="/server2">
      <img src="static/img/personal/back.png" alt="">
    </router-link>
    <span @click="save"><router-link to="###">完成</router-link></span>
  </header>
  </div>
</template>

<script>
    export default {
        name: "City"
    }
</script>

<style scoped>

</style>
