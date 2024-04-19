const express = require("express");
const router = express.Router();
const familyHistoryRecordController = require("../controllers/familyHistory");
const auth = require("../middlewares/auth");

router.post(
  "/create",
  [auth.authToken],
  familyHistoryRecordController.createFamilyHistoryRecord
);

router.patch(
  "/edit/:id",
  [auth.authToken],
  familyHistoryRecordController.updateFamilyHistoryRecord
);

router.get(
  "/",
  [auth.authToken],
  familyHistoryRecordController.getFamilyHistory
);

module.exports = router;
