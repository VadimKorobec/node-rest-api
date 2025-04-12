const express = require("express");

const router = express.Router();

const ctrl = require("../controllers/posts");

const validateBody = require("../middlewares/validateBody");
const isValidId = require("../middlewares/isValidId");

const { schemas } = require("../models/post");

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.addPost);

router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrl.updateById);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

router.delete("/:id", isValidId, ctrl.deleteById);

module.exports = router;
