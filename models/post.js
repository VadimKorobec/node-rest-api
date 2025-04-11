const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    favorite: {
      type: Boolean,
      default:false,
    },
  },
  { versionKey: false, timestamps: true }
);

const Post = model("post", postSchema);

module.exports = Post;
