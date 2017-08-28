/**
 * Created by francoly on 2017/8/27.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
//import Shopping from './shopping_cart.vue'
import $ from 'jquery'
Vue.use(VueRouter);
//·������  //��Ҫ�Ӻ�׺
var routes=[

];
const router=new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes
});
new Vue({
    el: '#app',
    router,
    render: h => h(Shopping)
});