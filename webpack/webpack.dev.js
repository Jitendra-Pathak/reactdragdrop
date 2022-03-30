const webpack = require("webpack");
const Merge = require("webpack-merge");
const CommonConfig = require("./webpack.common.js");
let mode = "development";

module.exports = function (env, argv) {
  return Merge(CommonConfig(env, argv), {
    mode: mode,
    devServer: {
      contentBase: "./demo",
      compress: true,
      port: 9000,
      stats: "errors-only",
      hot: true
    }
  });
};
