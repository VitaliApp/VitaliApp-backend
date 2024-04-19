const { Schema, model, default: mongoose } = require("mongoose");
const uniqueValidatior = require("mongoose-unique-validator");

const medicineRecordSchema = new Schema(
  {
    user_id: {
      require: true,
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    medicine: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

medicineRecordSchema.plugin(uniqueValidatior);
const MedicineRecord = model("medicineRecord", medicineRecordSchema);
module.exports = MedicineRecord;
