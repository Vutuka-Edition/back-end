"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var sharedRouter = (0, express_1.Router)();
sharedRouter.get("/", function (req, res) {
    res.json({ message: "Shared route is working!" });
});
exports.default = sharedRouter;
