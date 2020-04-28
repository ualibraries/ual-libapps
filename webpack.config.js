const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry: {
      libanswers: './src/libanswers.js',
      libguides: './src/libguides.js',
      azlist: './src/azlist.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: path.resolve(__dirname, "src/"),
              useRelativePaths: true
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new OptimizeCssAssetsPlugin(),
    new MergeIntoSingleFilePlugin({
      files: {
        "vendor.js": [
          'node_modules/jquery-once/jquery.once.min.js',
          path.resolve(__dirname, 'src/js/*.js'),
        ],
      }
    }),
    new CopyWebpackPlugin([
      {from:'src/images',to:'images'} 
    ]),
  ],
};

module.exports = config;
