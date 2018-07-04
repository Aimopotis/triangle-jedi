const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');


module.exports =  {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    open: true
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          "css-loader", 
          'postcss-loader',
          "sass-loader" 
        ]
      },
      {
         test: /\.(png|svg|jpg|gif|ico)$/,
          use: [
         'file-loader'
         ]
       },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
  }),
  new StyleLintPlugin({
    configFile: './stylelint.config.js',
    files: './src/scss/*.scss',
    syntax: 'scss'
  })
  ]
};