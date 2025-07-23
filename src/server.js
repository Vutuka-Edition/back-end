"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var dotenv_1 = require("dotenv");
var app_1 = require("./app");
dotenv_1.default.config();
var port = process.env.PORT || 5000;
var mongoUri = process.env.MONGO_URI;
mongoose_1.default
    .connect(mongoUri)
    .then(function () {
    console.log('✅ MongoDB connected');
    app_1.default.listen(port, function () {
        console.log("\uD83D\uDE80 Server running at http://localhost:".concat(port));
    });
})
    .catch(function (err) {
    console.error('❌ MongoDB connection error:', err);
});
