import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRouters from "./route/web";
require("dotenv").config();
//query

let app = express();
let port = process.env.PORT || 6969;
app.use(bodyParser.json());

viewEngine(app);
initWebRouters(app);

app.listen(port, () => {
  //callback
  console.log("backend nodejs on", port);
});
