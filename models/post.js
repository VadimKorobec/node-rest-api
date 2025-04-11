const { Schema, model } = require("mongoose");
const Joi = require("joi");

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

postSchema.post("save", (error, data, next) => {
  error.status = 400;
  next();
});

const addSchema = Joi.object({
  title: Joi.string().replace(),
  content: Joi.string().required(),
  favorite: Joi.boolean(),
});

const schemas = {
  addSchema,
}

const Post = model("post", postSchema);

module.exports = {
  Post,
  schemas,
};
