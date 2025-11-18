import React from "react";

const DoctorHeaderSmall = ({ doctor }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex gap-4 items-center">

      {/* Circle Avatar */}
      <div className="w-14 h-14 rounded-full bg-teal-800 text-white flex items-center justify-center text-xl font-bold">
        {doctor.name.charAt(0)}
      </div>

      {/* Doctor Info */}
      <div>
        <h2 className="text-xl font-semibold">{doctor.name}</h2>
        <p className="text-teal-700 font-medium">{doctor.specialization}</p>
        <p>🎓 {doctor.experience} years</p>
        <p>💰 Fee: ₹{doctor.fee}</p>
        <p>⏰ Slots: {doctor.slots}</p>
      </div>

    </div>
  );
};

export default DoctorHeaderSmall;
