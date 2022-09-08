import Sample from "../src/Sample";
import ReactDOMServer from "react-dom/server";
import { createRoot } from "react-dom/client";

const express = require("express");
const app = express();
const port = 9000;

const root = createRoot(document.getElementById("app"));
root.render(<BookList />);

app.get("/", (req, res) => {
  res.send(ReactDOMServer.renderToString(<Sample />));
  // res.send("Hello World!");
});

app.listen(port, () => {
  console.log("サーバー起動中");
});
