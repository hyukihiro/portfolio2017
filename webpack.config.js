const webpack = require('webpack');
const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = [
  {
    entry: {
    	"vender": ['jquery', 'vue', 'createjs-easeljs', 'underscore'],
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
        }
    	]
    },

    devtool: 'inline-source-map',

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
      }]),
      new WebpackNotifierPlugin()
    ],

    resolve: {

      // aliasを追加
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
    },
  },

  // sass
  {
    entry: {
      bundle: './src/assets/sass/index.scss'
    },
    output: {
      filename: '[name].css',
      path: path.resolve(__dirname, './dist/assets/css')
    },

    // modules
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'autoprefixer-loader', 'csscomb-loader', 'sass-loader']
          })
        }
      ]
    },

    plugins: [
      new ExtractTextPlugin('bundle.css')
    ]
  }
];
