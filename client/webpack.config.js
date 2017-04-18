const fs = require('fs');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

const commonConfig = merge([
  {
    entry: {
      main: PATHS.app,
    },
    output: {
      path: PATHS.build,
      filename: '[name].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "main page",
      })
    ],
  },
]);

const productionConfig = {
  devtool: 'source-map',
};

const developmentConfig = merge([
  {
    output: {
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
    },
  },
  {
    devtool: 'cheap-module-eval-source-map',
  },
  {
    devServer: {
      host: process.env.HOST,
      port: process.env.PORT,
      overlay: {
        errors: true,
        warnings: true,
      },
    },
  },
]);

module.exports = (env) => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }
  return merge(commonConfig, developmentConfig);
};
