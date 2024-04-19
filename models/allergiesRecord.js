const { Schema, model, default: mongoose } = require("mongoose");
const uniqueValidatior = require("mongoose-unique-validator");

const allergiesRecordSchema = new Schema(
  {
    user_id: {
      require: true,
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    allergies: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

allergiesRecordSchema.plugin(uniqueValidatior);
const AllergiesRecord = model("allergiesRecord", allergiesRecordSchema);
module.exports = AllergiesRecord;
