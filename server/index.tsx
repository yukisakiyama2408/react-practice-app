import Sample from "../src/Sample";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { createRoot } from "react-dom/client";
import { hydrateRoot } from "react-dom/client";

const express = require("express");
const app = express();
const port = 9000;

// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(<Sample />);

app.get("/", (req, res) => {
  res.send(ReactDOMServer.renderToString(<Sample />));
});

app.listen(port, () => {
  console.log("サーバー起動中");
});
