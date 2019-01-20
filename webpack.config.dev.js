const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

import base from './webpack.config.common';

const port = 3000;

const config = merge(
    base, 
    {
        entry: ['react-hot-loader/patch',
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            path.join(__dirname, 'src/index')
        ],
        devServer: {
            contentBase: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'public', 'assets'), path.resolve(__dirname, 'public', 'assets', 'images')],
            historyApiFallback: true,
            hot: true,
            overlay: true,
            port: port,
            publicPath: '/',
            before(app) {
                app.use(express.static(path.join(__dirname, 'src', 'assets', 'images')))
            }
        },
        devtool: 'eval-source-map',
        mode: 'development',
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ]
    }
);

module.exports = config;
