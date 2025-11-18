const Appointment = require("../models/Appointment");

exports.bookAppointment = async (req, res) => {
  try {
    const appt = await Appointment.create(req.body);
    res.json({ message: "Appointment booked", appt });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appts = await Appointment.find().populate("userId doctorId");
    res.json(appts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
