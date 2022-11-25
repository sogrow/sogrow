const path = require('path')
const slsw = require('serverless-webpack')
const isLocal = slsw.lib.webpack.isLocal
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: isLocal ? 'development' : 'production',
  devtool: isLocal ? 'eval-source-map' : 'eval',
  entry: slsw.lib.entries,
  target: 'node',
  resolve: {
    extensions: ['.mjs', '.ts', '.js'],
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  externals: [
    nodeExternals(),
    nodeExternals({
      modulesDir: path.resolve('../../../node_modules'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
}
