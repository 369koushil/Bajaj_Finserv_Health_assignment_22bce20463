const express = require("express");
const router = express.Router();
const { processData } = require("../controllers/bfhlControllers.js")

router.post("/", processData);

module.exports = router;
