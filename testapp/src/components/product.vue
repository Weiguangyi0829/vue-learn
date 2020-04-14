<template>
  <div>
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