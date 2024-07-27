// components/homePageComponents/SectionCarousel.tsx
import React from 'react';
import Carousel from '../globalComponents/Carousel';
import Card from '../globalComponents/Card';

interface SectionCarouselProps {
  title: string;
  items: { image: string; bookName: string; genre: string }[];
}

const SectionCarousel: React.FC<SectionCarouselProps> = ({ title, items }) => (
  <div className="section mb-8">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <Carousel totalCards={items.length}>
      {items.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          bookName={item.bookName}
          genre={item.genre}
        />
      ))}
    </Carousel>
  </div>
);

export default SectionCarousel;
