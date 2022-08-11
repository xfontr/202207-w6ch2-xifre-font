import "./localEnvironment";
import Debug from "debug";
import express from "express";

const debug = Debug("my-docs:index");

const app = express();
const port = process.env.PORT ?? 4000;

app.listen(port, () => {
  debug("Server on");
});

debug("Server");
