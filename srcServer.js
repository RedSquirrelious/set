require('dotenv').config()
import express from 'express';
import webpack from 'webpack';
import path from 'path';

import config from './webpack.config.dev'

const port = process.env.PORT || 3000;

const app = express();
app.set('port', port);

if (process.env.NODE_ENV == 'production') {
    app.use(express.static(path.join(__dirname, 'dist')))
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'dist', 'index.html'))
    });
} else {
    const compiler = webpack(config);

    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }));

    app.use(require('webpack-hot-middleware')(compiler));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'src', 'index.html'));
    });
}

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
});