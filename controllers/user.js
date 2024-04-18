const User = require("../models/user");

module.exports = {
    
    getUserById: async (req, res) => {
        try {
          const { id } = req.user;
          if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).send({ msg: "id invalid" });
          }
          const user = await User.findById(id);
          res.json({
            msg: "user",
            data: {
              user,
            },
          });
        } catch (error) {
          res.status(400).send({ msg: error.message });
        }
      },

    editProfile: async (req, res, next) => {
        try {
          const { id } = req.user;
          const newData = req.body;
          console.log(newData, 'new data')
    
          if (!id || !newData) {
            res.status(404).send({ msg: "user id not found", err: error });
          }
          console.log(id, 'ID')
          const userUpdated = await User.findByIdAndUpdate(id, newData, {
            new: true,
          });
          console.log(userUpdated, 'user updated')
          await userUpdated.save();
          res
            .status(200)
            .send({ msg: "profile updated", data: userUpdated });
        } catch (error) {
          console.log("errorrrrrr");
          next(error, req, res);
        }
      },
}