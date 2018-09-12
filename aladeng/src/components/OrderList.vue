<template>
    <div class="orderList">
      <null v-if="!bol"></null>
      <div class="list" v-else>

      </div>
    </div>
</template>

<script>
    import Null from "./Null";
    import List1 from "./List1";
    export default {
        name: "OrderList",
      components: {List1, Null},
      data(){
          return{
            bol:true
          }
      }
    }
</script>

<style scoped>

</style>
