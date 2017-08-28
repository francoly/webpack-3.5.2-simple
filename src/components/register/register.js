/**
 * Created by francoly on 2017/8/27.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from './register.vue'
import $ from 'jquery'
Vue.use(VueRouter);
//·������  //��Ҫ�Ӻ�׺
var routes=[

];
const router=new VueRouter({
    scrollBehavior: () => ({ y: 0 }), // ��������������Ϊ���������Ĭ�Ͼͻ����ԭ����������λ��
    routes
});
new Vue({
    el: '#app',
    router,
    render: h => h(Register)
});