import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: {
    'app': './src/application/index.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loaders: ["react-hot-loader/webpack", "babel-loader"],
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/application/index.html',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin({
    })
  ],
  devServer: {
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
  }
}