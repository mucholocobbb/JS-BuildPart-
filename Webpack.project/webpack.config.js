const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');


module.exports = {
    entry: {
        loadScript: './src/loadScript.js',
        main: {
            dependOn: 'loadScript',
            import: './src/main.js',
        },
        
        
    },
    output: {
        path: resolve(__dirname,'build'),
        filename: '[name].[contenthash].js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.(wav|mp3)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {
                test: /\.sass$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: '[name][contenthash].css'}),
        new HtmlWebpackPlugin({template: resolve(__dirname,'main.html')}),
        // new BundleAnalyzerPlugin(),
    ]

}