import Debug from "debug";
import { NextFunction, Request, Response } from "express";
import chalk from "chalk";
import docs from "../data/docs";
import createError from "../utils/errors";

const debug = Debug("my-docs:wordsController");

export const getAllDocs = (req: Request, res: Response, next: NextFunction) => {
  if (docs.length === 0) {
    next(createError(404, "No docs avaliable"));
    next();
  }

  debug(chalk.white("Sending all the docs"));
  res.status(200).json({ docs });
  next();
};

export const getDocById = (req: Request, res: Response, next: NextFunction) => {
  const { idThing } = req.params;

  if (Object.values(docs).filter((doc) => doc.id === +idThing).length === 0) {
    next(createError(404, "No docs go by this id"));
    return;
  }

  const chosenDoc = docs.filter((doc) => doc.id === +idThing)[0];

  debug(chalk.white(`Sending the doc ${idThing}`));

  res.status(200).json({ chosenDoc });
  next();
};

export const deleteDocById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { idThing } = req.params;

  if (Object.values(docs).filter((doc) => doc.id === +idThing).length === 0) {
    next(createError(404, "No docs go by this id"));
    return;
  }

  docs.splice(
    docs.findIndex((doc) => doc.id === +idThing),
    1
  );

  debug(chalk.white(`Sending the doc ${idThing}`));

  res.status(200).json({ successMessage: `Deleted the doc ${idThing}` });
  next();
};

export const postDoc = (req: Request, res: Response, next: NextFunction) => {
  debug(req.body);
  next(createError(404, "haha nope"));
};
