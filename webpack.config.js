var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
console.log(TARGET);
var common = {
    entry: [path.resolve(ROOT_PATH, 'app/main')],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'About Karan Kotwal'
        })
    ]
};

if (TARGET === 'build') {
    module.exports = merge(common, {
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('style', 'css')
                },
                {
                    test: /\.jsx?$/,
                    loader: 'babel?stage=0',
                    include: path.resolve(ROOT_PATH, 'app')
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('styles.css'),
            new webpack.DefinePlugin({
                'process.env': {
                    // This has effect on the react lib size
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ]
    });
}

if (TARGET === 'start') {
    module.exports = merge(common, {
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loaders: ['style', 'css']
                },
                {
                    test: /\.jsx?$/,
                    loaders: ['react-hot', 'babel', 'flowcheck', 'babel?stage=0&blacklist=flow'],
                    include: path.resolve(ROOT_PATH, 'app')
                }
            ]
        }
    });
}