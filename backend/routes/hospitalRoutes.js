const express = require("express");
const { addHospital, getHospitals } = require("../controllers/hospitalController");
const router = express.Router();

router.post("/add", addHospital);
router.get("/", getHospitals);

module.exports = router;
