import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";

import logger from "../logger"
import mainRouter from "./routes/mainRouter";

const app = express();

app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));

app.use(
  cors({
    origin: "*",
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Accept, Content-Type, Authorization, X-Requested-With"
  );
  next();
});

app.use("/api", mainRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.stack || err.message);
  res.status(err.status || 500).json({ message: "An unexpected error occurred", error: err.message });
});

export default app;
