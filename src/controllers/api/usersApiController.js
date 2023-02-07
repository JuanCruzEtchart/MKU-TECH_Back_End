const db = require("../../database/models");

const User = db.User;

const usersApiController = {
  generalList: async (req, res) => {
    let users = await User.findAll({ include: ["fleet"] });
    let response = {
      meta: { status: 200, total: users.length, url: "api/users" },
      data: users,
    };
    res.json(response);
  },
  userDetail: async (req, res) => {
    id = req.params.id;
    let user = await User.findByPk(id, { include: ["fleet"] });
    let response = {
      meta: { status: 200, url: `api/user/${id}` },
      data: user,
    };
    res.json(response);
  },
};

module.exports = usersApiController;
