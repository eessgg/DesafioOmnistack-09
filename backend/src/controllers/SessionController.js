const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email } = req.body; //pega no ui o email do user

    let user = await User.findOne({ email }); // procuro no DB email igual ao do user

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
};
