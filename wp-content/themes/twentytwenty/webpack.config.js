var webpack = require('webpack');
var path = require('path');
var { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm
var HtmlWebpackPlugin = require('html-webpack-plugin'); // installed  via npm To generate HTML files with dynamic hashed css & js

// include the css extraction and minification plugins
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// Placeholders to prevent caching of css

/** 
 * [hash]
 * [name]
 * [id]
 * [contenthash]
 * [query]
 * [chunkhash]
*/

module.exports ={

    entry:['./js/app.js', './scss/app.scss'],
    output:{
        path: path.resolve(__dirname),
        filename: "./app.[contenthash:4].min.js"
    },
    module: {
        rules: [
        // compile all .scss files to plain old css
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: __dirname
                        }
                    },
                "css-loader",
                "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './app.[contenthash:4].min.css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./*.min.js','./*.min.css']

        }),
        // new HtmlWebpackPlugin({
        //     title : 'Default HTML',
        //     filename :  './html/index.html'
        // }),
        // new HtmlWebpackPlugin({
        //     title : 'Test HTML',
        //     filename :  './html/test.html'
        // })

    ]
}