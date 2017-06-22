import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: {
    'app': './example/index.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: "babel-loader"
      }

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html',
      filename: 'index.html'
    })
  ]
}