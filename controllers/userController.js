const { User, Profile } = require("../models");
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

exports.getUser = async (req, res) => {
  const id = req.params.id;
  await User.findOne({ where: { id }, raw: true, nest: true })
    .then(async (user) => {
      user.profile = await Profile.findOne({
        where: { user_id: id },
        raw: true,
        nest: true,
      });
      if (user.profile && user.profile.imageData )
        user.profile.imageData = user.profile.imageData.toString("base64");
      res.json(user);
    })
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

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const token = await jwt.sign({ user_id: id }, process.env.SECRET);
  User.update({ userName: req.body.userName }, { where: { id } })
    .then(() => {
      res.json({
        message: "User updated successfully",
        token,
      });
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.deleteUser = async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findByPk(id);
  user
    .destroy()
    .then(() => {
      res.json({ message: "user deleted" });
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.addImage = async (req, res, next) => {
  const user_id = req.user;
  const [profile, created] = await Profile.findOrCreate({ where: { user_id } });
  profile.imageType = req.file.mimetype;
  profile.imageName = req.file.originalname;
  profile.imageData = req.file.buffer;
  profile
    .save()
    .then(() => {
      res.json({ message: "uploaded" });
    })
    .catch((err) => {
      res.json(err);
    });
};
