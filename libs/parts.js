const webpack = require( 'webpack' );

exports.devServer = function ( options ) {
    return {

        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,

            host: options.host,
            port: options.port
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    };
};