const express = require("express");

const router = express.Router();

const ctrl = require("../controllers/posts");

const validateBody = require("../middlewares/validateBody");

const { schemas } = require("../models/post");

router.get("/", ctrl.getAll);

router.post("/", validateBody(schemas.addSchema), ctrl.addPost);

module.exports = router;
