const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/dashboard.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:9002/'
  },
  mode: 'development',
  watch: false,
  devServer: {
    static: path.resolve(__dirname, './dist'),
    port: 9002,
    historyApiFallback: true,
    hot: true,
    devMiddleware: {
      index: 'dashboard.html',
      writeToDisk: true
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
          'style-loader', 'css-loader', 'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Dashboard',
      description: 'html-webpack-plugin',
      filename: 'dashboard.html',
      publicPath: 'http://localhost:9002/'
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
