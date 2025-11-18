const Doctor = require("../models/Doctor");

exports.addDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.json({ message: "Doctor added", doctor });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getDoctorsByHospital = async (req, res) => {
  try {
    const doctors = await Doctor.find({ hospitalId: req.params.hospitalId });
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
