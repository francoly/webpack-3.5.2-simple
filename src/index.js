/**
 * Created by francoly on 2017/8/8.
 */
 import _ from 'lodash';
 const test01 = require('./test01');//同步
 const test02 = require('./test02');//同步
 import './css/index.css';
 import './css/test01.less';
 import './css/test02.css';
    function component() {
        var element = document.createElement('div');

           // Lodash, currently included via a script, is required for this line to work
        // Lodash, now imported by this script
        element.innerHTML = _.join(['Hello', '6665555'], ' ');
        return element;
    }
require.ensure(['./print.js'],function(){  //异步
    console.log('异步加载的内容??')
},'print');
console.log('非异步加载的内容');
document.body.appendChild(component());