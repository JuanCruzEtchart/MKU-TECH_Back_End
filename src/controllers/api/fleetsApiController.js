const db = require("../../database/models");

const Fleet = db.Fleet;

const fleetsApiController = {
  generalList: async (req, res) => {
    let fleets = await Fleet.findAll({ include: ["user"] });
    let response = {
      meta: { status: 200, total: fleets.length, url: "api/fleets" },
      data: fleets,
    };
    res.json(response);
  },
  fleetList: async (req, res) => {
    id = req.params.id;
    let fleet = await Fleet.findAll({ where: { user_id: id } });
    let response = {
      meta: { status: 200, total: fleet.length, url: `api/fleets/${id}` },
      data: fleet,
    };
    res.json(response);
  },
  vehicleDetail: async (req, res) => {
    id = req.params.id;
    let vehicle = await Fleet.findByPk(id, { include: ["user"] });
    let response = {
      meta: { status: 200, url: `api/fleets/vehicle/${id}` },
      data: vehicle,
    };
    res.json(response);
  },
};

module.exports = fleetsApiController;
