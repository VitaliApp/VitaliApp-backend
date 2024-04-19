const { error } = require("console");
const FamilyHistoryRecord = require("../models/familyHistoryRecord");

module.exports = {
  getFamilyHistory: async (req, res) => {
    try {
      console.log(req.user.id, "user id");
      const familyHistory = await FamilyHistoryRecord.find({
        user_id: req.user.id,
      });
      console.log(familyHistory);
      res.json({
        msg: "family history list",
        familyHistory,
      });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  createFamilyHistoryRecord: async (req, res, next) => {
    try {
      const { family_related_deseases } = req.body;
      let familyHistoryRecord = await FamilyHistoryRecord.create({
        user_id: req.user.id,
        family_related_deseases,
      });
      if (!familyHistoryRecord) {
        res
          .status(502)
          .send({
            msg: "family history record not created",
            err: familyHistoryRecord,
          });
      }
      await familyHistoryRecord.save();
      res
        .status(201)
        .send({ msg: "family history record created", familyHistoryRecord });
    } catch (error) {
      next(error, req, res);
    }
  },

  updateFamilyHistoryRecord: async (req, res, next) => {
    try {
      const { id } = req.params;
      const newData = req.body;

      if (!id || !newData) {
        res
          .status(404)
          .send({ msg: "family history record id not found", err: error });
      }
      const familyHistoryRecordUpdated =
        await FamilyHistoryRecord.findByIdAndUpdate(id, newData, { new: true });
      await familyHistoryRecordUpdated.save();
      res
        .status(200)
        .send({
          msg: "family history record updated",
          data: familyHistoryRecordUpdated,
        });
    } catch (error) {
      next(error, req, res);
    }
  },
};
