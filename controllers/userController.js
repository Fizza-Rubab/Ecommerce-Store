const { User } = require("../models");
const sha256 = require("js-sha256");
const jwt = require("jwt-then");

exports.register = async (req, res) => {
  const { userName, email, password, seller } = req.body;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  if (!passRegex.test(password))
    throw "Password must contain alteast one lower-case, upper-case and atleast 8 digits ";
  if (!emailRegex.test(email)) throw "Email is not supported from your domain";

  const userExists = await User.findOne({
    where: { email, userName },
  });

  if (userExists) throw "User with same username and email already exists";

  const user = new User({
    userName,
    email,
    password: sha256(password + process.env.SECRET),
    seller,
  });

  await user.save();

  const token = await jwt.sign({ user_id: user.id }, process.env.SECRET);

  res.json({
    message: `User ${userName} registered successfully!`,
    token,
  });
};

exports.allUsers = async (req, res) => {
  await User.findAll()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json({ Error: err }));
};

exports.login = async (req, res) => {
  const { userName, password, email } = req.body;
  const user = await User.findOne({
    where: { userName, password: sha256(password + process.env.SECRET) },
  });

  if (!user) throw "incorrect username and password entered";

  const token = await jwt.sign({ user_id: user.id }, process.env.SECRET);

  res.json({
    message: "User logged in successfully",
    token,
  });
};
