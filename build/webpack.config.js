module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "./bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: ["*", ".ts", ".js"]
  },
  module: {
    rules: [{ test: /\.ts?$/, loader: "ts-loader", exclude: "/node_modules/" }]
  }
};