require('@babel/polyfill');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', path.join(__dirname, '../src/index.tsx')],
    output: {
        filename: 'main.[hash].js',
        path: path.join(__dirname, '../dist'),
        chunkFilename: '[name].[hash].js'
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]_[hash:base64]'
                            },
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('postcss-preset-env')({ stage: 0 }),
                                require('postcss-px-to-viewport')({
                                    unitPrecision: 3,
                                    viewportWidth: 375
                                })
                            ]
                        }
                    }
                ]
            },

        ]
    },
    resolve: { extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'] },
    plugins: [
        new HtmlWebpackPlugin({
            //   favicon: path.join(__dirname, './../public/favicon.ico'),
            template: path.join(__dirname, './../public/index.html'),
        })
    ]
}