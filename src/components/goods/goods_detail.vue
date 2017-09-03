<template>
    <div id="app">
        <h1>{{$route.params.id}}</h1>
        <GoodsList></GoodsList>
         <div @click="eve()">点击</div>
    </div>
</template>

<script>
    import GoodsList from './goods_list.vue'
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
        methods:{
            eve:function(){
                console.log(111)
                window.Hub.$emit('change','hehe')
            }
        },
        components:{
            GoodsList
        }
    }
</script>

<style lang="less">
    @color:red;
    body{
        background-color:@color;
    }
</style>
