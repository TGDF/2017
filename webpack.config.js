const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "src/index.html"),
    filename: 'index.html',
    inject: 'body',
});

const extractSass = new ExtractTextPlugin({
    filename: "style.css",
});

const port = process.env.PORT || 3000;

module.exports = {
    entry: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://localhost:${port}`,
        'webpack/hot/only-dev-server',
        './src/client/index.jsx',
    ],
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                use: { loader: 'eslint-loader' },
                enforce: "pre",
                include: path.resolve(__dirname, "src"),
            },
            {
                test: /\.(jsx|js)$/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    }]
                }),
            },
        ],
    },
    devtool: "#inline-source-map",
    devServer: {
        port: port,
        hot: true,
    },
    plugins: [
        HTMLWebpackPluginConfig,
        extractSass,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
};
