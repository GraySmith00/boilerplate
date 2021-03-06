const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: './lib/index.js'
  },
  mode: 'development',
  output: {
    path: __dirname,
    filename: 'dist/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.css']
  }
};
