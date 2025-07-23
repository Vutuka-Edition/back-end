"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userRouter = (0, express_1.Router)();
userRouter.get("/", function (req, res) {
    res.json({ message: "User route is working!" });
});
exports.default = userRouter;
