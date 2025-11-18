import { useParams, Link } from "react-router-dom";
import hospitals from "../data/hospitals";

export default function HospitalList() {
  const { city } = useParams();

  // Safe lowercase conversion
  const normalizedCity = city?.toLowerCase() || "";

  // Ensure h.city exists before comparing
  const filteredHospitals = hospitals.filter(h =>
    h.city && h.city.toLowerCase() === normalizedCity
  );

  return (
    <div className="min-h-screen bg-[#d6f5f5] p-6">
      <h1 className="text-3xl font-bold text-[#084c4c] mb-6">
        Hospitals in {city.charAt(0).toUpperCase()+city.slice(1)|| "your area"}
      </h1>
    {!city && (
        <p className="text-lg text-gray-600">
          Please go back and enter a city.
        </p>
      )}

      {city && filteredHospitals.length === 0 && (

        <p className="text-gray-700 text-lg">No hospitals found.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredHospitals.map((hospital, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-md border border-[#bdeeee]"
          >
            <h2 className="text-xl font-semibold text-[#084c4c]">
              {hospital.name}
            </h2>

            <p className="text-gray-700 mt-2">
              📍 <strong>Address:</strong> {hospital.address}
            </p>
            <p className="text-gray-700">
              ⭐ <strong>Rating:</strong> {hospital.rating}
            </p>
            <p className="text-gray-700">
              📏 <strong>Distance:</strong> {hospital.distance}
            </p>
            
            {/* View Doctors Button */}
            <Link
              to={`/hospitals/${city}/${encodeURIComponent(
                hospital.name
              )}/doctors`}
              className="block mt-4 text-center bg-[#0b5351] text-white py-2 rounded-lg hover:bg-[#083f3d] transition"
            >
              View Doctors →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

