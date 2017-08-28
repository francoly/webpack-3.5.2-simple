<template>
    <div id="app">
        <h1>{{msg}}</h1>
        <router-link to="/goods_detail/12313" tag="p">
            <a href="javascript:;">ddd</a>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data:function () {
            return {
                msg: 'Welcome to Your Vue.js goods_list',

            }
        }
    }
</script>

<style lang="less">
    @color:red;
    body{
        background-color:@color;
    }
</style>
