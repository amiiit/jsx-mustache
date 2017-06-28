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
      },
      {
        test: /.s[ac]ss$/,
        use: [
          {
            loader: 'style-loader',
            options: {sourceMap: true}
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[local]-[hash:base64:4]-[name]',
              modules: true,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: '',
              sourceMap: true
            }
          }]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/application/index.html',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin({})
  ],
  devServer: {
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
  },
  devtool: 'cheap-module-eval-source-map'
}