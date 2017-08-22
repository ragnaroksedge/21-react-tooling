'use strict';

const HtmlPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  output: {
    entry: `${__dirname}/src/main.js`,
    path: `${__dirname}/build`,
    publicPath: `/`,
    filename: 'bundle-[hash].js'
  },
  plugins: [
    new HtmlPlugin({ template: `${__dirname}/src/index.html` }),
    new ExtractPlugin('bundle-[hash].css')
  ],
  module {
    rules: [
      {
        test: /\.js$/,
        excluse: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
