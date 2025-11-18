import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const [medicineOrders, setMedicineOrders] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const storedMedicines = JSON.parse(localStorage.getItem("medicineOrders")) || [];

    setAppointments(storedAppointments);
    setMedicineOrders(storedMedicines);
  }, []);

  // Cancel Appointment
  const handleCancelAppointment = (id) => {
    const updated = appointments.filter((appt) => appt.id !== id);

    localStorage.setItem("appointments", JSON.stringify(updated));
    setAppointments(updated);

    toast.success("Appointment cancelled successfully ");
  };

  // Cancel Medicine Order
  const cancelMedicineOrder = (id) => {
    const updated = medicineOrders.filter((order) => order.id !== id);

    localStorage.setItem("medicineOrders", JSON.stringify(updated));
    setMedicineOrders(updated);

    toast.success("Medicine order cancelled successfully ");
  };

  return (
    <div className="min-h-screen bg-[#d6f5f5] p-6">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-[#084c4c] mb-6">
        Welcome to MediConnect
      </h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

        {/* Book Appointment */}
        <Link to="/search-hospitals">
          <div className="p-6 bg-white rounded-xl shadow-md border border-[#bdeeee] 
                          hover:shadow-lg cursor-pointer">
            <h2 className="text-xl font-semibold text-[#084c4c]">🩺 Book Appointment</h2>
            <p className="text-gray-700 mt-1">
              Search hospitals and doctors based on your city.
            </p>
          </div>
        </Link>

        {/* Pharmacy Finder */}
        <Link to="/search-pharmacies">
          <div className="p-6 bg-white rounded-xl shadow-md border border-[#bdeeee] 
                          hover:shadow-lg cursor-pointer">
            <h2 className="text-xl font-semibold text-[#084c4c]">🏪 Pharmacy Finder</h2>
            <p className="text-gray-700 mt-1">
              Search medicines and book from the nearest pharmacy.
            </p>
          </div>
        </Link>

      </div>

      {/* ======================== APPOINTMENTS ======================== */}

      <h2 className="text-2xl font-semibold text-[#084c4c] mb-4">
        Your Appointments
      </h2>

      {appointments.length === 0 && (
        <p className="text-gray-700 mb-4">No appointments booked yet.</p>
      )}

      <div className="flex flex-col gap-4">
        {appointments.map((a) => (
          <div
            key={a.id}
            className="bg-white p-5 rounded-xl shadow-md border border-[#bdeeee]"
          >
            <h3 className="text-xl font-semibold text-[#084c4c]">
              {a.doctor}
            </h3>

            <p className="text-gray-700">👤 Patient: {a.patientName}</p>
            <p className="text-gray-700">🩺 {a.specialization}</p>
            <p className="text-gray-700">📅 {a.date}</p>
            <p className="text-gray-700">⏰ {a.time}</p>
            <p className="text-gray-700">💰 Fee: ₹{a.fee}</p>

            {a.issue && (
              <p className="text-gray-700">📝 Issue: {a.issue}</p>
            )}

            {/* Cancel Appointment */}
            <button
              onClick={() => handleCancelAppointment(a.id)}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Cancel Booking
            </button>
          </div>
        ))}
      </div>

      {/* ======================== MEDICINE ORDERS ======================== */}

      <h2 className="text-2xl font-semibold text-[#084c4c] mt-10 mb-4">
        Your Medicine Orders
      </h2>

      {medicineOrders.length === 0 && (
        <p className="text-gray-700 mb-4">No medicines booked yet.</p>
      )}

      <div className="flex flex-col gap-4">
        {medicineOrders.map((m) => (
          <div
            key={m.id}
            className="bg-white p-5 rounded-xl shadow-md border border-[#bdeeee]"
          >
            <h3 className="text-xl font-semibold text-[#084c4c]">
              {m.medicine.toUpperCase()}
            </h3>

            <p className="text-gray-700">🏪 {m.pharmacy}</p>
            <p className="text-gray-700">💰 Price: ₹{m.price}</p>
            <p className="text-gray-700">📦 Quantity: {m.quantity}</p>
            <p className="text-gray-700">⏳ ETA: {m.eta}</p>

            {/* Cancel Medicine Order */}
            <button
              onClick={() => cancelMedicineOrder(m.id)}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Cancel Order
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}





