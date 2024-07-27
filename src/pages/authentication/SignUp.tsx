// import React, { useState } from "react";
// import LoginImage from "../../assets/images/LoginImage.png";
// import { FaGoogle } from "react-icons/fa";

// // Define the form data interface
// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

// // Define the errors interface
// interface FormErrors {
//   firstName?: string;
//   lastName?: string;
//   email?: string;
//   password?: string;
//   confirmPassword?: string;
// }

// const Login: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState<FormErrors>({});
//   const [successMessage, setSuccessMessage] = useState<string>("");

//   // Handle form field changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Validate form fields
//   const validateForm = (): FormErrors => {
//     const newErrors: FormErrors = {};

//     if (!formData.firstName.trim()) {
//       newErrors.firstName = "First Name is required";
//     }

//     if (!formData.lastName.trim()) {
//       newErrors.lastName = "Last Name is required";
//     }

//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters";
//     }

//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     return newErrors;
//   };

//   // Handle form submission
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formErrors = validateForm();

//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//     } else {
//       // Simulate successful form submission
//       console.log("Form submitted successfully", formData);
//       setSuccessMessage("Form submitted successfully!");
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       });
//       setErrors({});
//     }
//   };

//   // Handle Google authentication
//   const handleGoogleAuth = () => {
//     console.log("Google authentication");
//     // Simulate Google authentication
//     alert("Google authentication");
//   };

//   return (
//     <div className="h-screen flex bg-baseblue">
//       {/* Left Section */}
//       <div className="bg-baseblue w-3/6 flex flex-col items-start justify-between relative text-white px-8 py-4 sm:items-start text-white px-4 sm:px-8 py-4 sm:py-8">
//         {/* Heading and Slogan */}
//         <div className="mt-8 items-center">
//           <h1 className="text-8xl font-bold mb-4">Readme</h1>
//           <p className="text-2xl text-center text-baseorange font-bold">
//             Explore your next great read
//           </p>
//         </div>

