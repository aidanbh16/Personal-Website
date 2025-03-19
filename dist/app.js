"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
const homeRoute_1 = __importDefault(require("./routes/homeRoute"));
const mailRoute_1 = __importDefault(require("./mail-app/mailRoute"));
app.use("/", homeRoute_1.default);
app.use("/send-mail", mailRoute_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
