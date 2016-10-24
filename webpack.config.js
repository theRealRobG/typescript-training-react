const webpack = require('webpack');
const path = require('path');

const isDebug = process.env.NODE_ENV !== 'production';

const config = {
    devtool: isDebug ? 'inline-sourcemap' : null,
    entry: './src/app.jsx',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.min.js',
        publicPath: '/dist/'
    },
    plugins: isDebug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
    module: {
        loaders: [
            {test: /\.js(x?)$/, exclude: /node_modules/, loader: 'babel'}
        ]
    }
};

module.exports = config;