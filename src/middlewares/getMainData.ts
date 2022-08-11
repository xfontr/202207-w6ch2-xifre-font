import Debug from "debug";
import express, { NextFunction, Request, Response } from "express";
import chalk from "chalk";

const debug = Debug("my-docs:index");

const app = express();

export const getURL = app.use(
  (req: Request, res: Response, next: NextFunction) => {
    debug(chalk.yellow(`Request received at ${req.url}`));
    next();
  }
);

export const getMethod = app.use(
  (req: Request, res: Response, next: NextFunction) => {
    debug(chalk.magenta(`With a method ${req.method}`));
    next();
  }
);

export const getResponse = app.use((req: Request, res: Response) => {
  Debug(chalk.green("This is the response"));
  res.send("Response");
});
