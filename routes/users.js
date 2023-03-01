const { Router } = require("express");
const router = Router();
const userController = require("../controllers/userController");
const { userValidator } = require("../utils/validators");
const auth = require("../middlewares/authMiddleware");
const sub = require("../middlewares/activeSub");

router.post("/signup", userValidator, userController.signUp);
router.post("/signin", userController.signin);
router.get("/info", /*auth, sub,*/ userController.getInfo);

module.exports = router;
