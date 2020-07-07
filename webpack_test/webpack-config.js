const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        polyfill: './src/polyfill.js',//兼容性先执行
        main: './src/main.js',

    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].[hash].bundle.js'//name表示entry里的参数

    },
    resolve: {
        extensions: ['.js', '.css'] //不用写扩展名
    },

    module: {
        rules: [
            {
                test: /\.css$/g,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/g,
                use: ['file-loader']
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            path: './dist',
            template: './src/index.template.html'
        })
        //更新html和main.js
    ]
};