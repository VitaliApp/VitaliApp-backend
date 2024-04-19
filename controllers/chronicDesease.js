const { error } = require("console");
const ChronicDeseaseRecord = require("../models/chronicDesease");

module.exports = {
  getChronicDesease: async (req, res) => {
    try {
      console.log(req.user.id, "user id");
      const chronicDesease = await ChronicDeseaseRecord.find({
        user_id: req.user.id,
      });
      console.log(chronicDesease);
      res.json({
        msg: "chronicDesease list",
        chronicDesease,
      });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  createChronicDeseaseRecord: async (req, res, next) => {
    try {
      const { chronicDesease } = req.body;
      let chronicDeseaseRecord = await ChronicDeseaseRecord.create({
        user_id: req.user.id,
        chronicDesease,
      });
      if (!chronicDeseaseRecord) {
        res
          .status(502)
          .send({
            msg: "chronic desease record not created",
            err: chronicDeseaseRecord,
          });
      }
      await chronicDeseaseRecord.save();
      res
        .status(201)
        .send({
          msg: "chronic desease record created",
          data: chronicDeseaseRecord,
        });
    } catch (error) {
      next(error, req, res);
    }
  },

  updateChronicDeseaseRecord: async (req, res, next) => {
    try {
      const { id } = req.params;
      const newData = req.body;

      if (!id || !newData) {
        res
          .status(404)
          .send({ msg: "chronic desease record id not found", err: error });
      }
      const chronicDeseaseRecordUpdated =
        await ChronicDeseaseRecord.findByIdAndUpdate(id, newData, {
          new: true,
        });
      await chronicDeseaseRecordUpdated.save();
      res
        .status(200)
        .send({
          msg: "chronic desease record updated",
          data: chronicDeseaseRecordUpdated,
        });
    } catch (error) {
      next(error, req, res);
    }
  },
};
