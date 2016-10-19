const webpack = require('webpack');
const path = require('path');

const isDebug = process.env.NODE_ENV !== 'production';

const config = {
    context: path.join(__dirname, '/public'),
    devtool: isDebug ? 'inline-sourcemap' : null,
    entry: './src/app.js',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    output: {
        path: path.join(__dirname, './public/dist'),
        filename: 'bundle.min.js'
    },
    plugins: isDebug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
    module: {
        loaders: [
            {test: /\.ts(x?)$/, exclude: /node_modules/, loaders: ['babel', 'ts']},
            {test: /\.js(x?)$/, exclude: /(node_modules\/|server\/)/, loader: 'babel'}
        ]
    }
};

module.exports = config;