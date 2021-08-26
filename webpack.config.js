const path = require('path')
// const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {app: './src/index.js'},
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/",
    filename: '[name].js',
    library: ["com", "example"],
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  "corejs": 3,
                  "useBuiltIns": "usage",
                  "targets": "> 0.25%, not dead"
                }
              ]
            ]
          }
        }
      }
    ]
  },
  devtool: 'inline-source-map'
};