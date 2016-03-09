var path = require("path");
module.exports = {
  entry: {
    app: ["./src/app.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  externals: {
    phaser: "Phaser"
  },
  module: {
    loaders: [
      {
        test: /(pixi|phaser).js/, loader: 'script'
      },
      {
        test: /\.js/, loader: 'babel', exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    hot: true
  }
};
