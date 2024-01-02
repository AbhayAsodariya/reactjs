// Carousel.js

import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'Section 1 Content',
    'Section 2 Content',
    'Section 3 Content',
    'Section 4 Content',
    'Section 5 Content',
    'Section 6 Content',
    'Section 7 Content',
    'Section 8 Content',
    'Section 9 Content',
  ];

  const totalSlides = slides.length;
  const slidesPerSection = 3;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="carousel-container">
      <div className="carousel" style={{ transform: `translateX(-${currentSlide * (100 / slidesPerSection)}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            {slide}
          </div>
        ))}
      </div>
      <button className="prev-button" onClick={prevSlide}>
        Prev
      </button>
      <button className="next-button" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
