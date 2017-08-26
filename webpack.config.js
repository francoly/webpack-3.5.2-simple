const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
//var WebpackMd5Hash = require('webpack-md5-hash');//更改[chunkhash],使其js不被引入的css影响 好像webpack 3.0 不用了
const webpack = require('webpack');

var HTML={  //每一个html都会生成一个页面
    //根据模板插入css/js等生成最终HTML
    // favicon:'./src/img/favicon.ico', //favicon路径
    //可以自定义扩展参数在如:css参数, 在模板页面进行接收扩展!
    filename:'index.html',  //生成的html存放路径，相对于 path
    template:'./src/tpls/template.js',  //html模板路径
    title: 'vue',
    cache: true,
    inject:true,  //允许插件修改哪些内容，包括head与body
    hash:false,  //为静态资源生成hash值
    minify:{  //压缩HTML文件
        removeComments:true,  //移除HTML中的注释
        collapseWhitespace:false  //删除空白符与换行符
    },
    chunks:['index','vendor']  //此入口写引入的js文件,可引入公共模块
};
module.exports = {
    entry: {
        index: './src/js/index.js',
        vendor: ['vue','jquery' ]
    },
    devtool: 'inline-source-map', //webpack调试工具 不要用于生产
    //devServer: {
    //    contentBase: './dist' , //文件地址
    //    hot: true //开启热更新
    //},
   module: {
       rules: [
           {
               test: /\.vue$/,
               loader: 'vue-loader',
               options: {
                   loaders: {
                       // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                       // the "scss" and "sass" values for the lang attribute to the right configs here.
                       // other preprocessors should work out of the box, no loader config like this necessary.
                       'scss': 'vue-style-loader!css-loader!sass-loader',
                       'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                   }
                   // other vue-loader options go here
               }
           },
           {
               test: /\.js$/,
               exclude: /(node_modules|bower_components)/,
               use: {
                   loader: 'babel-loader',
                   options: {
                       presets: ['env']
                   }
               }
           },
           {
               test: /\.(png|jpg|gif|svg)$/,
               loader: 'file-loader',
               options: {
                   name: '[name].[ext]?[hash]'
               }
           },
           {
               test: /\.css$/,
               use: [ 'style-loader', 'css-loader' ]
           }
       ]
   },
    //resolve: {
    //    alias: {//别名
    //        print: path.resolve('')
    //    }
    //},
    plugins: [
        //----------生成html页面
        new HtmlWebpackPlugin(HTML), //生成html页面
        //-------调用热更新插件
        //new webpack.HotModuleReplacementPlugin(),
        //--------css提取参数
        //new ExtractTextPlugin("styles.css")
        new ExtractTextPlugin({   //css提取参数多样式文件并设置缓存[在开发时不需要 new ExtractTextPlugin('[name].[contenthash].css');
            filename:  (getPath) => {
                return getPath('css/[name].[contenthash].css').replace('css/js', 'css');
            },
            allChunks: true
        }),
        //----------代码压缩
        new webpack.optimize.UglifyJsPlugin({
            warnings: false,
            compress: {
                join_vars: true,
                warnings: false
            },
            toplevel: false,
            ie8: false
        }),
        //--------- 提供公共代码 优化手段之一
        //new webpack.optimize.CommonsChunkPlugin('common'), // 默认会把所有入口节点的公共代码提取出来,生成一个common.js 必须手动引入html页面中
        new webpack.optimize.CommonsChunkPlugin({ //选择vendor中模块的公共代码
            name: 'vendor'
        }),
        //new webpack.optimize.CommonsChunkPlugin({  //除vendor以外的所有公共代码
        //    name: 'runtime'
        //}),
        // 默认会把所有入口节点的公共代码提取出来,生成一个common.js
        // 只提取main节点和index节点
        //new webpack.optimize.CommonsChunkPlugin('common.js',['main','index']),
        //---------清理插件
        new CleanWebpackPlugin(['dist']),
        //--------缓存插件  作用:对为内容改变的公共模块 使其chunkhash 值不变
        new webpack.HashedModuleIdsPlugin()
    ],
    output: {
        filename: '[name].[chunkhash].js',//        filename: '[name].[chunkhash].js', 注意 用chunkhash 时要把热开发注释,切且在开发时不用
        path: path.resolve(__dirname, 'dist'),
        //publicPath:'../' //htmlz中的引用路径相对于dist
        chunkFilename: "[name].js" // [chunkhash] 异步加载的js代码! 代码切割! 代码优化 注意异步加载不要处理Dom!
    }
};
