const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const {GenerateSW} = require('workbox-webpack-plugin');
const path = require("path");
 
module.exports = {
   entry: "./app.js",
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js"
   },
   module: {
       rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            context: 'project',
                        },
                    },
                ],
            }
       ]
   },
   plugins: [
        new HtmlWebpackPlugin({
           template: "./index.html",
           filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./league.html",
            filename: "league.html"
        }),
        new HtmlWebpackPlugin({
            template: "./pages/home.html",
            filename: "./pages/home.html"
        }),
        new HtmlWebpackPlugin({
            template: "./pages/saved.html",
            filename: "./pages/saved.html"
        }),
        new HtmlWebpackPlugin({
            template: "./pages/landing.html",
            filename: "./pages/landing.html"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './images'),
                    to: path.resolve(__dirname, 'dist/images')
                }
            ]
        }),
        new GenerateSW()
   ]
}