const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;
const validDate = process.env.VALID;
const generateAccessToken = (id, pId) => {
  //take passed id and return generated token
  const payload = {
    id,
    pId,
  };
  return jwt.sign(payload, secret, { expiresIn: validDate });
};

module.exports = {
  generateAccessToken,
};
