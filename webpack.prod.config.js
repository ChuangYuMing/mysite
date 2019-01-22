/*
  FOR PRODUCTION
*/
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

console.log(process.env.NODE_ENV)
process.traceDeprecation = true

module.exports = {
  mode: 'production',
  devtool: '#cheap-module-source-map',
  entry: {
    app: ['@babel/polyfill', './src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[contenthash:8].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      modules: path.resolve(__dirname, 'src/modules'),
      static: path.resolve(__dirname, 'src/static'),
      store: path.resolve(__dirname, 'src/store'),
      api: path.resolve(__dirname, 'src/api')
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(['build']),
    new MiniCssExtractPlugin({
      filename: 'static/css/main.[contenthash:8].css',
      chunkFilename: 'static/css/[id].[contenthash:8].css'
    }),
    new HtmlWebpackPlugin({
      template: 'index.template.html'
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    })
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true,
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: loader => [
                require('postcss-global-import')(),
                require('postcss-import')({
                  path: './src/modules/shared/styles/'
                }),
                require('postcss-mixins')(),
                require('postcss-nested')(),
                require('postcss-simple-vars')(),
                require('autoprefixer')()
                // require('cssnano')()
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
        options: {
          name: 'static/images/[name].[ext]',
          limit: 8192
        }
      },
      { test: /\.html$/, loader: 'html-loader' },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'application/font-woff'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{ loader: 'url-loader' }]
      }
    ]
  }
}
