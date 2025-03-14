import express from "express";
const PORT = process.env.PORT || 3000;

const app = express();

import homeRoute from "./routes/homeRoute";

app.use("/", homeRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})