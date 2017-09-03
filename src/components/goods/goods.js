/**
 * Created by francoly on 2017/8/27.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from './goods.vue'
import Goods_detail from './goods_detail.vue'
import Goods_list from './goods_list.vue'
import $ from 'jquery'
window.Hub = new Vue();//通用通信
Vue.use(VueRouter);
var routes=[
    {
        path:'/',
        component:Goods_list
    },
    {
        path:'/goods_detail/:id',
        component:Goods_detail
    }
];
const router=new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes
});
new Vue({
    data:{
      fu_msg:'fufufufu'
    },
    el: '#app',
    router,
    render: h => h(Goods)
});