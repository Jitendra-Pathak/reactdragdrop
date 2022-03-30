const webpack = require("webpack");
const path = require("path");
const Autoprefixer = require("autoprefixer");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (env, argv) {
  const cwdPath = process.cwd();
  return {
    entry: [path.resolve(__dirname, path.join(cwdPath, "/demo/main.js"))],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          sideEffects: false,
          loader: require.resolve("babel-loader"),
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              require.resolve("@babel/plugin-proposal-class-properties"),
              [
                require.resolve("babel-plugin-named-asset-import"),
                {
                  loaderMap: {
                    svg: {
                      ReactComponent: "@svgr/webpack?-prettier,-svgo![path]"
                    }
                  }
                }
              ]
            ],
            cacheDirectory: true,
            cacheCompression: false
          }
        },

        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader"
            },
            {
              loader: "postcss-loader",
              options: {
                plugins() {
                  return [
                    new Autoprefixer({
                      browsers: ["last 2 versions", "> 5%"]
                    })
                  ];
                }
              }
            },
            {
              loader: "resolve-url-loader",
              options: {
                keepQuery: true
              }
            },
            {
              loader: "sass-loader", // compiles Sass to CSS
              options: {
                sourceMap: true,
                sourceMapContents: false
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "i/"
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "c/common/fonts/"
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CaseSensitivePathsPlugin(),
      new HtmlWebpackPlugin({
        title: "Development",
        template: "./demo/index.html"
      }),
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: "c/[name].css"
      })
    ]
  };
};