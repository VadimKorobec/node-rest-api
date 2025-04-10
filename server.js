const mongoose = require("mongoose");

const app = require("./app");

const port = 8080;

const DB_HOST =
  "mongodb+srv://Vadim:pdJ5TNoSHi61rxWA@cluster0.g5vrjd2.mongodb.net/posts_reader?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(port);
    console.log(`Database connect success port ${port}`);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1)
  });
