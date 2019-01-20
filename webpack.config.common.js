const path = require('path');

const baseConfig = {
    context: __dirname,
    entry: path.join(__dirname, 'src', 'index'),
    target: 'web',
    cache: true,
    node: {
        __dirname: true,
        fs: 'empty'
    },
    output: {
        path: __dirname + '/dist/',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                include: path.join(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                loader: "css-loader"
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader']
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

module.exports = baseConfig;