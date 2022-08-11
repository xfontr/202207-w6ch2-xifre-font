import "./localEnvironment";
import Debug from "debug";
import express from "express";
import chalk from "chalk";
import docsRouter from "./routers/docsRouter";
import mainError from "./middlewares/errors";

const debug = Debug("my-docs:index");

const app = express();

const port = process.env.PORT ?? 4000;

app.listen(port, () => {
  debug(chalk.bgBlue(`Server on at port ${port}`));
});
app.use(express.json());

app.use("/things", docsRouter);

app.use(mainError);
