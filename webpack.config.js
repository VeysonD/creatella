const webpack = require('webpack');
const path = require('path');

const paths = {
  PUBLIC: path.resolve(__dirname, 'public'),
  SRC: path.resolve(__dirname, 'src'),
}

module.exports = {
  entry: path.join(paths.SRC, 'index.jsx'),
  output: {
    path: paths.PUBLIC,
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exlude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
