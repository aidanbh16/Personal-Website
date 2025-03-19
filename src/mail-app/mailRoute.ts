import {Request, Response} from "express";
import multer from "multer";
import path from "path";
import fs from "fs/promises";
import {Router} from "express";
import sendMail from "./mailApp.js";
const router = Router();

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../src/mail-app/attachmentsPipeline"));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({
    storage: fileStorageEngine,
    limits: {fileSize: 2 * 1024 * 1024},
    
})

router.post("/", upload.single('file'), async (req: Request, res: Response) =>{
    try{
        const result = await sendMail(
            req.body.name,
            req.body.company,
            req.body.email,
            req.body.phonenumber,
            req.body.message,
            req.file as Express.Multer.File
        );

        if (result.success) {
            res.redirect('/');
            if(req.file){
                await fs.unlink(req.file.path)
            }
        } else {
            res.redirect('/');
            if(req.file){
                await fs.unlink(req.file.path)
            }
            throw new Error("Failed to send email");
        }
    }catch(err: unknown){
        console.error(err)
    }
});

export = router;