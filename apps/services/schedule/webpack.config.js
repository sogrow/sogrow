const path = require('path')
const slsw = require('serverless-webpack')
const isLocal = slsw.lib.webpack.isLocal
const nodeExternals = require('webpack-node-externals')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')

/*
  The configFile in TsConfigPathsPlugin gets ignored, when TS_NODE_PROJECT is set,
  hence the only way to fix it, is to remove the TS_NODE_PROJECT
  see: https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/17
 */
delete process.env.TS_NODE_PROJECT

module.exports = {
  mode: isLocal ? 'development' : 'production',
  devtool: isLocal ? 'eval-source-map' : 'eval',
  entry: slsw.lib.entries,
  target: 'node',
  resolve: {
    extensions: ['.mjs', '.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: 'tsconfig.app.json',
      }),
    ],
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  externalsPresets: { node: true },
  externals: [
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
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../../../libs/services/infra/gateway/src/lib/dal/prisma/schema.prisma'),
          to: path.resolve(__dirname, '../../../apps/services/schedule/prisma/schema.prisma'),
        },
      ],
    }),
  ],
}
