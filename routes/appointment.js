const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointment");
const auth = require("../middlewares/auth");

router.get("/",[auth.authToken], appointmentController.getAppointments);

router.get("/:id",[auth.authToken], appointmentController.getAppointmentById);

router.post("/create",[auth.authToken], appointmentController.createAppointment);

router.patch("/edit/:id",[auth.authToken], appointmentController.updateAppointment);

router.delete("/delete/:id",[auth.authToken], appointmentController.deleteAppointment);

module.exports = router;
