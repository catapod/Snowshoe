const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist')
};

const extractLess = new ExtractTextPlugin({
    filename: 'snowshoe.css',
    allChunks: true,
    disable: !isProduction
});

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
        use: extractLess.extract({
            fallback: 'style-loader',
            use: [
                {loader: 'css-loader', options: {sourceMap: true}},
                {loader: 'postcss-loader'},
                {loader: 'less-loader'}
            ]
        })
    },
    img: {
        test: /\.(jpg|jpeg|png|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
            limit: 20000
        }
    },
    svg: {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    },
    fonts: {
        test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
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
        filename: 'snowshoe.js'
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
            rules.svg,
            rules.fonts
        ]
    },
    plugins: [
        extractLess,
        new webpack.NoEmitOnErrorsPlugin(),
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
