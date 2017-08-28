/**
 * Created by francoly on 2017/8/27.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Personal from './personal.vue'
import $ from 'jquery'
Vue.use(VueRouter);
//
var routes=[
    //{
    //    path:'/goods.html',
    //    component:Goods_list
    //},
    //{
    //    path:'/goods_detail',
    //    component:Goods_detail
    //}
    //,
    //{
    //    path: '*',
    //    component: Goods_list
    //}

];
const router=new VueRouter({
    scrollBehavior: () => ({ y: 0 }), // ��������������
    routes
});
new Vue({
    el: '#app',
    router,
    render: h => h(Personal)
});