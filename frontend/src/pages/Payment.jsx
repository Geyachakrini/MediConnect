import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

export default function Payment() {
  const { state } = useLocation();
  console.log("PAYMENT PAGE STATE:", state);

  const navigate = useNavigate();

  if (!state) {
    navigate("/dashboard");
    return null;
  }

  const { type, data } = state;

  const [paymentMethod, setPaymentMethod] = useState("upi");

  const handlePayment = () => {
    toast.success("Payment Successful 💳✨");

    // Save to localStorage based on type
    if (type === "appointment") {
      const existing = JSON.parse(localStorage.getItem("appointments")) || [];
      existing.push(data);
      localStorage.setItem("appointments", JSON.stringify(existing));
    }

    if (type === "medicine") {
      const existing = JSON.parse(localStorage.getItem("medicineOrders")) || [];
      existing.push(data);
      localStorage.setItem("medicineOrders", JSON.stringify(existing));
    }

    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#d6f5f5] p-6 flex justify-center">
      <div className="bg-white p-6 rounded-xl max-w-lg w-full border border-[#bdeeee] shadow-md mt-10">

        <h1 className="text-2xl font-bold text-[#084c4c] mb-4">Payment</h1>

        {/* ITEM SUMMARY */}
        <div className="mb-6">
          {type === "appointment" && (
            <>
              <p className="text-lg font-semibold">🩺 Appointment with:</p>
              <p className="text-gray-700">{data.doctor}</p>
              <p className="mt-2 text-lg">💰 Fee: ₹{data.fee}</p>
            </>
          )}

          {type === "medicine" && (
            <>
              <p className="text-lg font-semibold">💊 Medicine:</p>
              <p className="text-gray-700">{data.medicine.toUpperCase()}</p>

              <p className="mt-2 text-lg">💰 Price: ₹{data.price}</p>
              <p className="text-lg">📦 Quantity: {data.quantity}</p>

              <p className="mt-1 text-gray-700">
                💵 Total: ₹{data.price * data.quantity}
              </p>
            </>
          )}
        </div>

        {/* PAYMENT METHOD */}
        <h2 className="text-xl font-semibold mb-2">Select Payment Method</h2>

        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
        >
          <option value="upi">UPI (GPay / PhonePe)</option>
          <option value="card">Credit / Debit Card</option>
          <option value="cod">Cash on Delivery</option>
        </select>

        {/* PAY NOW */}
        <button
          onClick={handlePayment}
          className="w-full bg-teal-700 text-white py-3 rounded-lg hover:bg-teal-800 transition"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
