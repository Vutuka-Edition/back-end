import { Router } from "express";

const adminRouter = Router();

adminRouter.get("/", (req, res) => {
  res.json({ message: "Admin route is working!" });
});

export default adminRouter;