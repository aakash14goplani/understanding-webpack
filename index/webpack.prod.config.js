const path = require('path');
const MinicssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:9000/'
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
        test: /\.(png|jpg)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          MinicssExtractPlugin.loader, 'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MinicssExtractPlugin.loader, 'css-loader', 'sass-loader'
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
    new MinicssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Understanding Webpack Basics',
      description: 'html-webpack-plugin',
      template: 'src/index.hbs',
      filename: 'index.main.html'
    }),
    new ModuleFederationPlugin({
      name: 'IndexApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/button/button.js',
        './IndexPage': './src/components/index-page-component/index-page-component.js'
      }
    })
  ]
};
