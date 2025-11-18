import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

export default function BookMedicine() {
  const location = useLocation();
  const navigate = useNavigate();
  const { medicine, pharmacy } = location.state;

  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [quantity, setQuantity] = useState("");

// Simple friendly ETA generator based on distance
const generateETA = (distanceText) => {
  // extract the number part (works for "900 m", "2.4 km", etc.)
  const number = parseFloat(distanceText);

  if (isNaN(number)) return "30 minutes";

  let km = number;

  // If distance is in meters (contains 'm' but not 'km'), convert to km
  if (distanceText.toLowerCase().includes("m") && !distanceText.toLowerCase().includes("km")) {
    km = number / 1000;
  }

  // Simple realistic ranges
  if (km < 1) return "15–20 minutes";
  if (km < 3) return "20–30 minutes";
  return "30–45 minutes";
};


  const handleBook = () => {
    if (!patientName || !patientAge || !patientPhone || !quantity) {
      toast.error("Please fill all details");
      return;
    }

    const order = {
      id: Date.now(),
      medicine,
      pharmacy: pharmacy.name,
      price: pharmacy.stock[medicine].price,
      quantity,
      eta: generateETA(pharmacy.distance),
    };

    const existing = JSON.parse(localStorage.getItem("medicineOrders")) || [];
    existing.push(order);
    localStorage.setItem("medicineOrders", JSON.stringify(existing));

    toast.success("Medicine booked successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#d6f5f5] p-6 flex justify-center">
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#bdeeee] max-w-xl w-full mt-10">
        
        <h1 className="text-2xl font-bold text-[#084c4c] mb-4">
          Confirm Medicine Booking
        </h1>

        <p className="text-gray-700 text-lg">💊 Medicine: {medicine}</p>
        <p className="text-gray-700 text-lg">🏪 Pharmacy: {pharmacy.name}</p>
        <p className="text-gray-700 text-lg">💰 Price: ₹{pharmacy.stock[medicine].price}</p>
        <p className="text-gray-700 text-lg mb-4">📍 {pharmacy.distance} away</p>

        <h2 className="text-xl font-semibold mb-2">Patient Details</h2>

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
          className="w-full border p-3 rounded-lg mb-3"
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          onClick={handleBook}
          className="mt-4 w-full bg-teal-700 text-white py-3 rounded-lg hover:bg-teal-800 transition"
        >
          Book Medicine
        </button>
      </div>
    </div>
  );
}

