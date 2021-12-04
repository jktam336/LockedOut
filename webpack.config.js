const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devServer:{
        compress:true,
        proxy: { '/': 'http://localhost:3000', }
    },
    entry: path.resolve(__dirname, './client/index.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({ template: 'index.html' })],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                    },
                },
            },
            {
                test: /\.s?[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
};
