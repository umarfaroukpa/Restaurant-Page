const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js',
    another: './src/another-module.js',
  },
  performance: {
    hints: false,
    maxEntrypointSize: 500000,
    maxAssetSize: 500000,
  },
  devtool: 'source-map',
  devServer: {
    static: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]'
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      title: 'Afri Dish',
    }),
    // Only include this if you need to copy files that aren't handled by webpack directly
    new CopyWebpackPlugin({
      patterns: [
        // If you have a food-gala folder to copy, make sure it exists in the source
        { from: 'src/food-gala', to: 'food-gala', noErrorOnMissing: true },
      ],
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: {
      keep: /assets|food-gala/,
    },
    publicPath: './', // Using relative path instead of absolute
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};