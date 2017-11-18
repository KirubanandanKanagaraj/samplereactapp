module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
 module: {
    loaders: [
       {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss|.css?$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(jpe?g|ico|gif|png|svg|woff|ttf|eot)$/,
        loader: 'file-loader?emitFile=true&name=[path][name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {

    compress: true,

    disableHostCheck: true,

    https: true

 }
}
