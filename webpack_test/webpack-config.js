const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    entry:'./src/main.js',
    output:{
        path:__dirname + '/dist',
        filename:'main.[hash].bundle.js'
        
    },

    module: {
        rules:[
            {
                test:/\.css$/g,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg|gif)$/g,
                use:['file-loader']
            }
            
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            path:'./dist',
            template:'./src/utils/index.template.html'
        })
    ]
};