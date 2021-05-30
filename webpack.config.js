const path = require("path");
const webpack = require("webpack");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    main: "./main.js",
  },
  output: {
    path: path.resolve("./dist/"),
    filename: '[name].min.js',
    publicPath: "dist/",
    clean: true,
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { publicPath: "./" } },
          { loader: "css-loader", options: { sourceMap: false } },
          {
            loader: 'postcss-loader',
            options: { postcssOptions: { plugins: ['autoprefixer'] }},
          },
          "sass-loader",
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].min.css' }),
  ],
  optimization: {
    // minimizer: [
    //   `...`,
    //   new CssMinimizerPlugin(),
    // ],
  },
};
