const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const IsDevMode = process.env.NODE_ENV != "development";
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "src/index.html"),
    filename: 'index.html',
    inject: 'body',
});

const ExtractSass = new ExtractTextPlugin({
    filename: "style.css",
});

const port = process.env.PORT || 3000;
const entry = () => {
    let entries = [];
    if(IsDevMode) {
        entries.push('react-hot-loader/patch');
        entries.push(`webpack-dev-server/client?http://localhost:${port}`);
        entries.push('webpack/hot/only-dev-server');
    }
    entries.push(path.resolve(__dirname, "src/index.jsx"));
    return entries;
}

const plugins = () => {
    let plugins = [];
    plugins.push(HTMLWebpackPluginConfig);
    plugins.push(ExtractSass);
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
    }));
    plugins.push(new webpack.optimize.UglifyJsPlugin());
    if(IsDevMode) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new webpack.NamedModulesPlugin());
        plugins.push(new webpack.NoEmitOnErrorsPlugin())
    }
    return plugins;
}

module.exports = {
    entry: entry(),
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'bundle.js',
        publicPath: IsDevMode ? "/" : "/static/",
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
                use: ExtractSass.extract({
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
            {
                test: /\.json$/,
                use: 'json-loader',
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: 'url-loader',
            }
        ],
    },
    devtool: IsDevMode ? "eval" : false,
    devServer: {
        port: port,
        hot: IsDevMode,
        historyApiFallback: true,
    },
    plugins: plugins(),
};
