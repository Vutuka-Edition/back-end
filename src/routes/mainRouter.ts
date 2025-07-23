import { Router, Request, Response } from "express";
import userRouter from "./userRouter";
import adminRouter from "./adminRouter";
import sharedRouter from "./sharedRouter";


const mainRouter: Router = Router();

mainRouter.use("/admin", adminRouter);
mainRouter.use("/user", userRouter);
mainRouter.use("/shared", sharedRouter);

mainRouter.get("/", (req: Request, res: Response) => {
  console.log("Getting started!!")
    res.json({ message: "Hello, Welcome to SunCulture platform API" });
  });

export default mainRouter;