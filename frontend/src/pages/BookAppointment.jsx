import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DoctorHeaderSmall from "../components/DoctorHeaderSmall";

export default function BookAppointment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { doctor } = location.state;

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [issue, setIssue] = useState("");

  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientPhone, setPatientPhone] = useState("");

  const dates = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d.toDateString();
  });

  const timeSlots = doctor.slots;

  const handleConfirm = () => {
    if (!patientName.trim() || !patientAge.trim() || !patientPhone.trim()) {
      toast.error("Please fill all patient details");
      return;
    }

    if (!selectedDate || !selectedSlot) {
      toast.error("Please select a date and time slot");
      return;
    }

    const appointment = {
      id: Date.now(),
      doctor: doctor.name,
      specialization: doctor.specialization,
      date: selectedDate,
      time: selectedSlot,
      fee: doctor.fee,
      issue,
      patientName,
    };

    // Save directly & go back to dashboard
    const existing = JSON.parse(localStorage.getItem("appointments")) || [];
    existing.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(existing));

    toast.success("Appointment booked successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">

      <DoctorHeaderSmall doctor={doctor} />

      <h2 className="text-xl font-semibold mt-6 mb-2">Patient Details</h2>

      <input
        type="text"
        placeholder="Patient Name"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
        className="w-full border p-3 rounded-lg mb-3"
      />

      <input
        type="number"
        placeholder="Age"
        value={patientAge}
        onChange={(e) => setPatientAge(e.target.value)}
        className="w-full border p-3 rounded-lg mb-3"
      />

      <input
        type="text"
        placeholder="Phone Number"
        value={patientPhone}
        onChange={(e) => setPatientPhone(e.target.value)}
        className="w-full border p-3 rounded-lg mb-4"
      />

      <h2 className="text-xl font-semibold mb-2">Select Date</h2>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {dates.map((date) => (
          <button
            key={date}
            onClick={() => setSelectedDate(date)}
            className={`px-4 py-2 rounded-lg border 
              ${selectedDate === date ? "bg-teal-700 text-white" : "bg-white"}`}
          >
            {date}
          </button>
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Select Time Slot</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {timeSlots.map((slot) => (
          <button
            key={slot}
            onClick={() => setSelectedSlot(slot)}
            className={`px-4 py-2 rounded-lg border 
              ${selectedSlot === slot ? "bg-teal-700 text-white" : "bg-white"}`}
          >
            {slot}
          </button>
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Describe Issue (optional)</h2>
      <textarea
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
        className="w-full border rounded-lg p-3"
        placeholder="Describe your symptoms..."
      />

      <button
        onClick={handleConfirm}
        className="mt-6 w-full bg-teal-700 text-white py-3 rounded-lg hover:bg-teal-800 transition"
      >
        Book Appointment
      </button>
    </div>
  );
}




