import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin'; // prod (added for prod)

// Prod:
const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {

  debug: true,

  // devtool: 'inline-source-map', // dev
  devtool: 'source-map', // prod; a little bit slow but more thorough than the dev one

  // So WP will list all the files during bundling but it will add lots of noises on the command line
  noInfo: false,

  // The point where middle-wares are injected such as for hot-reloading
  // Dev:
  // entry: [
  //   'eventsource-polyfill',                      // necessary for hot-reloading with IE
  //   'webpack-hot-middleware/client?reload=true', // note that it reloads the page if hot module reloading fails.
  //   path.resolve(__dirname, 'src/index')         // (index.js) must be as the last entry in this section
  // ],

  // Prod:
  entry: './src/index',

  // Set it to 'node' if webpack is used for a node app which would change the way webpack bundles our codes.
  // 'web' means webpack is going to bundle the source so the web browser can understand.
  target: 'web',

  // Tells webpack where to bundle our application.
  // Important: Webpack won't generate any actual physical files for our development.
  //            It will serve files from memory to the browser.
  // Physical files are only output by the production build task `npm run build`.
  output: {
    path: __dirname + '/dist', // In prod, this folder will have the physical files generated under.
    publicPath: '/',
    filename: 'bundle.js'
  },

  // Tell webpack dev server where the code is.
  // devServer: { contentBase: path.resolve(__dirname, 'src') }, // dev
  devServer: { contentBase: './dist' }, // prod

  // Define two plugins that can enhance webpack power.
  // Dev:
  // plugins: [
  //   // 1. Do whole module replacement w/o browser refresh:
  //   new webpack.HotModuleReplacementPlugin(),
  //   // 2. Keep us from errors breaking hot-reloading experience; instead, we will see very nice
  //   //    error messages in the browser.
  //   new webpack.NoErrorsPlugin()
  // ],

  // Prod:
  plugins: [
    // Optimizes the order of the files bundled in for optimal minification.
    new webpack.optimize.OccurrenceOrderPlugin(),

    // Let us define variables that are made available to the libraries that webpack is bundling.
    // React, for example, looks for the node environment to determine if should be built in the prod mode.
    // Production mode will omit the dev specific features like PropTypes, which increases React performance in prod.
    // This also reduces bundle size.
    new webpack.DefinePlugin(GLOBALS),

    // Extract our css into separate physical files.
    new ExtractTextPlugin('styles.css'),

    // Eliminate duplicate plugin in our final bundle.
    new webpack.optimize.DedupePlugin(),

    // Minify the Javascript.
    new webpack.optimize.UglifyJsPlugin()
  ],

  // This section tells webpack what file types it should handle.

  module: {
    loaders: [
      // 1. JavaScript, use babel to transcript:
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},

      // 2. Styling sheet (dev):
      // {test: /(\.css)$/, loaders: ['style', 'css']},

      // 2. Styling sheet (prod):
      {test: /(\.css)$/, loader: ExtractTextPlugin.extract('css?sourceMap')},
      // Extract the file type (css) we are dealing with, plus the ? to tell it to generate the sourceMap as well.
      // So we will have a corresponding separate physical files that handle our source map.
      // Note the singular loader vs. loaders with an array.

      // 3. eot - Embedded OpenType:
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},

      // 4. woff - web open font format:
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},

      // 5. ttf - font file format:
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},

      // 6. svg - Scalable Vector Graphics, an XML-based vector image format for two-dimensional graphics:
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
