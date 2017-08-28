<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
    import $ from 'jquery'
    console.log($('body'));
    export default {
        name: 'app',
        data:function () {
            return {
                msg: 'Welcome to Your Vue.js App11'
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
