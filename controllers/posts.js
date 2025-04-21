const { Post } = require("../models/post");

const HttpError = require("../helpers/HttpError");

exports.getAll = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const posts = await Post.find({ owner }, "-updatedAt");
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Post.findById(id, "-updatedAt");
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.addPost = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const result = await Post.create({ ...req.body, owner });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

exports.updateById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Post.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.updateFavorite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Post.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.deleteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Post.findByIdAndDelete(id);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    next(error);
  }
};
