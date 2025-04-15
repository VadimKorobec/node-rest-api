const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = new Schema({}, { versionKey: false, timestamps: true });

userSchema.post("save", (error, data, next) => {
  error.status = 400;
  next();
});

const User = model("user", userSchema);

module.exports = {
  User,
};
