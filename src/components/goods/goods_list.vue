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
        },
         created:function() {
            var me=this;
           window.Hub.$on('change',function(msg){
            me.msg=msg;
            console.log(msg)
           });
          }

    }
</script>

<style lang="less">
    @color:red;
    body{
        background-color:@color;
    }
</style>
