const express = require("express");
const cors = require("cors");

const app = express()

app.use(express.json());
app.use(cors());

const postsRouter = require("./routers/posts");

app.use("/api/posts", postsRouter);

// pdJ5TNoSHi61rxWA

module.exports = app;
