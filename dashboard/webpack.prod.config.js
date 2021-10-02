const path = require('path');
const MinicssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/dashboard.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:9002/'
  },
  mode: 'production',
  watch: true,
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 10000,
      automaticNameDelimiter: '_'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['transform-class-properties']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MinicssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MinicssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Dashboard',
      filename: 'dashboard.html'
    }),
    new ModuleFederationPlugin({
      name: 'DashboardApp',
      filename: 'remoteEntry.js',
      remotes: {
        'IndexApp': 'IndexApp@http://localhost:9000/',
        'KiwiApp': 'KiwiApp@http://localhost:9001/'
      }
    })
  ]
};
