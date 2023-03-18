const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/*
=======================================
      authentication Register user
========================================
*/

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !name || !password) {
    res.status(400).send("please fill all fields");
    return;
  }

  const findUser = await User.findOne({ email });
  if (findUser) {
    res.status(401).json({ msg: "user already  exist" });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email: email.toLowerCase(),
    password: hashedPassword,
  });

  const token = jwt.sign(
    { userId: user._id, email, name },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );
  user.token = token;

  //   user.password = undefined;
  console.log(user);
  res.status(201).json(user);
};

/*
=======================================
      authentication Login user
========================================
*/
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send("please fill all fields");
    return;
  }

  const user = await User.find({ email });
  if (user.length === 0) {
    res.status(401).json({ msg: "user not found , Register first please" });
    return;
  }

  user[0].password = undefined;
  res.status(200).json({ user });
};

module.exports = {
  register,
  login,
};
