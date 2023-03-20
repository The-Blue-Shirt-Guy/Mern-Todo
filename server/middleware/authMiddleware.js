// const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  // const { token } = req.headers.authorization
  // var decoded = await jwt.verify(token, process.env.SECRET);
  //   console.log(decoded)

  console.log("verfy middle man");
  next();
};

module.exports = verifyUser;
