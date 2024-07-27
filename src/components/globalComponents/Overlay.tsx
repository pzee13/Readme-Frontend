import React from 'react';

const Overlay: React.FC = () => {
  return (
    <div
      className="absolute inset-0 z-10"
      style={{
        background:
          'linear-gradient(to top, rgba(0, 0, 255, 0.4) 0%, rgba(0, 0, 255, 0.2) 20%, rgba(0, 0, 255, 0) 100%)',
      }}
    />
  );
};

export default Overlay;
