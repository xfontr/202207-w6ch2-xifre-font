import Debug from "debug";
import express, { NextFunction, Request, Response } from "express";
import chalk from "chalk";
import docs from "../data/docs";

const debug = Debug("my-docs:wordsController");

const app = express();

const getAllDocs = app.get(
  "/things",
  (req: Request, res: Response, next: NextFunction) => {
    debug(chalk.white("Sending all the docs"));
    res.status(200).json({ docs });
    next();
  }
);

export default getAllDocs;
