// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loaders: ["react-hot-loader/webpack", "babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /.s[ac]ss$/,
        loaders: [
          {
            loader: 'style-loader',
            options: {sourceMap: true}
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[hash:base64:5]-[name]-[local]',
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

      // add your custom loaders.
    ],
  },
};
