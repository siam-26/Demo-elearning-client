import { useState } from "react";
import axios from "axios";

export default function AddCourse() {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !link || !image) {
      return alert("All fields are required");
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("image", image);

      const imgbbApiKey = "cf0dcb330515a073f3e6806b4614faf2"; 
      const imgbbRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        formData,
      );

      const imageUrl = imgbbRes.data.data.url;

      const res = await axios.post(
        "http://localhost:3000/api/v1/admin/course/add-course",
        {
          name,
          link,
          image: imageUrl,
        },
      );

      if (res.data.success) {
        alert("Course added successfully ✅");
        setName("");
        setLink("");
        setImage(null);
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 md:px-10 lg:px-16 py-8">
      <div className="w-full bg-white shadow-lg rounded-2xl p-5 sm:p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Add New Course
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Fill the details below to add a new course
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Course Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">
              Course Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter course name"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none transition"
            />
          </div>

          {/* Course Link */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">
              Join Link
            </label>
            <input
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Joining Link"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none transition"
            />
          </div>

          {/* Course Image */}
          <div className="md:col-span-2 flex flex-col">
            <label className="text-gray-700 font-medium mb-2">
              Course Image
            </label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full text-gray-600 border border-gray-300 rounded-lg px-4 py-3 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
            >
              {loading ? "Uploading..." : "Add Course"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
