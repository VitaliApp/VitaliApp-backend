const mongoose = require("mongoose");
const URI = process.env.URI;

module.exports = {
  connect: async () => {
    try {
      mongoose.set("strictQuery", false);
      mongoose.connect(URI);
      console.log("DB connected");
    } catch (error) {
      console.log(error);
      process.exit();
    }
  },
  disconnect: (done) => {
    mongoose.disconnect(done);
  },
};
