// import React, { useState } from 'react';

// const genres = [
//   'Fiction',
//   'Non-Fiction',
//   'Mystery',
//   'Romance',
//   'Science Fiction',
//   'Fantasy',
//   'Biography',
//   'History',
//   'Self-Help',
// ];

// const suggestions = [
//   'Desk',
//   'Chair',
//   'Webcam',
//   'Monitor',
//   'Mouse',
//   'Keyboard',
//   'Laptop Stand',
//   'Earphones',
//   'Water Bottle',
//   'Desk Lamp',
// ];

// const SearchForm: React.FC = () => {
//   const [isAccordionOpen, setIsAccordionOpen] = useState(false);
//   const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
//   const [searchValue, setSearchValue] = useState('');
//   const [isSuggestionOpen, setIsSuggestionOpen] = useState(false);

//   const handleGenreSelect = (genre: string) => {
//     setSelectedGenre(genre);
//     setIsAccordionOpen(false);
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchValue(event.target.value);
//     setIsSuggestionOpen(true); // Open suggestions on input focus or change
//   };

//   const handleSuggestionSelect = (suggestion: string) => {
//     setSearchValue(suggestion);
//     setIsSuggestionOpen(false); // Close suggestions after selection
//   };

//   return (
//     <form action="#" className="max-w-xl w-full z-10 relative">
//       <div className="relative">
//         <label htmlFor="search" className="sr-only">
//           Search
//         </label>

//         {/* Accordion Button */}
//         <button
//           type="button"
//           onClick={() => setIsAccordionOpen(!isAccordionOpen)}
//           className="absolute inset-y-0 left-0 flex items-center pl-3 pr-2 text-gray-900 bg-gray-200 border-r border-white rounded-l-md focus:outline-none"
//         >
//           <svg
//             className={`w-5 h-5 transform transition-transform duration-300 ${
//               isAccordionOpen ? 'rotate-180' : 'rotate-0'
//             }`}
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//           {selectedGenre ? (
//             <span className="ml-2 text-sm font-medium text-gray-900">
//               {selectedGenre}
//             </span>
//           ) : (
//             <span className="ml-2 text-sm font-medium text-gray-900">
//               Select Genre
//             </span>
//           )}
//         </button>

//         {/* Search Input */}
//         <input
//           type="text"
//           id="search"
//           value={searchValue}
//           onChange={handleInputChange}
//           onFocus={() => setIsSuggestionOpen(true)} // Open suggestions on focus
//           onBlur={() => setTimeout(() => setIsSuggestionOpen(false), 100)} // Delay closing
//           placeholder="Try Desk, Chair, Webcam etc..."
//           className="block w-full py-3 pl-36 pr-10 text-base font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border border-white rounded-md focus:ring-white focus:border-white focus:ring-offset-2"
//         />

//         {/* Search Icon */}
//         <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//           <svg
//             className="w-5 h-5 text-gray-400"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//             />
//           </svg>
//         </div>
//       </div>

//       {/* Accordion Dropdown */}
//       {isAccordionOpen && (
//         <div className="absolute left-0 right-0 z-20 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
//           <ul className="py-1">
//             {genres.map((genre, index) => (
//               <li
//                 key={index}
//                 className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
//                 onClick={() => handleGenreSelect(genre)} // Handle genre selection
//               >
//                 {genre}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Suggestions Dropdown */}
//       {isSuggestionOpen && searchValue && (
//         <div className="absolute left-0 right-0 z-20 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
//           <ul className="py-1">
//             {suggestions
//               .filter((suggestion) =>
//                 suggestion.toLowerCase().includes(searchValue.toLowerCase())
//               )
//               .map((suggestion, index) => (
//                 <li
//                   key={index}
//                   className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
//                   onClick={() => handleSuggestionSelect(suggestion)} // Handle suggestion selection
//                 >
//                   {suggestion}
//                 </li>
//               ))}
//           </ul>
//         </div>
//       )}
//     </form>
//   );
// };

// export default SearchForm;


import React, { useState } from 'react';

// Sample data for genres and suggestions
const genres = [
  'Fiction',
  'Non-Fiction',
  'Mystery',
  'Romance',
  'Science Fiction',
  'Fantasy',
  'Biography',
  'History',
  'Self-Help',
];

const suggestions = [
  'Desk',
  'Chair',
  'Webcam',
  'Monitor',
  'Mouse',
  'Keyboard',
  'Laptop Stand',
  'Earphones',
  'Water Bottle',
  'Desk Lamp',
];

const SearchForm: React.FC = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState('');
  const [isSuggestionOpen, setIsSuggestionOpen] = useState(false);

  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre);
    setIsAccordionOpen(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setIsSuggestionOpen(true); // Open suggestions on input focus or change
    setIsAccordionOpen(false); // Ensure accordion is closed when suggestions are open
  };

  const handleSuggestionSelect = (suggestion: string) => {
    setSearchValue(suggestion);
    setIsSuggestionOpen(false); // Close suggestions after selection
  };

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
    setIsSuggestionOpen(false); // Ensure suggestions are closed when accordion is open
  };

  return (
    <form action="#" className="max-w-xl w-full z-10 relative">
      <div className="relative">
        <label htmlFor="search" className="sr-only">
          Search
        </label>

        {/* Accordion Button */}
        <button
          type="button"
          onClick={toggleAccordion}
          className="absolute inset-y-0 left-0 flex items-center pl-3 pr-2 text-gray-900 bg-gray-200 border-r border-white rounded-l-md focus:outline-none"
        >
          <svg
            className={`w-5 h-5 transform transition-transform duration-300 ${
              isAccordionOpen ? 'rotate-180' : 'rotate-0'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          {selectedGenre ? (
            <span className="ml-2 text-sm font-medium text-gray-900">
              {selectedGenre}
            </span>
          ) : (
            <span className="ml-2 text-sm font-medium text-gray-900">
              Select Genre
            </span>
          )}
        </button>

        {/* Search Input */}
        <input
          type="text"
          id="search"
          value={searchValue}
          onChange={handleInputChange}
          onFocus={() => {
            setIsSuggestionOpen(true);
            setIsAccordionOpen(false); // Close accordion when input is focused
          }}
          onBlur={() => setTimeout(() => setIsSuggestionOpen(false), 100)} // Delay closing for click handling
          placeholder="Try Desk, Chair, Webcam etc..."
          className="block w-full py-3 pl-36 pr-10 text-base font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border border-white rounded-md focus:ring-white focus:border-white focus:ring-offset-2"
        />

        {/* Search Icon */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Accordion Dropdown */}
      {isAccordionOpen && (
        <div className="absolute left-0 right-0 z-20 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="py-1">
            {genres.map((genre, index) => (
              <li
                key={index}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleGenreSelect(genre)} // Handle genre selection
              >
                {genre}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Suggestions Dropdown */}
      {isSuggestionOpen && searchValue && (
        <div className="absolute left-0 right-0 z-20 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="">
            {suggestions
              .filter((suggestion) =>
                suggestion.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionSelect(suggestion)} // Handle suggestion selection
                >
                  {suggestion}
                </li>
              ))}
          </ul>
        </div>
      )}
    </form>
  );
};

export default SearchForm;
