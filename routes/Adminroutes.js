const express = require("express");
const { registercntl, logincntl, getalluser, updaterole } = require("../controllers/Admincntl");
const authmiddleware = require("../middleware/authmiddleware");

const router = express.Router();

router.post("/register", registercntl);
router.post("/login", logincntl);
router.get("/getalluser",authmiddleware,getalluser);
router.post("/updaterole",authmiddleware,updaterole);
module.exports = router;
