import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:3000/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Login failed");
      } else {
        setMessage("Login successful ✅");
        // localStorage-এ ডাটা সেভ করা
        localStorage.setItem("user", JSON.stringify(data.data));
        navigate("/");
        console.log(data);
      }
    } catch (error) {
      setMessage("Server error");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-red-900 text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-red-800 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-red-300 rounded-lg bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-red-800 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-red-300 rounded-lg bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter your password"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition duration-200"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className="mt-4 text-center text-sm text-red-700">{message}</p>
        )}

        {/* Sign up link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          New here?{" "}
          <Link to="/user/register">
            <span className="text-red-600 font-medium cursor-pointer hover:underline">
              Sign Up
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
