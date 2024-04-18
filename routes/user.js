const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const auth = require("../middlewares/auth");

router.patch("/editProfile",[auth.authToken] ,userController.editProfile);

router.get("/profile",[auth.authToken], userController.getUserById);

module.exports = router;