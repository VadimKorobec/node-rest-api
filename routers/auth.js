const express = require("express");

const router = express.Router();

const ctrl = require("../controllers/auth");

const validateBody = require("../middlewares/validateBody");
const authenticete = require("../middlewares/authenticate");

const { schemas } = require("../models/user");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.post("/logout", authenticete, ctrl.logout);

module.exports = router;
