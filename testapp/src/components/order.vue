<template>
    <div class="tab">
        <router-link to="/product">产品列表</router-link>
        订单信息
    </div>
</template>

<script>
export default {
    name:'order',
    data(){
        return
    }
}
</script>
<style  scoped>
.tab{
    border: 1px red solid;
    width: 300px;
    min-height: 500px;
    margin: 0 auto;
    margin-top: 10px;
}
</style>