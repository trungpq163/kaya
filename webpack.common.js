const path = require('path');

module.exports = {
  entry: ['./src/index.js', './src/index.scss'],
  output: {
    filename: 'js/index.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: [/node_modules/]
    }, {
      test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      ],
      exclude: [/node_modules/]
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [
        'file-loader',
        'url-loader'
      ],
      exclude: [/node_modules/]
    }, {
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    }]
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  }
};