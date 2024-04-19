const { Schema, model, default: mongoose } = require("mongoose");
const uniqueValidatior = require("mongoose-unique-validator");

const familyHistoryRecordSchema = new Schema(
  {
    user_id: {
      require: true,
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    family_related_deseases: { name: String, ailment: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

familyHistoryRecordSchema.plugin(uniqueValidatior);
const familyHistoryRecord = model(
  "familyHistoryRecord",
  familyHistoryRecordSchema
);
module.exports = familyHistoryRecord;
