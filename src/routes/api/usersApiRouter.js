const express = require("express");
const router = express.Router();
const usersApiController = require("../../controllers/api/usersApiController");

/* const apiKeyUsername = "a23282a1-f910-49fa-8620-d2c5da3bac05"; */

router.get("/", usersApiController.generalList);
router.get("/:id", usersApiController.userDetail);
router.get(
  `/username/${process.env.API_KEY}/:username`,
  usersApiController.userSearch
);
router.post("/create", usersApiController.userCreate);
router.post("/login", usersApiController.userLogin);

module.exports = router;
