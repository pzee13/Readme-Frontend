import React from 'react';
import HomePageImage from "../../assets/images/HomeHeroImage.png";

const HeroImage: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <img
        src={HomePageImage}
        alt="Hero"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default HeroImage;
