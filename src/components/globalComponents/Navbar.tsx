// import React from 'react';

// // Navbar component
// const Navbar: React.FC = () => {
//   return (
//     <nav className="bg-white shadow-md">
//       <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//         {/* Company Name */}
//         <div className="text-4xl pl-12 font-bold font-readme text-gray-800">Readme</div>

//         {/* Navigation Links */}
//         <ul className="hidden md:flex space-x-32 font-bold font-inter text-gray-600"> {/* Adjusted spacing here */}
//           <li className="hover:text-gray-800">
//             <a href="#home" className="transition duration-300">Home</a>
//           </li>
//           <li className="hover:text-gray-800">
//             <a href="#pricing" className="transition duration-300">Pricing</a>
//           </li>
//           <li className="hover:text-gray-800">
//             <a href="#about" className="transition duration-300">About</a>
//           </li>
//           <li className="hover:text-gray-800">
//             <a href="#contact" className="transition duration-300">Contact</a>
//           </li>
//         </ul>

//         {/* Profile Section */}
//         <div className="flex pr-12 items-center space-x-4">
//           <div className="relative">
//             {/* Profile Icon with Alphabet */}
//             <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold">
//               A
//             </div>
//           </div>

//           {/* Dropdown / Login */}
//           <div className="flex items-center space-x-2">
//             <button className="text-gray-600 hover:text-gray-800 focus:outline-none transition duration-300">
//               Login
//             </button>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-gray-600 hover:text-gray-800 transition duration-300"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10 3a1 1 0 01.993.883L11 4v8.584l3.293-3.291a1 1 0 011.32-.083l.094.083a1 1 0 01.083 1.32l-.083.094-5 5a1 1 0 01-1.32.083l-.094-.083-5-5a1 1 0 011.32-1.497l.094.083L9 12.584V4a1 1 0 01.883-.993L10 3z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/20/solid'; // Import useLocation from react-router-dom

// Navbar component
const Navbar: React.FC = () => {
  const location = useLocation(); // Get the current location
  const isHomePage = location.pathname === '/'; // Check if the current path is the homepage

  return (
    <div className={`fixed top-0 left-0 w-full ${isHomePage ? 'bg-transparent' : 'bg-white shadow-md'} transition duration-300 z-10`}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Company Name */}
        <div className={`text-5xl pl-12 font-bold font-readme ${isHomePage ? 'text-white' : 'text-gray-800'}`}>
          Readme
        </div>

        {/* Navigation Links */}
        <ul className={`hidden md:flex space-x-32 font-bold font-inter ${isHomePage ? 'text-white' : 'text-gray-600'}`}>
          <li className="hover:text-gray-800">
            <a href="#home" className="transition duration-300">Home</a>
          </li>
          <li className="hover:text-gray-800">
            <a href="#pricing" className="transition duration-300">Pricing</a>
          </li>
          <li className="hover:text-gray-800">
            <a href="#about" className="transition duration-300">About</a>
          </li>
          <li className="hover:text-gray-800">
            <a href="#contact" className="transition duration-300">Contact</a>
          </li>
        </ul>

        {/* Profile Section */}
        <div className="flex pr-12 items-center space-x-1">
          <div className="relative">
            {/* Profile Icon with Alphabet */}
            <div className={`w-8 h-8 ${isHomePage ? 'bg-white' : 'bg-gray-400'} rounded-full flex items-center justify-center text-gray-400 font-bold`}>
              A
            </div>
          </div>

          {/* Dropdown / Login */}
          <div className="flex items-center space-x-2">
            {/* <button className={`${isHomePage ? 'text-white' : 'text-gray-600'} hover:text-gray-800 focus:outline-none transition duration-300`}>
              Login
            </button> */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${isHomePage ? 'text-white' : 'text-gray-600'} hover:text-gray-800 transition duration-300`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.993.883L11 4v8.584l3.293-3.291a1 1 0 011.32-.083l.094.083a1 1 0 01.083 1.32l-.083.094-5 5a1 1 0 01-1.32.083l-.094-.083-5-5a1 1 0 011.32-1.497l.094.083L9 12.584V4a1 1 0 01.883-.993L10 3z"
                clipRule="evenodd"
              />
            </svg> */}
             <ChevronDownIcon 
              className={`h-5 w-5 ${isHomePage ? 'text-white' : 'text-gray-600'} hover:text-gray-800 transition duration-300`} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
