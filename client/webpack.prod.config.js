/*
  FOR PRODUCTION
*/
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

console.log(process.env.NODE_ENV)
process.traceDeprecation = true

module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  stats: {
    children: false
  },
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[contenthash:8].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src/')
    }
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'redux': 'Redux',
    'react-redux': 'ReactRedux',
    'react-router-dom': 'ReactRouterDOM'
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      // cacheGroups: {
      //   react: {
      //     test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
      //     name: 'react',
      //     chunks: 'all',
      //     priority: 10
      //   },
      //   vendor: {
      //     test: /[\\/]node_modules[\\/]/,
      //     name: 'vendor',
      //     chunks: 'all',
      //     priority: 9
      //   }
      // }
    }
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/css/main.[contenthash:8].css',
      chunkFilename: 'static/css/[id].[contenthash:8].css'
    }),
    new HtmlWebpackPlugin({
      template: 'index.template.html',
      scriptLoading: 'defer'
    }),

    // new PreloadWebpackPlugin({
    //   rel: 'preload',
    //   fileBlacklist: [/\.map/, /\.css/],
    //   include: 'allChunks' // or 'initial', or 'allAssets'
    // }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    }),
    new CopyPlugin({
      patterns: [
        { from: './manifest.json', to: './' },
        { from: './robots.txt', to: './' },
        { from: './src/service-worker.js', to: './' },
        { from: './src/assets/images', to: './static/images' }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
        use: [
          {
            loader: 'babel-loader'
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
