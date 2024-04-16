import express, { Express, Response } from "express";

const api: Express = express();

api.get("/", (_, res: Response) => {
  res.send("Express + TypeScript Server");
});

export { api };
