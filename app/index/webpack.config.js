
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var hotModuleReplacementPlugin = require("webpack/lib/HotModuleReplacementPlugin");
var webpack = require("webpack");
var AssetsPlugin = require('assets-webpack-plugin');

module.exports = {

  // 页面入口文件配置
  entry:  {
  	index: __dirname + "/src/index.js",
  	detail: __dirname + "/src/detail.js",
  	vendor: ['jquery', 'class']
  },

  // 入口文件输出配置
  output: {
    path: __dirname + "/dest",//打包后的文件存放的地方
    filename: "[name].[chunkhash].js",//打包后输出文件的文件名
    publicPath: '/dest/'
  },

  // 加载器配置
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
    ]
  },

  // 插件配置
  plugins: [
    new ExtractTextPlugin("[name].[contenthash].css"),
    //new hotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.BannerPlugin("build date: " + getDate() + ' by ' + process.env['USER']),
    new AssetsPlugin({filename: './map.json', prettyPrint: true}),
    new webpack.optimize.CommonsChunkPlugin({names: ['vendor']})
  ],

  resolve: {
    root: path.resolve(process.cwd(), '../../'),
    alias: {
      jquery : 'core/jquery/src/jquery.js',
      class: 'core/class/src/index.js'
    }
  },

  // 开发服务器配置
  devServer: {
    post: 4040,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  }
};

function getDate() {
  var date = new Date();
  // 2016-12-08 16:48
  return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
}