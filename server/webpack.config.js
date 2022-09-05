// const path = require("path");
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
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: "main.js",
  },
  // context: path.resolve(__dirname, "src"),
  module: {
    rules: [
      {
        // 拡張子 .ts もしくは .tsx の場合
        test: /\.tsx?$/,
        exclude: /node_modules/,
        // loader: "ts-loader",
        // TypeScript をコンパイルする
        use: "ts-loader",
      },
    ],
  },
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: [".tsx", ".json", ".js"],
    modules: ["node_modules"],
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ["web", "es5"],
  mode: "development",
};
