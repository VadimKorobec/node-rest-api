const express = require("express");

const router = express.Router();

const postsCtrl = require("../controllers/posts");

router.get("/", postsCtrl.getPosts);

// router.post('/', postsCtrl.addPost)

module.exports = router;
