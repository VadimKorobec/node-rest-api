const mongoose = require("mongoose");

const app = require("./app");

mongoose
  .connect(process.env.DB_HOST)
  .then(() => {
    app.listen(process.env.PORT);
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
