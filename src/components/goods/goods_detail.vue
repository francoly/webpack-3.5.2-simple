<template>
    <div id="app">
        <h1>{{$route.params.id}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data:function () {
            return {
                msg: 'Welcome to Your Vue.js goods_detail',
            }
        },
        mounted:function(){
            console.log(this.msg);
        },
        motheds:{

        }
    }
</script>

<style lang="less">
    @color:red;
    body{
        background-color:@color;
    }
</style>
