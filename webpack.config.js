var HWP = require('html-webpack-plugin')

const config = {
    entry: {
        index: './index.js',
        article: './article.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    plugins: [
        new HWP(),
        new HWP({
            filename: 'article.html',
            template: 'src/pages/article.html',
            chunks: ['article']
        })
    ]
};

module.exports = config;
