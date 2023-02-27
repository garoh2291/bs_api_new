const { check } = require("express-validator");

exports.userValidator = [
  check("email", "Email is wrong").trim().isEmail().normalizeEmail(),
  check("name", "Name is required").trim().isLength({ min: 3 }),
  check("surname", "Surname is required").trim().isLength({ min: 3 }),
  check("city", "City is required").trim().isLength({ min: 3 }),
  check("password", "Password mus be minimum 6 characters")
    .trim()
    .isAlphanumeric()
    .isLength({ min: 6 }),
];
