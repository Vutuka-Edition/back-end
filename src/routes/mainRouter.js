"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userRouter_1 = require("./userRouter");
var adminRouter_1 = require("./adminRouter");
var sharedRouter_1 = require("./sharedRouter");
var mainRouter = (0, express_1.Router)();
mainRouter.use("/admin", adminRouter_1.default);
mainRouter.use("/user", userRouter_1.default);
mainRouter.use("/shared", sharedRouter_1.default);
mainRouter.get("/", function (req, res) {
    console.log("Getting started!!");
    res.json({ message: "Hello, Welcome to SunCulture platform API" });
});
exports.default = mainRouter;
