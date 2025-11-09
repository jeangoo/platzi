import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

export default {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "./src/styles/styles.css", to: "" }],
    }),
  ],
};
