export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          Learn Without Limits
        </h1>

        <p className="mt-4 text-base md:text-xl text-gray-200">
          Upgrade your skills with world-class courses from expert instructors.
          Start your journey today.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-medium transition">
            Login
          </button>

          <button className="bg-white text-blue-600 hover:bg-gray-200 px-6 py-3 rounded-lg text-lg font-medium transition">
            Sign Up
          </button>
        </div>
      </div>

      {/* Feature Cards */}
      {/* <div className="relative z-10 mt-16 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center text-white shadow-lg">
          <h3 className="text-3xl font-bold text-blue-400">10+</h3>
          <p className="mt-2 text-lg font-medium">Courses</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center text-white shadow-lg">
          <h3 className="text-3xl font-bold text-blue-400">Expert</h3>
          <p className="mt-2 text-lg font-medium">Mentors</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center text-white shadow-lg">
          <h3 className="text-3xl font-bold text-blue-400">Lifetime</h3>
          <p className="mt-2 text-lg font-medium">Access</p>
        </div>
      </div> */}
    </section>
  );
}
