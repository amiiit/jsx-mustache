import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: {
    app: "./src/application/index.tsx"
  },
  output: {
    filename: "bundle.js"
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"] // note if using webpack 1 you'd also need a '' in the array as well
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loaders: ["react-hot-loader/webpack", "babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /.tsx?$/,
        loaders: ["react-hot-loader/webpack", "ts-loader"],
        exclude: /node_modules/
      },
      {
        test: /.s[ac]ss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: "",
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/application/index.html",
      filename: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin({})
  ],
  devServer: {
    hot: true // hot module replacement. Depends on HotModuleReplacementPlugin
  },
  devtool: "inline-source-map"
};
