const { error } = require("console");
const Appointment = require("../models/appointment");

module.exports = {
  getAppointments: async (req, res) => {
    try {
      console.log(req.user.id, "user id");
      const appointments = await Appointment.find({
        user_id: req.user.id,
      });
      console.log(appointments);
      res.json({
        msg: "appointment list",
        appointments,
      });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  getAppointmentById: async (req, res) => {
    try {
      const { id } = req.params;
      if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).send({ msg: "id invalid" });
      }
      const user = await Appointment.findById(id);
      res.json({
        msg: "user",
        data: {
          user,
        },
      });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  createAppointment: async (req, res, next) => {
    try {
      const {
        date,
        type_of_specilist,
        doctors_name,
        symptoms,
        cost,
        label,
        diagnosis,
        adress,
        medicine,
        img_recipe,
      } = req.body;

      let appointment = await Appointment.create({
        user_id: req.user,
        date,
        type_of_specilist,
        doctors_name,
        symptoms,
        cost,
        diagnosis,
        label,
        adress,
        medicine,
        img_recipe,
      });
      if (!appointment) {
        res
          .status(502)
          .send({ msg: "appointment not created", err: appointment });
      }
      await appointment.save();
      res.status(201).send({ msg: "appointment created", data: appointment });
    } catch (error) {
      next(error, req, res);
    }
  },
  updateAppointment: async (req, res, next) => {
    try {
      const { id } = req.params;
      const newData = req.body;

      if (!id || !newData) {
        res.status(404).send({ msg: "appointment id not found", err: error });
      }
      const appointmentUpdated = await Appointment.findByIdAndUpdate(
        id,
        newData,
        { new: true }
      );
      await appointmentUpdated.save();
      res
        .status(200)
        .send({ msg: "appointment updated", data: appointmentUpdated });
    } catch (error) {
      next(error, req, res);
    }
  },
  deleteAppointment: async (req, res, next) => {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(404).send({ msg: "appointment id not found", err: error });
      }
      const appointmentDeleted = await Appointment.findByIdAndDelete(id);

      res
        .status(200)
        .send({ msg: "appointment deletd", data: appointmentDeleted });
    } catch (error) {
      next(error, req, res);
    }
  },
};
