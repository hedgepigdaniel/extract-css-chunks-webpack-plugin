const Self = require('../../../');

module.exports = {
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          Self.loader,
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[local]',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        cssDedupe: {
          test: /\.css$/,
          chunks: 'all',
          minChunks: 2,
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new Self({
      filename: '[name].css',
    }),
  ],
};
