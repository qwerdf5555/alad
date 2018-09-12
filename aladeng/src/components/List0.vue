<template>
  <div class="orderList">
    <null v-if="!bol"></null>
    <div class="list" v-else>
      <list1></list1>
      <list2></list2>
      <list3></list3>
      <list4></list4>
      <list5></list5>
    </div>
  </div>
</template>

<script>
  import List5 from "./List5";
  import List1 from "./List1";
  import List2 from "./List2";
  import List3 from "./List3";
  import List4 from "./List4";
  export default {
    name: "OrderList",
    components: {List4, List3, List2, List1, List5},
    data(){
      return{
        bol:true
      }
    }
  }
</script>

<style scoped>

</style>
