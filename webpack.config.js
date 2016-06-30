const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist')
};

const config = {
  entry: {
    'index': isProduction ? './src/index.js' : './src/dev.js'
  },

  output: {
    path: './dist',
    filename: 'app-components.js',
    library: 'AppComponents',
    libraryTarget: 'umd'
  },


  resolve: {
    root: [PATHS.app],
    extensions: ['', '.jsx', '.js', '.json', '.scss'],
    modulesDirectories: ['node_modules', PATHS.app]
  },

  module: {
    preLoaders: [
        {
            test: /\.js$/,
            loaders: ['eslint'],
            include: [
                PATHS.app
            ]
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
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff2',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-otf',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
      {
        test: /\.(svg|png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?name=images/[name].[ext]?v=[hash]&limit=10000',
      },
      {
        test: /\.less$/,
        include: /src/,
        loader: ExtractTextPlugin.extract(
            'style-loader', [
              'css-loader?sourceMap',
              'postcss-loader',
              'less-loader?relativeUrls'
            ])
      },
    ],
  },

  postcss: (webpack) => {
    return [
      require('autoprefixer')({
        browsers: ['last 2 versions'],
      })
    ];
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('app-components.css', { allChunks: true }),
    new CopyWebpackPlugin([{ from: 'tools/template_index.js', to: 'index.js' }]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isProduction ? '"production"' : '"development"',
      },
      __DEVELOPMENT__: !isProduction,
    }),
  ],
  devtool: 'source-map'
};


if (isProduction) {

  config.plugins.push.apply([
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false,
      compress: {
        warnings: false,
      },
    }),
  ])

} else {

  config.plugins.push(new HtmlWebpackPlugin());
  config.devServer = {
      contentBase: PATHS.build,
      hot: true,
      historyApiFallback: true,
      staticOptions: {
        index: false
      },
      proxy: {
        '/api/*': 'http://localhost:7777/'
      }
    }
}

module.exports = config;
