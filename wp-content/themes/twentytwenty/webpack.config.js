//  To include Webpack
const webpack                = require('webpack');

// To resolve paths to directories
const path                   = require('path');

// installed via npm To Delete old CSS & JS before build if any changes found.
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 

// installed  via npm To generate HTML files with dynamic hashed css & js
const HtmlWebpackPlugin      = require('html-webpack-plugin'); 

// installed via npm To extract the CSS file seperately from JS file (app.js here)
const MiniCssExtractPlugin   = require("mini-css-extract-plugin");

// installed via npm To Live reload changes using Browsersync
const BrowserSyncPlugin      = require('browser-sync-webpack-plugin');

// BrowserSync Settings 
const port       = 3000;
const theme_name = "webpack-wordpress";


// Placeholders to prevent caching of css
//   Note: We must normally use [contenthash] as a placeholder.
/** 
 * [hash]
 * [name]
 * [id]
 * [contenthash]
 * [query]
 * [chunkhash]
*/


var config = {

    // Defines Entry point from where Webpack will start bundling JS
    entry:['./js/app.js', './scss/app.scss'],
    
    // Defines Exit Point to where Webpack produces Bundled Output. Will be same for CSS.
    output:{
        path: path.resolve(__dirname),
        filename: './bundle.[contenthash:4].min.js'
    },

    // Will produce .css.map & .js.map  sourcemap  files
    // devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map', 
    // devtool: 'inline-source-map',

    // Rules to test For each JS & CSS module respectively
    module: {
        rules: [
            // Test & Compile for all .scss/.sass/.css files
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
            },

            // Test & Compile all ES6 JS through Babel for old browsers
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    
    // Setting Configuration of plugins used
    plugins: [

        // To Extract CSS file seperately from the JS entrypoint
        new MiniCssExtractPlugin({
            filename: './bundle.[contenthash:4].min.css'
        }),

        // To clean old JS & CSS files before new build if anything changes
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./bundle.*.min.js','./bundle.*.min.css']

        }),

        // To Watch changes in files & Reload using BrowserSync
        new BrowserSyncPlugin({
		    proxy: `localhost/${theme_name}`,
		    port: port,
		    files: [
		        '**/*.php'
		    ],
		    ghostMode: false,
		    injectChanges: true,
		    logFileChanges: true,
		    logLevel: 'debug',
		    logPrefix: 'wepback',
		    notify: true,
		    reloadDelay: 0
		})

        // To create HTML files & Templates with dynamically included Hashed CSS & JS files

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

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        config.devtool = 'inline-source-map';
    }

    if (argv.mode === 'production') {
        config.devtool = false;
    }

    return config;
};