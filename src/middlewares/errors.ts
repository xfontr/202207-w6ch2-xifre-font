import chalk from "chalk";
import debug from "debug";
import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/errors";

const mainError = (
  error: CustomError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  const errorCode = error.code ?? 500;
  const errorMessage = error.publicMessage ?? "Bad gateway";

  debug(chalk.red(error.message));

  res.status(errorCode).json({ error: errorMessage });
};

export default mainError;
