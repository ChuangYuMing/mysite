/*
  FOR DEVELOPMENT test
*/
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

console.log(process.env.NODE_ENV)
process.traceDeprecation = true

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  target: 'web', //fix hot reload:  https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/main/docs/TROUBLESHOOTING.md
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src/')
    }
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
      chunkFilename: 'css/[id].css'
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false)
    })
  ],
  optimization: {
    moduleIds: 'named'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
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
          name: 'images/[name].[ext]',
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
  },
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    contentBase: './src',
    hot: true,
    host: '0.0.0.0',
    compress: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': '*'
    },
    port: 7779
  }
}
