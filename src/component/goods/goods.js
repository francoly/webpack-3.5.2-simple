/**
 * Created by francoly on 2017/8/27.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from './goods.vue'
import Goods_detail from './goods_detail.vue'
import Goods_list from './goods_list.vue'
import $ from 'jquery'
Vue.use(VueRouter);
//路由配置  //需要加后缀
var routes=[
    {
        path:'/goods.html',
        component:Goods_list
    },
    {
        path:'/goods_detail',
        component:Goods_detail
    }
    ,
    {
        path: '*',
        component: Goods_list
    }

];
const router=new VueRouter({
    scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    routes
});
new Vue({
    el: '#app',
    router,
    render: h => h(Goods)
});