import { Router } from "express";

const sharedRouter = Router();

sharedRouter.get("/", (req, res) => {
  res.json({ message: "Shared route is working!" });
});

export default sharedRouter;