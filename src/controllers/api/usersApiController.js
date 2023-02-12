const db = require("../../database/models");
const User = db.User;

const usersApiController = {
  generalList: async (req, res) => {
    try {
      let users = await User.findAll({
        include: ["fleet"],
        attributes: { exclude: ["password"] },
      });
      let response = {
        meta: { status: 200, total: users.length, url: "api/users" },
        data: users,
      };
      res.json(response);
    } catch (err) {
      res.send(err);
    }
  },
  userDetail: async (req, res) => {
    try {
      id = req.params.id;
      let user = await User.findByPk(id, {
        include: ["fleet"],
        attributes: { exclude: ["password"] },
      });
      let response = {
        meta: { status: 200, url: `api/user/${id}` },
        data: user,
      };
      res.json(response);
    } catch (err) {
      res.send(err);
    }
  },
  userCreate: async (req, res) => {
    try {
      let user = await User.create({
        name: req.body.name,
        password: req.body.password,
      });
      let response = {
        meta: { status: 200, url: "api/users/create" },
        data: user,
      };
      res.json(response);
    } catch (err) {
      res.send(err);
    }
  },
  /*   userLogin: async (req, res) => {
    try {
      let user = await User.findOne({ where: { name: req.body.name } });
      if (!user) {
        res.send("Usuario no existe");
      } else if (!bcrypt.compareSync(req.body.password, user.password)) {
 
      }
      let response = {
        meta: { status: 200, url: "api/users/login" },
        data: user,
      };
      res.json(response);
    } catch (err) {
      res.send(err);
    }
  }, */
};

module.exports = usersApiController;
