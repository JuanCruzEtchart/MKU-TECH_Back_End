const express = require("express");
const router = express.Router();
const fleetsApiController = require("../../controllers/api/fleetsApiController");

router.get("/", fleetsApiController.generalList);
router.get("/:id", fleetsApiController.fleetList)
router.get("/vehicle/:id", fleetsApiController.vehicleDetail);

module.exports = router;