import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, Outlet } from "react-router";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const links = [
    { name: "Add Courses", path: "/adminDashboard" },
    { name: "Change Password", path: "/adminDashboard/ChangePassword" },
    { name: "Homepage", path: "/" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 bg-white border-r border-gray-200">
          <div className="flex items-center justify-center h-16 border-b border-gray-200 font-bold text-xl text-blue-600">
            Admin Panel
          </div>
          <nav className="flex-1 px-4 py-6 space-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${sidebarOpen ? "" : "pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity ${
            sidebarOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setSidebarOpen(false)}
        ></div>

        {/* Drawer */}
        <div
          className={`absolute inset-y-0 left-0 w-64 bg-white shadow-xl transform transition-transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <span className="font-bold text-xl text-blue-600">Admin Panel</span>
            <button onClick={() => setSidebarOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <nav className="px-4 py-6 space-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
                onClick={() => setSidebarOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar for mobile */}
        <div className="md:hidden flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu size={24} />
          </button>
          <span className="font-bold text-lg text-blue-600">Admin Panel</span>
          <div></div>
        </div>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
