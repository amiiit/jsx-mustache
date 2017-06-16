export default env => ({
  entry: [
    ''
  ],
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: env.production
    })
  ]
});