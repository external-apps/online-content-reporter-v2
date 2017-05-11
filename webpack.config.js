const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: ['babel-polyfill', './app/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      // {
      //   test: /\.(eot|svg|ttf|otf|woff|woff2)$/,
      //   loader: 'file-loader?name=public/fonts/[name].[ext]'
      // },
      {
        test: /\.(woff2|woff|ttf|eot|svg|otf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: ['url-loader?limit=100&name=public/fonts/[name].[ext]']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.DefinePlugin({
      YOTI_APP_ID: JSON.stringify(process.env.YOTI_APP_ID)
    })
  ]
}
