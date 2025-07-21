const { merge } = require('webpack-merge');
const common = require('./webpack.common.js')
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = merge(common, {
    mode: "development",
    plugins: [
        new ESLintPlugin({
            emitWarning: true,
            failOnWarning: false,
            emitError: true,
            failOnError: false,
        }),
    ],
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },
});