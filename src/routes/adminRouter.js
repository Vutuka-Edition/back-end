"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var adminRouter = (0, express_1.Router)();
adminRouter.get("/", function (req, res) {
    res.json({ message: "Admin route is working!" });
});
exports.default = adminRouter;
