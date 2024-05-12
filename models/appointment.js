const { Schema, model, default: mongoose } = require("mongoose");
const uniqueValidatior = require("mongoose-unique-validator");

const appointmentSchema = new Schema(
  {
    user_id: {
      require: true,
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    date: {
      type: Date,
    },
    type_of_specilist: {
      type: String,
    },
    doctors_name: {
      type: String,
    },
    symptoms: {
      type: String,
    },
    cost: {
      type: Number,
    },
    label: {
      type: String,
    },
    diagnosis: {
      type: String,
    },

    medicine: {
      type: String,
    },
    img_recipe: {
      type: String,
    },
    adress: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

appointmentSchema.plugin(uniqueValidatior);
const Appointment = model("appointment", appointmentSchema);
module.exports = Appointment;
