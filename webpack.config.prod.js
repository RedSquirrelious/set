const merge = require('webpack-merge');

const base = require('./webpack.config.common');

const config = merge(
    base, 
    {
        mode: 'production',
        devtool: 'source-map',
    }
);

module.exports = config;