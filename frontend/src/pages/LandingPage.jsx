import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-[#caf0f0] flex items-center justify-center">
      <div className="bg-white/40 shadow-xl rounded-xl p-10 flex flex-col items-center max-w-md w-full">
        
        {/* Logo + Title */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-[#5aa4a4] flex items-center justify-center">
            <img src={logo} className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#226060]">MediConnect</h1>
            <p className="text-[#226060]/70 text-sm">Your Health, Connected</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <Link to="/login">
            <button className="px-6 py-2 bg-[#0a4d4d] text-white rounded-lg shadow hover:bg-[#083d3d] transition">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="px-6 py-2 border-2 border-[#0a4d4d] text-[#0a4d4d] rounded-lg hover:bg-[#0a4d4d] hover:text-white transition">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}


