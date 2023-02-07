const express = require("express");
const router = express.Router();
const usersApiController = require("../../controllers/api/usersApiController");

router.get("/", usersApiController.generalList);
router.get("/:id", usersApiController.userDetail);

module.exports = router;
