const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // whenever we import a file that ends in an extension of either mjs or
        // just js, we want it to be processed by babel.
        exclude: /node_modules/, // do not run babel on excluded matches
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            // '@babel/preset-react: babel will be able to process all the jsx tags that we had to our application
            // '@babel/preset-env: transform your code - convert es 2015/16/17 etc to es5
            plugins: ['@babel/plugin-transform-runtime']
            // '@babel/plugin-transform-runtime: e.g async await syntax
          }
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })]
};
