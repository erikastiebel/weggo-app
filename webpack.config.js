'use strict';

const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

  context: path.resolve(__dirname, "./app/js/"),

  entry: [
    "react-hot-loader/patch",
    "./main.jsx"
  ],
  output: {
    path: path.resolve(__dirname, "./dist/assets"),
    filename: "[name].bundle.js",
    publicPath: "/assets/"
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
          options: {
            presets: ["env"]
          }
      },
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
          options: {
            presets: ["env"]
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
      new ExtractTextPlugin("style.css")
  ],
  resolve: {
   extensions: [".js", ".jsx"],
 },
 watch: true
};
