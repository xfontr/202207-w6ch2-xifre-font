export interface CustomError extends Error {
  code: number;
  publicMessage: string;
}

const createError = (code: number, message: string): CustomError => {
  const error = new Error() as CustomError;

  error.code = code;
  error.publicMessage = message;

  return error;
};

export default createError;
