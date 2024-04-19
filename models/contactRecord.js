const { Schema, model, default: mongoose } = require("mongoose");
const uniqueValidatior = require("mongoose-unique-validator");

const emergencyContactRecordSchema = new Schema(
  {
    user_id: {
      require: true,
      type: mongoose.Types.ObjectId,
      ref: "User",
    },

    emergency_contact: { name: String, cel: Number },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

emergencyContactRecordSchema.plugin(uniqueValidatior);
const emergencyContactRecord = model(
  "emergencyContactRecord",
  emergencyContactRecordSchema
);
module.exports = emergencyContactRecord;
