const path = require('path')
const slsw = require('serverless-webpack')
const isLocal = slsw.lib.webpack.isLocal
const nodeExternals = require('webpack-node-externals')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: isLocal ? 'development' : 'production',
  devtool: isLocal ? 'eval-source-map' : 'eval',
  entry: slsw.lib.entries,
  target: 'node',
  resolve: {
    extensions: ['.mjs', '.ts', '.js'],
    alias: {
      '@sogrow/services/infra/observation': path.resolve(__dirname, '../../../libs/services/infra/observation/src/index.ts'),
    },
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
          to: path.resolve(__dirname, '../../../apps/services/analytics/prisma/schema.prisma'),
        },
      ],
    }),
  ],
}
