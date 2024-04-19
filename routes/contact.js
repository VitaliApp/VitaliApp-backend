const express = require("express");
const router = express.Router();
const contactRecordController = require("../controllers/contact");
const auth = require("../middlewares/auth");

router.post("/create",[auth.authToken], contactRecordController.createContactRecord);

router.patch("/edit/:id",[auth.authToken], contactRecordController.updateContactRecord);

router.get("/",[auth.authToken], contactRecordController.getContact);

module.exports = router;