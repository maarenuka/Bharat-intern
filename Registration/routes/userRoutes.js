const express = require("express");
const homePageController = require("../controllers/homePageControllers");
const { validateUser } = require("../controllers/validateUser");
const { sendError } = require("../controllers/sendError");
const { sendSuccess } = require("../controllers/sendSuccess");

const router = express.Router();

router.get("/", homePageController);
router.get("/error", sendError);
router.get("/success", sendSuccess);
router.post("/submit", validateUser);

module.exports = router;
