const path = require('path');

module.exports = {
  entry: './src/index.js', // ajuste o caminho para o arquivo de entrada do seu projeto
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // ajuste o caminho de saída conforme necessário
  },
  resolve: {
    fallback: {
      "zlib": require.resolve("browserify-zlib"),
      "querystring": require.resolve("querystring-es3"),
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "http": require.resolve("stream-http"),
      "net": false,
      "fs": false
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
