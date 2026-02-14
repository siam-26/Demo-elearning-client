import videoEditingImg from "../../../../public/images/video.jpeg";
import webImg from "../../../../public/images/web.jpeg";
import GraphicImg from "../../../../public/images/graphic.jpeg";
import DigitalImg from "../../../../public/images/digital.jpeg";

export default function CoursesSection() {
  // Temporary static course data
  const courses = [
    {
      id: 1,
      name: "Web Development",
      image: webImg,
    },
    {
      id: 2,
      name: "Graphic Design",
      image: GraphicImg,
    },
    {
      id: 3,
      name: "Digital Marketing",
      image: DigitalImg,
    },
    {
      id: 4,
      name: "Video Editing",
      image: videoEditingImg,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Courses
          </h2>
          <p className="mt-4 text-gray-600">
            Explore our latest courses and upgrade your skills.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {course.name}
                </h3>

                <div className="mt-4 flex gap-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                    View Details
                  </button>
                  <button className="flex-1 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 rounded-lg transition">
                    Join
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
