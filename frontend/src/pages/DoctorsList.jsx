import { useParams, Link } from "react-router-dom";
import doctorsData from "../data/doctors";

export default function DoctorsList() {
  const { city, hospitalName } = useParams();

  // decode URI since hospital names may contain spaces
  const decodedHospital = decodeURIComponent(hospitalName);

  const doctors = doctorsData[decodedHospital] || [];

  return (
    <div className="min-h-screen bg-[#d6f5f5] p-6">
      
      <h1 className="text-3xl font-bold text-[#084c4c] mb-4">
        Doctors at {decodedHospital}
      </h1>

      <p className="text-gray-700 mb-8 text-lg">
        City: <span className="font-semibold">{city.charAt(0).toUpperCase()+city.slice(1)}</span>
      </p>

      {doctors.length === 0 && (
        <p className="text-gray-600 text-lg">No doctors available.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {doctors.map((doc, index) => (
          <div
            key={index}
            className="bg-white flex items-center gap-4 p-5 rounded-xl shadow-md border border-[#bdeeee] hover:shadow-lg transition"
          >
            {/* Avatar */}
            <div className="w-14 h-14 bg-[#0b5351] text-white flex items-center justify-center rounded-full text-xl font-bold">
              {doc.name.charAt(0)}
            </div>

            {/* Doctor Details */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-[#084c4c]">
                {doc.name}
              </h2>

              <p className="text-gray-700">
                🩺 <strong>{doc.specialization}</strong>
              </p>

              <p className="text-gray-700">
                🎓 {doc.experience}
              </p>

              <p className="text-gray-700">
                💰 Fee: {doc.fee}
              </p>

              {/* Slots */}
              <p className="text-gray-700 mt-1">
                ⏰ <strong>Available Slots:</strong>{" "}
                {doc.slots.join(", ")}
              </p>

              {/* Book Button */}
                <Link to="/book-appointment" state={{ doctor: doc }}>
                    <button className="bg-teal-700 text-white px-4 py-2 rounded-lg mt-3">
                Book Appointment →
            </button>
                </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
