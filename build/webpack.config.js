module.exports = {
  entry: ["./src/index.ts", "./assets/index.scss"],
  output: {
    filename: "./bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: ["*", ".ts", ".js"]
  },
  module: {
    rules: [
      { test: /\.ts?$/, loader: "ts-loader", exclude: "/node_modules/" },
      {
        test: /\.scss?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].css",
              outputPath: "./css"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "css-loader",
            options: {
              minimize: true
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
};
