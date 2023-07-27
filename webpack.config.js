const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/,
        use: {
          loader: "swc-loader",
          options: {
            configFile: ".swcrc",
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: "tsconfig.json",
        mode: "readonly",
        async: true, // Set to true to perform type checking asynchronously
        checkSyntacticErrors: true, // Enable or disable checking for syntax errors
        logger: true,
      },
    }),
  ],
};
