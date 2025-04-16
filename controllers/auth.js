const bcrypt = require("bcrypt");

const { User } = require("../models/user");

const HttpError = require("../helpers/HttpError");

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw HttpError(
        409,
        "Sorry, but we already have a user with the same e-mail address"
      );
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ ...req.body, password: hashPassword });
    res.status(201).json({
      name: newUser.name,
      email: newUser.email,
    });
  } catch (error) {
    next(error);
  }
};
