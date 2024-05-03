const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CopyWebpackPlugin = require('copy-webpack-plugin');

  module.exports = {
    mode:  'production',
    entry: {
      app: './src/index.js',
      another: './src/another-module.js',
      app: {
        import: './src/index.js',
        dependOn: 'shared'
      },

      another: {
        import: './src/another-module.js',
        dependOn: 'shared',
      },

      shared: 'lodash',

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
     ],
   },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/template.html',
        title: 'Afri Dish',
      }),

      new CopyWebpackPlugin({
        patterns: [
          { from: 'dist/assets', to: 'assets' },
          { from: 'dist/food-gala', to: 'food-gala' },
        ],
      }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },


    optimization: {
      runtimeChunk: 'single',
    },
   };
  

