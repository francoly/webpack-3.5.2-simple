/**
 * Created by francoly on 2017/8/27.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './login.vue'
import $ from 'jquery'
Vue.use(VueRouter);
//
var routes=[
    {
        path:'/login.html',
        component:Login
    }
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
    scrollBehavior: () => ({ y: 0 }), // ��������������Ϊ���������Ĭ�Ͼͻ����ԭ����������λ��
    routes
});
new Vue({
    el: '#app',
    router,
    render: h => h(Login)
});