//         {/* Image */}
//         <div className="absolute right-0 transform translate-x-1/3 top-1/2 -translate-y-1/2">
//           <img
//             src={LoginImage} // Use your image URL
//             alt="Middle Image"
//             className="rounded-full z-10"
//           />
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="bg-white w-4/6 z-5 flex items-center justify-center rounded-tl-8xl rounded-bl-8xl">
//         <div className="w-full max-w-lg px-4">
//           <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
//           {successMessage && (
//             <div className="mb-4 text-green-600 font-semibold">
//               {successMessage}
//             </div>
//           )}
//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//               <div className="relative mb-4">
//                 <input
//                   type="text"
//                   id="firstName"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className={`w-full px-6 py-3 border-2 rounded-md text-lg focus:outline-none peer ${
//                     errors.firstName ? "border-red-500" : "border-gray-300"
//                   }`}
//                 />
//                 <label
//                   htmlFor="firstName"
//                   className={`absolute left-4 -top-3.5 text-sm bg-white transition-all duration-200 transform px-1 ${
//                     formData.firstName ? "-translate-y-1 scale-90" : "scale-100"
//                   } peer-focus:-translate-y-1 peer-focus:scale-90 ${
//                     errors.firstName ? "text-red-500" : "text-gray-500"
//                   }`}
//                 >
//                   First Name
//                 </label>
//                 {errors.firstName && (
//                   <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
//                 )}
//               </div>
//               <div className="relative mb-4">
//                 <input
//                   type="text"
//                   id="lastName"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className={`w-full px-6 py-3 border-2 rounded-md text-lg focus:outline-none peer ${
//                     errors.lastName ? "border-red-500" : "border-gray-300"
//                   }`}
//                 />
//                 <label
//                   htmlFor="lastName"
//                   className={`absolute left-4 -top-3.5 text-sm bg-white transition-all duration-200 transform px-1 ${
//                     formData.lastName ? "-translate-y-1 scale-90" : "scale-100"
//                   } peer-focus:-translate-y-1 peer-focus:scale-90 ${
//                     errors.lastName ? "text-red-500" : "text-gray-500"
//                   }`}
//                 >
//                   Last Name
//                 </label>
//                 {errors.lastName && (
//                   <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
//                 )}
//               </div>
//             </div>
//             <div className="mb-8 relative">
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full px-6 py-3 border-2 rounded-md text-lg focus:outline-none peer ${
//                   errors.email ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               <label
//                 htmlFor="email"
//                 className={`absolute left-4 -top-3.5 text-sm bg-white transition-all duration-200 transform px-1 ${
//                   formData.email ? "-translate-y-1 scale-90" : "scale-100"
//                 } peer-focus:-translate-y-1 peer-focus:scale-90 ${
//                   errors.email ? "text-red-500" : "text-gray-500"
//                 }`}
//               >
//                 Email
//               </label>
//               {errors.email && (
//                 <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//               )}
//             </div>
//             <div className="mb-8 relative">
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className={`w-full px-6 py-3 border-2 rounded-md text-lg focus:outline-none peer ${
//                   errors.password ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               <label
//                 htmlFor="password"
//                 className={`absolute left-4 -top-3.5 text-sm bg-white transition-all duration-200 transform px-1 ${
//                   formData.password ? "-translate-y-1 scale-90" : "scale-100"
//                 } peer-focus:-translate-y-1 peer-focus:scale-90 ${
//                   errors.password ? "text-red-500" : "text-gray-500"
//                 }`}
//               >
//                 Password
//               </label>
//               {errors.password && (
//                 <p className="text-red-500 text-sm mt-1">{errors.password}</p>
//               )}
//             </div>
//             <div className="mb-8 relative">
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className={`w-full px-6 py-3 border-2 rounded-md text-lg focus:outline-none peer ${
//                   errors.confirmPassword ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               <label
//                 htmlFor="confirmPassword"
//                 className={`absolute left-4 -top-3.5 text-sm bg-white transition-all duration-200 transform px-1 ${
//                   formData.confirmPassword ? "-translate-y-1 scale-90" : "scale-100"
//                 } peer-focus:-translate-y-1 peer-focus:scale-90 ${
//                   errors.confirmPassword ? "text-red-500" : "text-gray-500"
//                 }`}
//               >
//                 Confirm Password
//               </label>
//               {errors.confirmPassword && (
//                 <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
//               )}
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-baseblue text-white py-3 rounded-md text-lg hover:bg-orange-700 transition duration-300"
//             >
//               Sign Up
//             </button>
//           </form>
//           <div className="flex items-center my-6">
//             <div className="flex-grow border-t border-gray-300"></div>
//             <span className="mx-4 text-gray-600">or</span>
//             <div className="flex-grow border-t border-gray-300"></div>
//           </div>
//           <button
//             onClick={handleGoogleAuth}
//             className="w-full flex items-center justify-center bg-red-600 text-white py-3 rounded-md text-lg hover:bg-red-700 transition duration-300"
//           >
//             <FaGoogle className="mr-2" />
//             Sign Up with Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { FaGoogle } from "react-icons/fa";
// import LoginImage from '../../components/LoginImage'

// // Define the form data interface
// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

// // Define the errors interface
// interface FormErrors {
//   firstName?: string;
//   lastName?: string;
//   email?: string;
//   password?: string;
//   confirmPassword?: string;
// }

// const Login: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState<FormErrors>({});
//   const [successMessage, setSuccessMessage] = useState<string>("");

//   // Handle form field changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Validate form fields
//   const validateForm = (): FormErrors => {
//     const newErrors: FormErrors = {};

//     if (!formData.firstName.trim()) {
//       newErrors.firstName = "First Name is required";
//     }

//     if (!formData.lastName.trim()) {
//       newErrors.lastName = "Last Name is required";
//     }

//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters";
//     }

//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     return newErrors;
//   };

//   // Handle form submission
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formErrors = validateForm();

//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//     } else {
//       // Simulate successful form submission
//       console.log("Form submitted successfully", formData);
//       setSuccessMessage("Form submitted successfully!");
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       });
//       setErrors({});
//     }
//   };

//   // Handle Google authentication
//   const handleGoogleAuth = () => {
//     console.log("Google authentication");
//     // Simulate Google authentication
//     alert("Google authentication");
//   };

//   return (
//     <div className="h-screen flex bg-baseblue">
//     {/* Left Section */}
//     <div className="w-6/12 items-center justify-center text-white relative">
//       {/* Blue Overlay */}
//       <LoginImage />
      
//     </div>
  
//     {/* Right Section */}
//     <div className="w-7/12 flex items-center justify-center bg-white">
//       <div className="w-full max-w-lg px-4">
//         <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
//         {successMessage && (
//           <div className="mb-4 text-green-600 font-semibold">
//             {successMessage}
//           </div>
//         )}
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//             {/* Input Fields */}
//             <div className="relative mb-4">
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className={`w-full px-6 py-3 border-2 rounded-md text-lg focus:outline-none peer ${
//                   errors.firstName ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               <label
//                 htmlFor="firstName"
//                 className={`absolute left-4 -top-3.5 text-sm bg-white transition-all duration-200 transform px-1 ${
//                   formData.firstName ? "-translate-y-1 scale-90" : "scale-100"
//                 } peer-focus:-translate-y-1 peer-focus:scale-90 ${
//                   errors.firstName ? "text-red-500" : "text-gray-500"
//                 }`}
//               >
//                 First Name
//               </label>
//               {errors.firstName && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.firstName}
//                 </p>
//               )}
//             </div>
//             <div className="relative mb-4">
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className={`w-full px-6 py-3 border-2 rounded-md text-lg focus:outline-none peer ${
//                   errors.lastName ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               <label
//                 htmlFor="lastName"
//                 className={`absolute left-4 -top-3.5 text-sm bg-white transition-all duration-200 transform px-1 ${
//                   formData.lastName ? "-translate-y-1 scale-90" : "scale-100"
//                 } peer-focus:-translate-y-1 peer-focus:scale-90 ${
//                   errors.lastName ? "text-red-500" : "text-gray-500"
//                 }`}
//               >
//                 Last Name
//               </label>
//               {errors.lastName && (
//                 <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
//               )}
//             </div>
//           </div>
//           <div className="mb-8 relative">
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className={`w-full px-6 py-3 border-2 rounded-md text-lg focus:outline-none peer ${
//                 errors.email ? "border-red-500" : "border-gray-300"
//               }`}
//             />
//             <label
//               htmlFor="email"
//               className={`absolute left-4 -top-3.5 text-sm bg-white transition-all duration-200 transform px-1 ${
//                 formData.email ? "-translate-y-1 scale-90" : "scale-100"
//               } peer-focus:-translate-y-1 peer-focus:scale-90 ${
//                 errors.email ? "text-red-500" : "text-gray-500"
//               }`}
//             >
//               Email
//             </label>
//             {errors.email && (
//               <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//             )}
//           </div>
//           <div className="mb-8 relative">
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className={`w-full px-6 py-3 border-2 rounded-md text-lg focus:outline-none peer ${
//                 errors.password ? "border-red-500" : "border-gray-300"
//               }`}
//             />
//             <label
//               htmlFor="password"
//               className={`absolute left-4 -top-3.5 text-sm bg-white transition-all duration-200 transform px-1 ${
//                 formData.password ? "-translate-y-1 scale-90" : "scale-100"
//               } peer-focus:-translate-y-1 peer-focus:scale-90 ${
//                 errors.password ? "text-red-500" : "text-gray-500"
//               }`}
//             >
//               Password
//             </label>
//             {errors.password && (
//               <p className="text-red-500 text-sm mt-1">{errors.password}</p>
//             )}
//           </div>
//           <div className="mb-8 relative">
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className={`w-full px-6 py-3 border-2 rounded-md text-lg focus:outline-none peer ${
//                 errors.confirmPassword ? "border-red-500" : "border-gray-300"
//               }`}
//             />
//             <label
//               htmlFor="confirmPassword"
//               className={`absolute left-4 -top-3.5 text-sm bg-white transition-all duration-200 transform px-1 ${
//                 formData.confirmPassword ? "-translate-y-1 scale-90" : "scale-100"
//               } peer-focus:-translate-y-1 peer-focus:scale-90 ${
//                 errors.confirmPassword ? "text-red-500" : "text-gray-500"
//               }`}
//             >
//               Confirm Password
//             </label>
//             {errors.confirmPassword && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.confirmPassword}
//               </p>
//             )}
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-baseblue text-white py-3 rounded-md hover:bg-baseorange transition-all duration-200 text-lg"
//           >
//             Sign Up
//           </button>
//           <div className="flex items-center justify-center my-6">
//             <span className="border-t border-gray-300 flex-grow mr-2"></span>
//             <span className="text-gray-500">or</span>
//             <span className="border-t border-gray-300 flex-grow ml-2"></span>
//           </div>
//           <button
//             type="button"
//             onClick={handleGoogleAuth}
//             className="w-full flex items-center justify-center bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-all duration-200 text-lg"
//           >
//             <FaGoogle className="mr-3" />
//             Sign Up with Google
//           </button>
//         </form>
//       </div>
//     </div>
//   </div>
  
//   );
// };

// export default Login;


import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import LoginImage from '../../components/authComponents/LoginImage';

// Define the form data interface
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Define the errors interface
interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
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
      // Simulate successful form submission
      console.log("Form submitted successfully", formData);
      setSuccessMessage("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
    }
  };

  // Handle Google authentication
  const handleGoogleAuth = () => {
    console.log("Google authentication");
    // Simulate Google authentication
    alert("Google authentication");
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row bg-baseblue">
      {/* Left Section (Hidden on small screens) */}
     <div className="lg:w-6/12 items-center justify-center text-white sm: ">
       {/* Blue Overlay */}
       <LoginImage />
      
    </div>
      
      {/* Right Section */}
      <div className="w-full lg:w-6/12 flex items-center justify-center bg-white lg:rounded-none sm:rounded-2xl">
        <div className="w-full max-w-lg">
          {/* Heading for small screens */}
          <div className="block lg:hidden text-center text-white text-4xl font-bold mb-4">
            Readme
          </div>
          
          {/* Heading for larger screens */}
          <div className=" lg:block text-center">
            <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
          </div>

          {successMessage && (
            <div className="mb-4 text-green-600 font-semibold">
              {successMessage}
            </div>
          )}

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
              {/* Input Fields */}
              <div className="relative mb-4">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-6 py-3 border-2 rounded-md text-lg focus:outline-none peer ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <label
                  htmlFor="firstName"
                  className={`absolute left-4 -top-3.5 text-sm bg-white transition-all duration-200 transform px-1 ${
                    formData.firstName ? "-translate-y-1 scale-90" : "scale-100"
                  } peer-focus:-translate-y-1 peer-focus:scale-90 ${
                    errors.firstName ? "text-red-500" : "text-gray-500"
                  }`}
                >
                  First Name
                </label>
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-6 py-3 border-2 rounded-md text-lg focus:outline-none peer ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <label
                  htmlFor="lastName"
                  className={`absolute left-4 -top-3.5 text-sm bg-white transition-all duration-200 transform px-1 ${
                    formData.lastName ? "-translate-y-1 scale-90" : "scale-100"
                  } peer-focus:-translate-y-1 peer-focus:scale-90 ${
                    errors.lastName ? "text-red-500" : "text-gray-500"
                  }`}
                >
                  Last Name
                </label>
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="mb-8 relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-6 py-3 border-2 rounded-md text-lg focus:outline-none peer ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              <label
                htmlFor="email"
                className={`absolute left-4 -top-3.5 text-sm bg-white transition-all duration-200 transform px-1 ${
                  formData.email ? "-translate-y-1 scale-90" : "scale-100"
                } peer-focus:-translate-y-1 peer-focus:scale-90 ${
                  errors.email ? "text-red-500" : "text-gray-500"
                }`}
              >
                Email
              </label>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-8 relative">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-6 py-3 border-2 rounded-md text-lg focus:outline-none peer ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
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
            <div className="mb-8 relative">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-6 py-3 border-2 rounded-md text-lg focus:outline-none peer ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                }`}
              />
              <label
                htmlFor="confirmPassword"
                className={`absolute left-4 -top-3.5 text-sm bg-white transition-all duration-200 transform px-1 ${
                  formData.confirmPassword ? "-translate-y-1 scale-90" : "scale-100"
                } peer-focus:-translate-y-1 peer-focus:scale-90 ${
                  errors.confirmPassword ? "text-red-500" : "text-gray-500"
                }`}
              >
                Confirm Password
              </label>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-baseblue text-white py-3 rounded-md hover:bg-baseorange transition-all duration-200 text-lg"
            >
              Sign Up
            </button>
            <div className="flex items-center justify-center my-6">
              <span className="border-t border-gray-300 flex-grow mr-2"></span>
              <span className="text-gray-500">or</span>
              <span className="border-t border-gray-300 flex-grow ml-2"></span>
            </div>
            <button
              type="button"
              onClick={handleGoogleAuth}
              className="w-full flex items-center justify-center bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-all duration-200 text-lg"
            >
              <FaGoogle className="mr-3" />
              Sign Up with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
