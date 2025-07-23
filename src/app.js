"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var morgan_1 = require("morgan");
var logger_1 = require("../logger");
var mainRouter_1 = require("./routes/mainRouter");
var app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ limit: "50mb", extended: true }));
app.use(express_1.default.json({ limit: "50mb" }));
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "Accept, Content-Type, Authorization, X-Requested-With");
    next();
});
app.use("/api", mainRouter_1.default);
app.use(function (req, res) {
    res.status(404).json({ message: "Route not found" });
});
app.use(function (err, req, res, next) {
    logger_1.default.error(err.stack || err.message);
    res.status(err.status || 500).json({ message: "An unexpected error occurred", error: err.message });
});
exports.default = app;
