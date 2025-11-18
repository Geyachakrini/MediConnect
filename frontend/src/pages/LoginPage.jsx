import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Login failed");
        return;
      }

      toast.success("Login successful!");

      // Save token
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard"); // later we create this page

    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-[#caf0f0] flex items-center justify-center px-4">
      <div className="bg-white shadow-xl p-10 rounded-2xl w-full max-w-md border border-[#b6e9e9]">
        <h1 className="text-3xl font-bold text-[#0b5351] mb-2">Welcome Back</h1>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b5351]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b5351]"
          />

          <button className="bg-[#0b5351] text-white py-3 rounded-lg hover:bg-[#083f3d] transition">
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-[#134e4a]">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#0b5351] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

