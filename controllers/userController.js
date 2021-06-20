const { User } = require("../models");
const sha256 = require("js-sha256");
const jwt = require("jwt-then");

exports.register = async (req, res) => {
  const { userName, firstName, lastName, email, password } = req.body;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  if (!passRegex.test(password))
    throw "Password must contain alteast one lower-case, upper-case and atleast 8 digits ";
  if (!emailRegex.test(email)) throw "Email is not supported from your domain";
  if (typeof firstName !== "string")
    throw "firstname must contain only alphabets";
  if (typeof lastName !== "string")
    throw "lastname must contain only alphabets";

  const userExists = await User.findOne({
    where: { email, userName },
  });

  if (userExists) throw "User with same username and email already exists";

  const user = new User({
    userName,
    firstName,
    lastName,
    email,
    password: sha256(password + process.env.SALT),
  });

  await user.save();

  res.json({
    message: `User ${userName} registered successfully!`,
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
    $or: [{ email: email }, { userName: userName }],
    password: sha256(password + process.env.SALT),
  });

  if (!user) throw "incorrect username and password entered";

  const token = await jwt.sign({ id: user.id }, process.env.SECRET);

  res.json({
    message: "User logged in successfully",
    token,
  });
};

exports.deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) throw "User does not exist";
  res.json("User successfully deleted");
};

exports.updateUser = async (req, res) => {
  var updatedRecord = {
    userName: req.body.userName,
    password: req.body.password,
    phoneNo: req.body.phoneNo,
  };
  User.findByIdAndUpdate(req.params.id, { $set: updatedRecord }, (err, doc) => {
    if (!err) res.json("User UPDATED.");
    else res.status(400).json("Error: " + err);
  });
};
