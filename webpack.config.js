const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.sass$/, loader: 'style-loader!css-loader!sass-loader' },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
};