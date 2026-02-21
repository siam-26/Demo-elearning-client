import { useState } from "react";
import axios from "axios";

export default function ChangePassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1 = send OTP, 2 = verify OTP
  const [message, setMessage] = useState("");

  const handleSendOtp = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/admin/send-otp",
        {
          email,
          newPassword,
        },
      );
      if (res.data.status) {
        setStep(2);
        setMessage("OTP sent to your email. Check inbox/spam.");
      } else {
        setMessage(res.data.message);
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong while sending OTP.");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/admin/verify-otp",
        { email, otp },
      );
      if (res.data.status) {
        setMessage("Password updated successfully!");
        setStep(1);
        setEmail("");
        setNewPassword("");
        setConfirmPassword("");
        setOtp("");
      } else {
        setMessage(res.data.message);
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong while verifying OTP.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
          {step === 1 ? "Change Password" : "Verify OTP"}
        </h2>
        <p className="text-gray-500 mt-2 text-center">
          {step === 1
            ? "Enter your email and new password to update"
            : "Enter the OTP sent to your email"}
        </p>

        <form
          onSubmit={step === 1 ? handleSendOtp : handleVerifyOtp}
          className="mt-8 space-y-6"
        >
          {/* Step 1: Email + Password */}
          {step === 1 && (
            <>
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none transition"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 font-medium mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none transition"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none transition"
                  required
                />
              </div>
            </>
          )}

          {/* Step 2: OTP */}
          {step === 2 && (
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">OTP</label>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none transition"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
          >
            {step === 1 ? "Send OTP" : "Verify OTP"}
          </button>

          {message && (
            <p className="text-center mt-2 text-red-500">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
}
