const db = require("../models");

// Defining methods for the usersController
module.exports = {
  findAll: function(req, res ) {
    db.User
      .find(req.query)
      .sort({ highScore: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
