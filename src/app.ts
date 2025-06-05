// Currently only used for testing purposes
// Routing to be implemented in the future

import express from "express";
import path from "path";
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "../public")));

import homeRoute from "./routes/homeRoute";
import mailRoute from "./routes/mailRoute.js";

app.use("/", homeRoute);
app.use("/send-mail", mailRoute)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})