import { Carousel, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import "../index.css";

export function CarouselCustomNavigation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "./src/assets/i4.jpg",
    "./src/assets/i2.jpg",
    "./src/assets/i3.jpg"
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Carousel
      className="pt-[0px] h-[725px] z-1"
      autoplay={true}
      autoplaySpeed={2000} // 2000 milliseconds = 2 seconds
      infinite={true} // enable infinite looping
      activeIndex={activeIndex}
      onChange={setActiveIndex}
      onNext={handleNext} // Establish handleNext function
      onPrev={handlePrev} // Keep the existing handlePrev function
    >
      {images.map((image, index) => (
        <div key={index} className="relative h-full w-full">
          <img
            src={image}
            alt={`image ${index + 1}`}
            className="h-[725px] w-screen object-image"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                {index === 0 && "Explore Sri Lanka"}
                {index === 1 && "Adventurous Sri Lanka"}
                {index === 2 && "Feel the Nature"}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                {index === 0 &&
                  "Ready to explore Sri Lanka? Your one-stop personalized Sri Lankan travel guide! Embrace the beauty of the pearl of the Indian Ocean, discover hidden gems, and find the perfect things to do. Unlock your Sri Lankan adventure!"}
                {index === 1 &&
                  "CeylonMate curates the perfect Sri Lankan adventure for you. Helps you find hidden gems, delicious eats, and things to do that fit YOUR style"}
                {index === 2 &&
                  "CeylonMate is your Sri Lankan travel guru, helping you find breathtaking hikes, cascading waterfalls, and hidden wildlife spots. Breathe in the fresh air, disconnect, and reconnect with nature"}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
