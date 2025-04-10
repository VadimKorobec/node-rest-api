const Post = require("../models/post");

const httpError = require("../helpers/HttpError");

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

// exports.addPost = (req, res, next) => {
//   const { title, content } = req.body;
//   res.status(201).json({
//     message: "Post created successfully",
//     post: {
//       _id: new Date().toDateString(),
//       title,
//       content,
//       creator: { name: 'Cat' },
//       createdAt: new Date()
//     },
//   });
// };
