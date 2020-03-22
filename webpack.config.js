const path = require('path');
const SRC_DIR = path.join(__dirname, 'client', 'src');
const PUBLIC_DIR = path.join(__dirname, 'client', 'public');

module.exports = {
  mode: 'development',
  entry: path.join(SRC_DIR, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: PUBLIC_DIR,
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options : {
              presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },

      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
    ]
  }
};