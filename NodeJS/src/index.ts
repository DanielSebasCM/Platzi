import express, { Express, Request, Response } from "express";
import routerApi from "./routes";

const app: Express = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

routerApi(app);
app.listen(port);
