// Currently only used for testing purposes
// Routing to be implemented in the future

import path from "path";
import {Router} from "express";
const router = Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"))
})

export = router;