const webpack = require('webpack');
const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
require("babel-polyfill");

module.exports = {
  entry: {
  	"vender": ['jquery', 'vue', 'createjs-easeljs', 'underscore', 'babel-polyfill'],
  	"app": './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist/')
  },

  // modules
  module: {
  	rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: require.resolve('createjs-easeljs'),
        use: [
          'imports-loader?this=>window',
          'exports-loader?window.createjs'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader'
          }
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'autoprefixer-loader'
        }, {
          loader: 'csscomb-loader'
        }, {
          loader: 'sass-loader'
        }]
      }
  	]
  },

  // plugins
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new ImageminPlugin({
      pngquant: {
        quality: '80'
      }
    }),
    new CopyWebpackPlugin([{
      context: 'src/assets/img',
      from: '**/*',
      to: '../../assets/img'
    }])
  ],

  resolve: {

    // aliasを追加
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
  },
}
