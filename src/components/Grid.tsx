import React, { useState } from 'react';
import Timer from './Timer';

export default function Grid() {
  // State to track hover status of each box
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Function to handle mouse enter
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // Array of different texts for each grid box
  const gridTexts = [
    "HYD",
    "VSP",
    "BLR"
  ];

  return (
    <div>
      <div className="grid p-6 grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        
        {gridTexts.map((text, index) => (
          <div
            key={index}
            className="lg:h-screen sm:h-52 rounded-lg bg-gray-200 flex items-center justify-center transition-transform duration-500 ease-in-out transform hover:scale-105"
            onMouseEnter={() => handleMouseEnter(index)}  // When hovered
            onMouseLeave={handleMouseLeave}  // When not hovered
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {hoveredIndex === index ? (
                // Timer with fade-in effect
                <div className="opacity-0 hover:opacity-100 transition-opacity hover:backdrop-opacity-0 duration-500 ease-in-out rounded-">
                  <Timer />
                </div>
              ) : (
                // Text with fade-in effect
                <p className="text-center text-9xl font-black  font-bold opacity-100 hover:opacity-0 transition-opacity duration-500 ease-in-out">
                  {text}
                </p>
              )}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
