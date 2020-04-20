<template>
  <div class="tab">
     <router-link to="/order">订单列表</router-link>
    <ul>
      <li v-for="product in products" :key="product.id">{{product.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "product",
  data() {
    return {
      products: [
        { id: "1", name: "手机" },
        { id: "2", name: "电脑" },
        { id: "3", name: "ps4" }
      ]
    };
  }
};
</script>
<style  scoped>
.tab{
    border: 1px red solid;
    width: 300px;
    min-height: 500px;
    margin: 0 auto;
    margin-top: 10px;
    
}
li{
  list-style: none;
}
</style>