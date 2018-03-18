const path = require('path');
const fs = require('fs');

const webpack = require('webpack')

const WriteFilePlugin = require('write-file-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const nodeExternals = require('webpack-node-externals');
const StatsPlugin = require('stats-webpack-plugin')

const root = path.join(__dirname, '..');
const dist = path.join(__dirname, 'dist');
const entry = path.join(__dirname, 'entry');

const clientEntry = path.join(entry, 'client');
const clientOutput = path.join(dist, 'client');

const serverEntry = path.join(entry, 'server');
const serverOutput = path.join(dist, 'server');


const client = {
  name: 'client',
  target: 'web',
  mode: 'development',
  devtool: 'source-map',
  entry: ['@babel/polyfill', clientEntry],
  output: {
    path: clientOutput,
    filename: 'client.js',
    publicPath: '/',
  },
  watch: true,
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new WriteFilePlugin({ test: /^(?!.*(hot)).*/ }),
    new webpack.HotModuleReplacementPlugin(),
    new StatsPlugin('clientstats.json')
    //new BundleAnalyzerPlugin(),
  ]
}

const server = {
  name: 'server',
  target: 'node',
  mode: 'development',
  devtool: 'source-map',
  entry: ['webpack/hot/poll?1000', serverEntry],
  watch: true,
  externals: [nodeExternals({
    whitelist:[
      'webpack/hot/poll?1000',
      'react-universal-component',
      'webpack-flush-chunks',
      'material-ui'
    ]
  })],
  output: {
    path: serverOutput,
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]'
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  
  plugins: [
    new WriteFilePlugin(),
    new webpack.HotModuleReplacementPlugin(),
   /*  new webpack.SourceMapDevToolPlugin({
      moduleFilenameTemplate: info => {
        console.log(info)
        return `webpack:///${info.resourcePath}?${info.loaders}`
      },
      filename: '[name].js.map'
    }) */
  ]
}

module.exports = [client, server]