const { error } = require("console");
const ContactRecord = require("../models/contactRecord");

module.exports = {
  getContact: async (req, res) => {
    try {
      console.log(req.user.id, "user id");
      const contact = await ContactRecord.find({
        user_id: req.user.id,
      });
      console.log(contact);
      res.json({
        msg: "contact list",
        contact,
      });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  createContactRecord: async (req, res, next) => {
    try {
      const { emergency_contact } = req.body;
      let contactRecord = await ContactRecord.create({
        user_id: req.user.id,
        emergency_contact,
      });
      if (!contactRecord) {
        res
          .status(502)
          .send({ msg: "contact record not created", err: contactRecord });
      }
      await contactRecord.save();
      res.status(201).send({ msg: "contact record created", contactRecord });
    } catch (error) {
      next(error, req, res);
    }
  },

  updateContactRecord: async (req, res, next) => {
    try {
      const { id } = req.params;
      const newData = req.body;

      if (!id || !newData) {
        res
          .status(404)
          .send({ msg: "contact record id not found", err: error });
      }
      const contactRecordUpdated = await ContactRecord.findByIdAndUpdate(
        id,
        newData,
        { new: true }
      );
      await contactRecordUpdated.save();
      res
        .status(200)
        .send({ msg: "contact record updated", data: contactRecordUpdated });
    } catch (error) {
      next(error, req, res);
    }
  },
};
