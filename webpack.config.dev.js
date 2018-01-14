const webpack = require('webpack')
const path = require('path')
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
        contentBase: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'public', 'assets'), path.resolve(__dirname, 'public', 'assets', 'images')],
        historyApiFallback: true,
        hot: true,
        overlay: true,
        port: port,
        publicPath: '/',
        noInfo: false,
        before(app) {
            app.use(express.static(path.join(__dirname, 'src', 'assets', 'images')))
        }
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
                test: /\.css$/,
                loader: "style-loader!css-loader"
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
