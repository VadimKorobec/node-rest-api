exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id:'1',
        title: "First Post",
        content: "This is the first post",
        imageUrl: '/images/duck.jpg',
        creator: {
          name:'Cat'
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.addPost = (req, res, next) => {
  const { title, content } = req.body;
  res.status(201).json({
    message: "Post created successfully",
    post: {
      title,
      content,
    },
  });
};
