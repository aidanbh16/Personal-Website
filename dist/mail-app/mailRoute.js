"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const express_1 = require("express");
const mailApp_js_1 = __importDefault(require("./mailApp.js"));
const router = (0, express_1.Router)();
const fileStorageEngine = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path_1.default.join(__dirname, "../../src/mail-app/attachmentsPipeline"));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = (0, multer_1.default)({ storage: fileStorageEngine });
router.post("/", upload.single('file'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, mailApp_js_1.default)(req.body.name, req.body.company, req.body.email, req.body.phonenumber, req.body.message, req.body.file);
        if (result.success) {
            res.redirect('/');
            yield fs_1.promises.unlink(req.file.path);
        }
        else {
            res.redirect('/');
            yield fs_1.promises.unlink(req.file.path);
            throw new Error("Failed to send email");
        }
    }
    catch (err) {
        console.error(err);
    }
}));
module.exports = router;
