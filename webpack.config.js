'use strict';

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

  context: path.resolve(__dirname, './app'),

  entry: [
    // "webpack-hot-middleware/client?reload=true"
    "react-hot-loader/patch",
    "./js/main.jsx"
  ],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    publicPath: "/"
  },
  devServer: {
    proxy: {
      "/api/weggo": "http://localhost:3000"
    }
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
          options: {
            presets: ["react", "env", "stage-0"]
          }
      },
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
          options: {
            presets: ["react", "env", "stage-0"]
          }
      },
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader", "sass-loader"]
      })
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [
        "url-loader?limit=10000",
        "img-loader"
      ]
    }]
  },
  plugins: [
      new ExtractTextPlugin("style.css"),
      new HtmlWebpackPlugin({
        template: "index.html",
        inject: "body",
        filename: "index.html"
      })
      // new webpack.HotModuleReplacementPlugin()
      // new webpack.optimize.OccurrenceOrderPlugin(),
      // new webpack.NamedModulesPlugin(),
      // new webpack.NoEmitOnErrorsPlugin(),


  ],
  resolve: {
   extensions: [".js", ".jsx"],
 },
 watch: true
};
