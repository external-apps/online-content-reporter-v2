// module.exports = {
//   devtool: 'inline-source-map',  // gives line numbers where errors
//   entry: [  // where webpack will look for other files
//         'webpack-dev-server/client?http://127.0.0.1:8080/',
//         'webpack/hot/only-dev-server',
//         './src/index.js'
//     ],
//   output: {
//     filename: 'bundle.js',
//     path: 'dist'
//   },
//   resolve: {
//     modulesDirectories: ['node_modules', 'app'], // all react files here..
//     extensions: ['', '.js', '.jsx']
//   },
//   module: {  // where we define our loaders... only need one loader as only need to recognise js files
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         loaders: ['babel?presets[]=react,presets[]=latest']
//       },
//     ]
//   }
// }

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './app/index.js',
  output: { // where thebundles are created
    filename: 'bundle.js',
    path: './dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // if we have any file that end with .js, use babel to transpile them
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
