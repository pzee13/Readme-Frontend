// components/globalComponents/Carousel.tsx
import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';

interface CarouselProps {
  children: React.ReactNode;
  totalCards: number;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  // components/globalComponents/Carousel.tsx
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4, // Adjust based on your design
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: false,
  centerPadding: '0px', // Ensure padding is set to 0
  focusOnSelect: false,
  cssEase: 'ease-in-out',
};


  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default Carousel;
