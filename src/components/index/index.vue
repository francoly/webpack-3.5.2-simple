<template>
    <div id="app">
        <h1>{{msg}}</h1>
        <input type="file" id="file" accept="image/*"  />
    </div>
</template>

<script>
    import $ from 'jquery'
    console.log($('body'));
    export default {
        name: 'app',
        data:function () {
            return {
                msg: 'Welcome to Your Vue.js App  6666666'
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
