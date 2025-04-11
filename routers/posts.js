const express = require("express");

const router = express.Router();

const ctrl = require("../controllers/posts");

router.get("/", ctrl.getAll);

router.post("/", ctrl.addPost);

module.exports = router;
