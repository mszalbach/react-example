const path = require( 'path' );
const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const merge = require( 'webpack-merge' );
const validate = require( 'webpack-validator' );

const parts = require( './libs/parts' );


const PATHS = {
    app: path.join( __dirname, 'src/main/js' ),
    build: path.join( __dirname, 'build' )
};


const common = {
    entry: {
        app: PATHS.app
    },
    devtool: 'source-map',
    output: {
        path: PATHS.build,
        filename: '[name].js'
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
        new HtmlWebpackPlugin( {
            template: './src/main/js/index.html'
        } )
    ]
};


var config;

// Detect how npm is run and branch based on that
switch ( process.env.npm_lifecycle_event ) {
    case 'build':
        config = merge( common, {} );
        break;
    default:
        config = merge(
                common,
                parts.devServer( {host: process.env.HOST, port: process.env.PORT} )
        );

}

module.exports = validate( config );