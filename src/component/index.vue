<template>
    <div id="app">
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data:function () {
            return {
                msg: 'Welcome to Your Vue.js App'
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
