// components/globalComponents/Card.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  image: string;
  bookName: string;
  genre: string;
}

const Card: React.FC<CardProps> = ({ image, bookName, genre }) => {
  const [animateState, setAnimateState] = useState(false);

  useEffect(() => {
    setAnimateState(true);
  }, []);

  return (
    <motion.div
      className="card flex-shrink-0"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
      style={{ visibility: animateState ? 'visible' : 'hidden', margin: '0', padding: '0', width:'250px' }}
    >
      <div
        className="relative h-[280px] w-[250px] bg-[#ebe3d48d] rounded-lg overflow-hidden"
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-b from-[#00000055] to-[#000000] pl-5 flex items-center">
          <div>
            <h1 className="text-lg font-semibold text-white">{bookName}</h1>
            <span className="text-white">{genre}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
