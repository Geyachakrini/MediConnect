import { useParams, Link } from "react-router-dom";
import pharmacies from "../data/pharmacies";

export default function PharmacyList() {
  const { medicine } = useParams();
  const med = medicine.toLowerCase();

  const matching = pharmacies.filter((p) => p.stock[med]);

  return (
    <div className="min-h-screen bg-[#d6f5f5] p-6">
      <h1 className="text-2xl font-bold text-[#084c4c] mb-6">
        Pharmacies with “{medicine}”
      </h1>

      {matching.length === 0 && (
        <p className="text-gray-700">No pharmacies found for this medicine.</p>
      )}

      <div className="flex flex-col gap-4">
        {matching.map((p, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-md border border-[#bdeeee]"
          >
            <h2 className="text-xl font-semibold text-[#084c4c]">{p.name}</h2>

            <p className="text-gray-700">⭐ {p.rating}</p>
            <p className="text-gray-700">📍 {p.distance}</p>
            <p className="text-gray-700">💰 Price: ₹{p.stock[med].price}</p>

            <Link
              to="/book-medicine"
              state={{ medicine: med, pharmacy: p }}
            >
              <button className="mt-3 bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-800 transition">
                Book Medicine →
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
