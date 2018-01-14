const webpack = require('webpack')
const path = require('path')
let htmlWebpackPlugin = require('html-webpack-plugin')
let BowerWebpackPlugin = require('bower-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const port = 3000

module.exports = {
    context: __dirname,
    entry: [
        path.resolve(__dirname, 'src/index.js')],
    target: 'web',
    cache: true,
    devtool: 'eval-source-map',
    node: {
        __dirname: true,
        fs: 'empty'
    },
    output: {
        path: __dirname + '/dist/',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        historyApiFallback: true,
        hot: true,
        port: port,
        publicPath: '/',
        noInfo: false
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                include: path.join(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: 'es2015'
                    }
                }
            },
            {
                test: /(\.css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css',
                    },
                ]
            },
            {
                test: /\.(gif|jpe?g|png|ico)$/,
                loader: 'url-loader?limit=10000'
            },
            {
                test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
                loader: 'url-loader?limit=10000'
            }
        ]
    }
};
