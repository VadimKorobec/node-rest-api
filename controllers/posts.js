const { Post } = require("../models/post");

const httpError = require("../helpers/HttpError");

exports.getAll = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

exports.addPost = async (req, res, next) => {
  console.log(req.body)
  try {
    const result = await Post.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
