const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index_main: './src/index.js',
    kiwi_main: './src/kiwi.index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: ''
  },
  mode: 'development',
  watch: false,
  devServer: {
    static: path.resolve(__dirname, './dist'),
    port: 9000,
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ]
      },
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
        test: /\.hbs$/,
        use: [
          'handlebars-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Understanding Webpack Basics',
      description: 'html-webpack-plugin',
      template: 'src/index.hbs',
      chunks: ['index_main'],
      filename: 'index.main.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Kiwi Fruit',
      description: 'html-webpack-plugin',
      template: 'src/kiwi.hbs',
      chunks: ['kiwi_main'],
      filename: 'kiwi.html'
    })
  ]
};
