import { ErrorRequestHandler } from "express";
import { HttpException } from "../exceptions/HttpException";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof HttpException) {
    res.status(err.status).json({ ...err });
  } else {
    res.status(500).send("Something went wrong");
  }
};
