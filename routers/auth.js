const express = require("express");

const router = express.Router();

const ctrl = require('../controllers/auth')

const validateBody = require("../middlewares/validateBody");
const { schemas } = require("../models/user");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post('/login', validateBody(schemas.loginSchema), ctrl.login)

module.exports = router;
