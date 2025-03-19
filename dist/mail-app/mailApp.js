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
const nodemailer_1 = __importDefault(require("nodemailer"));
require('dotenv').config();
const transport = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});
transport.verify((error, success) => {
    if (error) {
        console.error("SMTP connection failed:", error);
        return { success: false, error: error.message };
    }
    else {
        console.log("SMTP server is ready to send emails");
    }
});
function sendMail(name, company, email, phone, content) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!name || !email || !content) {
                throw new Error("Missing required fields: name, email, or content");
            }
            const message = yield transport.sendMail({
                from: `"Company Name" <${process.env.SMTP_USER}>`,
                to: process.env.SMTP_USER,
                subject: `Inquiry (${name})`,
                text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone number: ${phone}\n\n${content}`
            });
            console.log("Message sent:", message.messageId);
            return { success: true, messageId: message.messageId };
        }
        catch (err) {
            console.error("Error: Failed to send email\n", err);
            return { success: false, error: err.message };
        }
    });
}
module.exports = sendMail;
