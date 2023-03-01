const { Router } = require("express");
const router = Router();
const eventController = require("../controllers/eventController");
const auth = require("../middlewares/authMiddleware");
const sub = require("../middlewares/activeSub");

router.get("/actual", auth, sub, eventController.getActual);
router.get("/getall", auth, eventController.getAll);
module.exports = router;
