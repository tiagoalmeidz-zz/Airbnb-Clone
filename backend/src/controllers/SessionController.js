const User = require('../models/User');

// index (retornar lista), 
// show (lista uma unica coisa) 
// store (criar), update, destroy

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if(!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
};