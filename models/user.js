const { Schema, model, default: mongoose } = require("mongoose");
const uniqueValidatior = require("mongoose-unique-validator");

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "email invalid"],
    },
    lastName: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: {
        values: ["Hombre", "Mujer"],
        message: "{VALUE} is not a valid gender",
      },
    },
    age: { type: Number },
    telephone: {
      type: Number,
    },
    birthdate: {
      type: Date,
    },
    adress: {
      type: String,
    },
    picture: {
      type: String,
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.plugin(uniqueValidatior);
const User = model("user", userSchema);
module.exports = User;
