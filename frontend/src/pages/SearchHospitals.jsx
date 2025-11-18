import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchHospitals() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    navigate(`/hospitals/${city.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-[#d6f5f5] p-6 flex justify-center items-start">
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#bdeeee] max-w-xl w-full mt-10">
        <h1 className="text-2xl font-bold text-[#084c4c] mb-4">
          Search Hospitals
        </h1>

        <form onSubmit={handleSearch} className="flex gap-3">
          <input
            type="text"
            placeholder="Enter your city (e.g., Bangalore)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 border p-3 rounded-lg"
          />
          <button
            type="submit"
            className="bg-teal-700 text-white px-4 py-3 rounded-lg hover:bg-teal-800 transition"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
