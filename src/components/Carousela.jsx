import React from 'react';
import Carousel from './Carousel';

const slides = [
  "/assets/images/1.jpg",
  "/assets/images/2.jpeg",
  "/assets/images/3.jpeg",
  "/assets/images/4.jpg",
  "/assets/images/5.jpeg",
  "/assets/images/6.jpeg",
  "/assets/images/7.jpeg",
  "/assets/images/8.jpeg",
  "/assets/images/9.jpeg",
  "/assets/images/10.jpeg",
  "/assets/images/11.jpeg",
  "/assets/images/12.jpg",
];

const chunkArray = (array, chunkSize) => {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunkedArray.push(array.slice(i, i + chunkSize));
  }
  return chunkedArray;
};

export default function Carousela() {
  const groupedSlides = chunkArray(slides, 2);

  return (
    <div className='Carousela'>
      <div className='max-w-3xl mb-8'>
        <Carousel>
          {groupedSlides.map((group, index) => (
            <div key={index}>
              {group.map((s, subIndex) => (
                <img
                  key={subIndex}
                  src={s} alt={`carousel-slide-${subIndex}`}
                />
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

