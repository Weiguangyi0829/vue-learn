module.exports = {
    mode:'development',
    entry:'./src/main.js',
    output:{
        path:__dirname + '/dist',
        filename:'main.bundle.js'
        
    },

    module: {
        rules:[
            {
                test:/\.css$/g,
                use:['style-loader','css-loader']
            }
        ]
    }
};