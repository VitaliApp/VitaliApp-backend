const express = require("express");
const router = express.Router();
const allergiesRecordController = require("../controllers/allergies");
const auth = require("../middlewares/auth");

router.post(
  "/create",
  [auth.authToken],
  allergiesRecordController.createAllergiesRecord
);

router.patch(
  "/edit/:id",
  [auth.authToken],
  allergiesRecordController.updateAllergiesRecord
);

router.get(
  "/",
  [auth.authToken],
  allergiesRecordController.getAllergies
);

module.exports = router;
