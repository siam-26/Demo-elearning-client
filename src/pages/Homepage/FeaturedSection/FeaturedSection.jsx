export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose LearnHub?
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to upgrade your skills in one place.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <h3 className="text-4xl font-bold text-blue-600">10+</h3>
            <p className="mt-3 text-lg font-medium text-gray-700">Courses</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <h3 className="text-4xl font-bold text-blue-600">Expert</h3>
            <p className="mt-3 text-lg font-medium text-gray-700">Mentors</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <h3 className="text-4xl font-bold text-blue-600">Lifetime</h3>
            <p className="mt-3 text-lg font-medium text-gray-700">Access</p>
          </div>
        </div>
      </div>
    </section>
  );
}
