var path=require('path')
var webpack=require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    context: path.resolve(__dirname, "src/js"),
    entry: ['./admin.js', './App.js'],
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'/dist'
    },
    module:{
        // loader:[{ test: /\.html$/, loader: 'ng-cache?prefix=[dir]/[dir]' }],
         
        rules:[ 
            {test:/\.css$/,     use:['style-loader','css-loader',]},
            {test: /\.html$/,  use: ["html-loader"] }
        ]
    }, 
    plugins:[
        // new webpack.optimize.UglifyJsPlugin({}),
        // new HtmlWebpackPlugin({  // Also generate a test.html 
        //     filename: 'hello.html',
        //     template: 'src/js/hello.html'
        // }) 
    ]
}