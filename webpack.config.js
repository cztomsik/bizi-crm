const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['angular', '@angular/router/angular1/angular_1_router'],
    bundle: './build',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ],
  devtool: 'eval',
  devServer: {
    inline: true,
    contentBase: __dirname + '/public',
    proxy: {
      '/api/*': {
        target: 'http://127.0.0.1:' + (process.env.PORT || 1234),
      },
    }
  }
};
