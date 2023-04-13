import React, { useState } from "react";

const Carousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? products.length - 3 : currentIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      currentIndex === products.length - 3 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="relative flex items-center">
      <button
        className="absolute left-0 z-10 p-2 text-white bg-gray-900 rounded-full"
        onClick={handlePrevious}
      >
        &lt;
      </button>
      <div className="flex overflow-x-auto hide-scroll-bar">
        {products
          .slice(currentIndex, currentIndex + 3)
          .map((product, index) => (
            <div
              key={index}
              className="w-80  mx-4 bg-white border border-gray-300 rounded-lg shadow-sm  h-[350px]"
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium">{product.title}</h3>
                <p className="text-gray-500">{product.subtitle1}</p>
                <p className="text-gray-500">{product.subtitle2}</p>
              </div>
            </div>
          ))}
      </div>
      <button
        className="absolute right-0 z-10 p-2 text-white bg-gray-900 rounded-full"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
