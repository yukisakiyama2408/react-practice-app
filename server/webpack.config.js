const path = require("path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./index.tsx",
  externals: [nodeExternals()],
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: path.resolve(__dirname, "dist"),
    // `${__dirname}/dist`,
    // 出力ファイル名
    filename: "main.js",
  },
  // context: path.resolve(__dirname, "src"),
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
        // include: [__dirname, path.join(__dirname, "src")],
      },
      // {
      //   test: /\.(js|ts|tsx)$/,
      //   // exclude: /node_modules/,
      //   // include: [path.resolve(__dirname, "src")],
      //   use: {
      //     loader: "ts-loader",
      //   },
      // },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true, // true outputs JSX tags
            },
          },
        ],
      },
    ],
  },
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: [".ts", ".tsx", ".json", ".js", "jsx"],
    modules: ["node_modules"],
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  // target: ["web", "es5"],
  target: ["node"],
  mode: "development",
  devtool: "inline-source-map",
};
