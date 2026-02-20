import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600">LearnHub</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 font-medium">
              <a href="#" className="hover:text-blue-600">
                Courses
              </a>

              <Link to="/adminLogin" className="hover:text-blue-600">
                Admin
              </Link>
              
            </div>

            {/* Desktop Button */}
            <div className="hidden md:block">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(true)}>
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-xl font-bold text-blue-600">LearnHub</span>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col p-4 space-y-4 font-medium">
          <a href="#" className="hover:text-blue-600">
            Courses
          </a>
          <Link to="/adminLogin" className="hover:text-blue-600">
            Admin
          </Link>
          

          <button className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </div>
      </div>
    </>
  );
}
