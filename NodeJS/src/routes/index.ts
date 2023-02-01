import userRouter from "./users.router";
import express, { Express } from "express";

const masterRoute = "/api/v1";

function routerApi(app: Express) {
  const apiRouter = express.Router();
  app.use(masterRoute, apiRouter);
  apiRouter.use("/users", userRouter);
}

export default routerApi;
