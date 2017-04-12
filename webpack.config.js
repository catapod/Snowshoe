const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist')
};

const rules = {
    eslint: {
        test: /\.js$/,
        enforce: 'pre',
        include: [PATHS.app],
        use: 'eslint-loader'
    },
    js: {
        test: /\.(js|jsx)$/,
        include: [PATHS.app],
        use: 'babel-loader'
    },
    less: {
        test: /\.less$/,
        include: [PATHS.app],
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                'css-loader?sourceMap',
                'postcss-loader',
                'less-loader?relativeUrls'
            ]
        })
    },
    img: {
        test: /\.(jpg|jpeg|png|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
            limit: 20000
        }
    },
    fonts: {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            outputPath: 'fonts',
            publicPath: 'fonts'
        }
    }
};

const config = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: PATHS.build,
        filename: 'app-components.js'
    },
    target: 'web',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.less'],
        modules: [
            PATHS.app,
            'node_modules'
        ],
        enforceExtension: false
    },
    module: {
        rules: [
            rules.eslint,
            rules.js,
            rules.less,
            rules.img,
            rules.fonts
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({filename: 'app-components.css', allChunks: true}),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isProduction ? '"production"' : '"development"'
            },
            __DEV__: !isProduction
        })
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
        historyApiFallback: true,
        noInfo: true
    }
};


if (isProduction) {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false,
            compress: {warnings: false}
        })
    );
}

module.exports = config;
