const webpack = require('webpack');
const path = require('path');

const publicContentPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
    {
      test: /\.js|jsx$/i,
      exclude: /node_modules/,
      use: ['babel-loader']
    }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: publicContentPath,
    publicPath: '/',
    filename: 'app.js'    
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ],
  devServer: {
    contentBase: publicContentPath,
    hot: true
  } 
};
