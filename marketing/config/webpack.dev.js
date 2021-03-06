const { merge } = require('webpack-merge'); // This is used to merge
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8081/'
  },
  devServer: {
    port: 8081,
    historyApiFallback: true,
    // historyApiFallback: {
    //   index: 'index.html'
    // }
    hot: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingUI': './src/bootstrap'
      },
      // shared: ['react', 'react-dom'],
      shared: packageJson.dependencies
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ]
};

module.exports = merge(commonConfig, devConfig);
