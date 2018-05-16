console.log('In webpack.config.dev.js.');

import webpack from 'webpack';
import path from 'path';

// Dev:
const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development')
};

export default {

  debug: true,

  devtool: 'inline-source-map',

  // So WP will list all the files during bundling but it will add lots of noises on the command line
  noInfo: false,

  // The point where middle-wares are injected such as for hot-reloading
  entry: [
    'eventsource-polyfill',                      // necessary for hot-reloading with IE
    'webpack-hot-middleware/client?reload=true', // note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index')         // (index.js) must be as the last entry in this section
  ],

  target: 'web',

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      // 1. JavaScript, use babel to transcript:
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      // 2. Styling sheet:
      {test: /(\.css)$/, loaders: ['style', 'css']},
      // 3. eot - Embedded OpenType:
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      // 4. woff - web open font format:
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      // 5. ttf - font file format:
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      // 6. svg - Scalable Vector Graphics, an XML-based vector image format for two-dimensional graphics:
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  },

  // This section tells webpack what file types it should handle.

  proxy: "http://localhost:3000"
};
