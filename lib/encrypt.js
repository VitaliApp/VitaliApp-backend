const bcrypt = require("bcrypt");

function encrypPassword(password) {
  const salt = bcrypt.genSalt(15);
  return bcrypt.hash(password, parseInt(salt));
}

function comparePassword(password, hash) {
  return bcrypt.compare(password, hash);
}

module.exports = {
  encrypPassword,
  comparePassword,
};
