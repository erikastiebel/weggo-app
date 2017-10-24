'use strict';

const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  context: path.resolve(__dirname, './app/js/'),

  entry: {
    main: './main.jsx'
  },

  output: {
    path: path.join(__dirname, './dist/assets'),
    filename: '[name].bundle.js',
    publicPath: "/assets/"
  },

};
