import nodemailer from "nodemailer";
require('dotenv').config();

const transport = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
})

transport.verify((error: any, success: any) => {
    if (error) {
        console.error("SMTP connection failed:", error);
        return { success: false, error: error.message};
    } else {
        console.log("SMTP server is ready to send emails");
    }
})

async function sendMail(name: string, company: string, email: string, phone: number, content: string, file: Express.Multer.File){
    try{
        if (!name || !email || !content) {
            throw new Error("Missing required fields: name, email, or content");
        }

        const messageOptions: any = {
            from: `"Company Name" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER,
            subject: `Inquiry (${name})`,
            text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone number: ${phone}\n\n${content}`
        };
        
        if (file) {
            messageOptions.attachments = [{
                filename: file.originalname,
                path: file.path
            }];
        }
        
        const message = await transport.sendMail(messageOptions);

        console.log("Message sent:", message.messageId);
        return { success: true, messageId: message.messageId };
    } catch (err: any) {
        console.error("Error: Failed to send email\n", err);
        return { success: false, error: err.message };
    }
}

export = sendMail;