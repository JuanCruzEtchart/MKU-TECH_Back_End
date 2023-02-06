const db = require("../../database/models");

const User = db.User;

const usersApiController = {
  list: (req, res) => {
    User.findAll({ include: ["user"] }).then((users) => {
      let response = {
        meta: { status: 200, total: users.length, url: "api/users" },
      };
      res.json(response)
    });
  },
};

module.exports = usersApiController;