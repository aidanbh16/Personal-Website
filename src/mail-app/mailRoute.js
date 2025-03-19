const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs").promises;
const router = express.Router();
const sendMail = require("./mailApp.js");

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../src/mail-app/attachmentsPipeline"));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({storage: fileStorageEngine})

router.post("/", upload.single('file'), async (req, res) =>{
    try{
        const result = await sendMail(req.body.name, req.body.company, req.body.email, req.body.phonenumber, req.body.message, req.body.file);
        if (result.success) {
            res.redirect('/');
            if(res.body.file){
                await fs.unlink(req.file.path)
            }
        } else {
            res.redirect('/');
            if(res.body.file){
                await fs.unlink(req.file.path)
            }
            throw new Error("Failed to send email");
        }
    }catch(err){
        console.error(err)
    }
});

modules.export = router;