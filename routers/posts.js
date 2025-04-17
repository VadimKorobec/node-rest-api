const express = require("express");

const router = express.Router();

const ctrl = require("../controllers/posts");

const validateBody = require("../middlewares/validateBody");
const isValidId = require("../middlewares/isValidId");
const authenticate = require("../middlewares/authenticate");

const { schemas } = require("../models/post");

router.get("/", authenticate, ctrl.getAll);

router.get("/:id", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.addPost);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateById
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

router.delete("/:id", authenticate, isValidId, ctrl.deleteById);

module.exports = router;
