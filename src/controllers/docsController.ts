import Debug from "debug";
import { NextFunction, Request, Response } from "express";
import chalk from "chalk";
import docs from "../data/docs";

const debug = Debug("my-docs:wordsController");

export const getAllDocs = (req: Request, res: Response, next: NextFunction) => {
  debug(chalk.white("Sending all the docs"));
  res.status(200).json({ docs });
  next();
};

export const getDocById = (req: Request, res: Response, next: NextFunction) => {
  const id = +Object.keys(req.query)[0];

  const chosenDoc = docs.filter((doc) => doc.id === id);

  debug(chalk.white(`Sending the doc ${id}`));

  res.status(200).json({ chosenDoc });
  next();
};
