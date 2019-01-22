/*
  FOR DEVELOPMENT test
*/
const path = require('path')
// const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

console.log(process.env.NODE_ENV)
process.traceDeprecation = true

module.exports = {
  mode: 'development',
  devtool: '#cheap-module-eval-source-map',
  entry: [
    '@babel/polyfill',
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
      chunkFilename: 'css/[id].css'
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false)
    })
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
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
          'style-loader',
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
                // require('cssnano')(),
              ]
            }
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
    port: 7777
  }
}
