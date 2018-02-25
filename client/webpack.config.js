const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['./src/index.js', './app/index.scss'],
    module: {
        rules: [{
            exlude: [/node_modules/],
            include: path.resolve(__dirname, 'client/src/assets/scss'),
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // create style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJs
            }, {
                loader: "sass-loader" // compile Sass to CSS
            }]
        }]
    },
    devServer: {historyApiFallback: true},
    plugins: [new HtmlWebpackPlugin({template: 'client/public/index.html'})]
}
