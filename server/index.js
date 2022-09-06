import { createRoot } from "react-dom/client";
import BookList from "../src/BookList";
import ReactDOMServer from "react-dom/server";

const express = require("express");
const app = express();
const port = 9000;

const root = createRoot(document.getElementById("app"));
root.render(<BookList />);

app.get("/", (req, res) => {
  res.send(ReactDOMServer.renderToString(<BookList />));
  // res.send("Hello World!");
});

app.listen(port, () => {
  console.log("サーバー起動中");
});
