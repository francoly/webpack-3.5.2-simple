<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
    import $ from 'jquery'
    export default {
        name: 'app',
        data:function () {
            return {
                msg: 'Welcome to Your Vue.js App11'
            }
        },
        watch:{
            '$route':function(){
                console.log(66)
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
