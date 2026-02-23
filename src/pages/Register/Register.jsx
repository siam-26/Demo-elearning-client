import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    whatsappNumber: "",
    country: "Bangladesh",
    referenceNo: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const countries = ["Bangladesh", "USA", "UK", "Canada", "India", "Australia"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      setMessage("You must agree to privacy policy and terms");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/register",
        formData,
      );
      setMessage(res.data.message);
      if (res.data.success) {
        // ✅ Registration success hole navigate kora
        navigate("/user/login"); // login page e pathano
      }
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Something went wrong. Try again!",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-red-900 text-center">Sign Up</h2>

        {message && (
          <div className="text-center text-sm text-red-700">{message}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-red-800 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-red-300 rounded-lg px-3 py-2 text-red-900 bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

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
              className="w-full border border-red-300 rounded-lg px-3 py-2 text-red-900 bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
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
              className="w-full border border-red-300 rounded-lg px-3 py-2 text-red-900 bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* WhatsApp Number */}
          <div>
            <label className="block text-sm font-medium text-red-800 mb-1">
              WhatsApp Number
            </label>
            <input
              type="text"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleChange}
              className="w-full border border-red-300 rounded-lg px-3 py-2 text-red-900 bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-red-800 mb-1">
              Country
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-red-300 rounded-lg px-3 py-2 text-red-900 bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Reference No */}
          <div>
            <label className="block text-sm font-medium text-red-800 mb-1">
              Reference Number
            </label>
            <input
              type="text"
              name="referenceNo"
              value={formData.referenceNo}
              onChange={handleChange}
              className="w-full border border-red-300 rounded-lg px-3 py-2 text-red-900 bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* Privacy Policy */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="h-4 w-4 text-red-600"
            />
            <label className="text-sm text-red-800">
              I agree to privacy policy and terms
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-900 text-white py-2 rounded-lg hover:bg-red-800 transition-colors"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-red-700">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-red-900 font-semibold hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
