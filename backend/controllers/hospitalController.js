const Hospital = require("../models/Hospital");

exports.addHospital = async (req, res) => {
  try {
    const hospital = await Hospital.create(req.body);
    res.json({ message: "Hospital added", hospital });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.json(hospitals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
