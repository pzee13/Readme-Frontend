import React, { useState } from "react";

// Define the form data type
interface FormData {
  username: string;
  password: string;
}

// Define the errors type
interface FormErrors {
  username?: string;
  password?: string;
}

const Login: React.FC = () => {
  // Set initial form data state
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  // Set initial errors state
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState<string>("");

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate form fields
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log("Form submitted successfully", formData);
      setSuccessMessage("Form submitted successfully!");
      setFormData({
        username: "",
        password: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white border-b-2 border-r-1  border-gray-400 shadow-gray-500/50 shadow-2xl rounded-xl p-10 max-w-md w-full">
        <h2 className="text-6xl font-bold text-center font-readme text-black mb-10">
          Readme
        </h2>
        {successMessage && (
          <div className="mb-4 text-green-600 font-semibold text-center">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="bg-white">
          <div className="mb-12 relative">
            <input
              className={`shadow-md appearance-none border-2 rounded-md w-full py-3 px-6 text-lg text-gray-700 leading-tight focus:outline-none peer ${
                errors.username ? "border-red-500" : "border-gray-300"
              }`}
              id="username"
              name="username"
              type="text"
              placeholder=" "
              value={formData.username}
              onChange={handleChange}
            />
            <label
              htmlFor="username"
              className={`absolute left-4 -top-3.5 text-sm bg-white transition-all duration-200 transform px-1 ${
                formData.username ? "-translate-y-1 scale-90" : "scale-100"
              } peer-focus:-translate-y-1 peer-focus:scale-90 ${
                errors.username ? "text-red-500" : "text-gray-500"
              }`}
            >
              Username
            </label>
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>
          <div className="mb-12 relative">
            <input
              className={`shadow-md appearance-none border-2 rounded-md w-full py-3 px-6 text-lg text-gray-700 leading-tight focus:outline-none peer ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              id="password"
              name="password"
              type="password"
              placeholder=" "
              value={formData.password}
              onChange={handleChange}
            />
            <label
              htmlFor="password"
              className={`absolute left-4 -top-3.5 text-sm bg-white transition-all duration-200 transform px-1 ${
                formData.password ? "-translate-y-1 scale-90" : "scale-100"
              } peer-focus:-translate-y-1 peer-focus:scale-90 ${
                errors.password ? "text-red-500" : "text-gray-500"
              }`}
            >
              Password
            </label>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <div className="flex justify-center mb-4">
            <button
              className="bg-buttonblue hover:bg-indigo-700 text-white font-semibold py-2 px-12 rounded-2xl focus:outline-none focus:shadow-outline transition-all duration-200 text-lg"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
      {/* Sign-up prompt in a new block-level container */}
      <div className="mt-2 bg-white rounded-8xl border-b-2 border-r-1  border-gray-400 shadow-gray-500/50 shadow-2xl w-full max-w-md">
        <div className="p-2 text-center">
          <p className="text-gray-800">
            Don't have an account?
            <a
              href="#"
              className="text-indigo-600 hover:text-indigo-800 font-medium ml-1"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
