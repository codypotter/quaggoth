'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {

    entry: [
      '@babel/polyfill',
      './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'project.bundle.js'
    },

    module: {
      loaders: [
        {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
        {test: [/\.vert$/, /\.frag$/], loader: "raw-loader"}
      ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ]

};
