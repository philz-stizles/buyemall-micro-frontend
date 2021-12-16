const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: '',
  output: {
    filename: '[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        use: [{ loader: 'file-loader' }]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.scss|\.css)$/,
        use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.m?js$/, // whenever we import a file that ends in an extension of either mjs or
        // just js, we want it to be processed by babel.
        exclude: /node_modules/, // do not run babel on excluded matches
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            // '@babel/preset-react: babel will be able to process all the jsx tags that we had to our application
            // '@babel/preset-env: transform your code - convert es 2015/16/17 etc to es5
            plugins: ['@babel/plugin-transform-runtime']
            // '@babel/plugin-transform-runtime: e.g async await syntax
          }
        }
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
