const { Schema, model, default: mongoose } = require("mongoose");
const uniqueValidatior = require("mongoose-unique-validator");

const bloodGroupRecordSchema = new Schema(
  {
    user_id: {
      require: true,
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    blood_type: {
      type: String,
      enum: {
        values: ["O+", "0-", "A+", "A-", "B+", "B-", "AB+", "AB-"],
        message: "{VALUE} is not a valid blood type",
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

bloodGroupRecordSchema.plugin(uniqueValidatior);
const BloodGroupRecord = model("bloodGroupRecord", bloodGroupRecordSchema);
module.exports = BloodGroupRecord;
