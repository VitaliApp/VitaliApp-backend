const { Schema, model, default: mongoose } = require("mongoose");
const uniqueValidatior = require("mongoose-unique-validator");

const chronicDeseaseRecordSchema = new Schema(
  {
    user_id: {
      require: true,
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    chronicDesease: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

chronicDeseaseRecordSchema.plugin(uniqueValidatior);
const ChronicDeseaseRecord = model(
  "chronicDeseaseRecord",
  chronicDeseaseRecordSchema
);
module.exports = ChronicDeseaseRecord;
