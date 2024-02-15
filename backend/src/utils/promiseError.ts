import express from "express";

function promiseErrorHandler<T extends Function>(fn: T) {
  return (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

export default promiseErrorHandler;
