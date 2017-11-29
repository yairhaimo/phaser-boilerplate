const path = require('path');
module.exports = {
  entry: {
    app: ['./src/app.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  externals: {
    phaser: 'Phaser'
  },
  module: {
    rules: [
      {
        test: /(pixi|phaser).js/,
        use: 'script-loader'
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    hot: true
  }
};
