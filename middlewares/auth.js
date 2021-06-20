const jwt = require("jwt-then");
module.exports = async (req, res, next) => {
  try {
    if (!req.headers.authorization) throw 401;

    const token = req.headers.authorization;
    const payload = await jwt.verify(token, process.env.SECRET);
    req.user = payload.user_id;
  } catch (err) {
    res.status(err).json({ message: "Unauthorized 👀" });
  }
  next();
};
