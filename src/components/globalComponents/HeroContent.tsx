import React from 'react';
import SearchForm from './SearchForm';

const HeroContent: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-center items-center px-4 mx-auto text-center text-white z-20 h-full">
      <h1 className="text-3xl font-poppins font-semibold text-[60px] sm:text-4xl xl:text-5xl mt-44 mb-10">
        Let's Start Reading
      </h1>
      <SearchForm />
    </div>
  );
};

export default HeroContent;
