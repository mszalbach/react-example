var path = require( 'path' );
var webpack = require( 'webpack' );
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main/js/App.jsx',
    devtool: 'source-map',
    output: {
        path: "./built/",
        filename: 'bundle.js',
    },

    resolve: {
        modulesDirectories: ['node_modules', './src/main/js'],
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract( 'style-loader', 'css-loader' )}
        ]
    },

    plugins: [
        new ExtractTextPlugin( 'bundle.css' ),
        new HtmlWebpackPlugin({
            template: './src/main/js/index.html'
        })
    ]
};