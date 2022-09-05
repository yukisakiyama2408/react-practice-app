const ReactDOMServer = require("react-dom/server");
const express = require("express");
const app = express();
const port = 9000;

function Hello() {
  return (
    <>
      <div>こんにちは</div>
    </>
  );
}

app.get("/", (req: any, res: any) => {
  res.send(ReactDOMServer.renderToString(<Hello />));
});

app.listen(port, () => {
  console.log("サーバー起動中");
});
