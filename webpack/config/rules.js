const rules = [
  {
    test: /.jsx?$/,
    exclude: /node_modules/,
    use: 'happypack/loader?id=js'
  },
  {
    test: /.css$/,
    use: 'happypack/loader?id=css'
  },
  {
    test: /\.(png|jpg|jpeg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  },
  {
    test: /\.(ttf|otf|eot|woff|woff2|svg|woff(2)?)(\?[a-z0-9]+)?$/,
    loader: 'file-loader'
  },
  { test: /\.graphql?$/, loader: 'webpack-graphql-loader' }
]

module.exports = rules