<template>
    <div id="app">
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
    import $ from 'jquery'
    console.log($('body'));
    export default {
        name: 'app',
        data:function () {
            return {
                msg: 'Welcome to Your Vue.js goods_detail'
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
