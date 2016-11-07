const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist')
};

const config = {
  entry: {
    'index': './src/index.js'
  },

  output: {
    path: PATHS.build,
    filename: 'app-components.js'
  },

  resolve: {
    root: [PATHS.app],
    extensions: ['', '.jsx', '.js', '.json', '.less'],
    modulesDirectories: ['node_modules', PATHS.app]
  },

  module: {
    preLoaders: [
        {
            test: /\.js$/,
            loaders: ['eslint'],
            include: [PATHS.app]
        }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: /src/,
        loader: 'babel-loader?cacheDirectory'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff2'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-otf'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.(svg|png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?name=images/[name].[ext]?v=[hash]&limit=10000'
      },
      {
        test: /\.less$/,
        include: /src/,
        loader: isProduction ? ExtractTextPlugin.extract(
            'style-loader', [
              'css-loader?sourceMap',
              'postcss-loader',
              'less-loader?relativeUrls'
            ]) : 'style-loader!css-loader?sourceMap!postcss-loader!less-loader?relativeUrls'
      }
    ]
  },

  postcss: (webpack) => {
    return [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ];
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isProduction ? '"production"' : '"development"'
      },
      __DEVELOPMENT__: !isProduction
    })
  ],
  devtool: 'source-map'
};


if (isProduction) {
  config.plugins.push.apply([
    new ExtractTextPlugin('app-components.css', { allChunks: true }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false,
      compress: {
        warnings: false
      }
    })
  ])

}

module.exports = config;
