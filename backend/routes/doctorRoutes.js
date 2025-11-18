const express = require("express");
const { addDoctor, getDoctorsByHospital } = require("../controllers/doctorController");
const router = express.Router();

router.post("/add", addDoctor);
router.get("/:hospitalId", getDoctorsByHospital);

module.exports = router;
