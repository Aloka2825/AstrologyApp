import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    fathersName: "",
    mothersName: "",
    address: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    fathersName: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    let validationErrors = {};
    if (!formData.name) {
      validationErrors.name = "Full Name is required";
    }
    if (!formData.fathersName) {
      validationErrors.fathersName = "Father's Name is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      navigate("/view", { state: formData });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-700">Registration Form</h2>
          <div className="flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2">Full Name:</label>
            <input
              onChange={handleChange}
              value={formData.name}
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              placeholder="Enter Your Full Name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2">Father's Name:</label>
            <input
              onChange={handleChange}
              value={formData.fathersName}
              name="fathersName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              placeholder="Enter Your Father's Name"
            />
            {errors.fathersName && (
              <span className="text-red-500 text-sm">{errors.fathersName}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2">Mother's Name:</label>
            <input
              onChange={handleChange}
              value={formData.mothersName}
              name="mothersName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              placeholder="Enter Your Mother's Name"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
            <textarea
              onChange={handleChange}
              value={formData.address}
              name="address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              placeholder="Enter Your address"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
