"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const path_1 = __importDefault(require("path"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../../public/index.html"));
});
module.exports = router;
