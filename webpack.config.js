var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/App.jsx',
    devtool: 'sourcemaps',
    cache: true,
    debug: true,
    output: {
        path: "./built/",
        filename: 'bundle.js'
    },

    resolve: {
        modulesDirectories: ['node_modules', './src'],
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')}
        ]
    },

    plugins: [
        new ExtractTextPlugin('bundle.css')
    ]
};