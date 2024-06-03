"use client";

import React, { useState, useEffect } from "react";
import { sanityClient, urlFor } from "../lib/sanity";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";

function Slider() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchImages() {
      const query = `
        *[ _type == 'poster' ] {
          image
        }`;

      const fetchedImages = await sanityClient.fetch(query);
      setImages(fetchedImages);
    }

    fetchImages();

    // Start auto-scrolling when component mounts
    const intervalId = setInterval(goToNext, 5000); // Change the interval time as needed

    // Clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-full h-[800px] w-full m-auto relative group ">
      {images.map((image: any, idx) => (
        <div
          key={idx}
          className={`w-full h-full absolute bg-cover bg-center ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }  duration-700 flex flex-col justify-center items-center align-middle content-center`}
          style={{
            backgroundImage: `url(${urlFor(image.image).url()})`,
          }}
        >
          <div className="mx-8 ">
            <h1 className="  mb-4 lg:mb-10 text-center font-bold text-white">
              My Work
            </h1>
            <p className="px-8  text-center text-white font-medium  lg:px-28">
              Dive into a showcase of my portfolio, where creativity meets
              functionality to bring brands to life. With a diverse range of
              projects spanning branding, web design, social media campaigns,
              and more, each piece demonstrates a meticulous attention to detail
              and a commitment to excellence. From captivating visual identities
              to dynamic online experiences, my work reflects a passion for
              innovation and a dedication to delivering results that surpass
              expectations. Explore my portfolio and discover how I can elevate
              your brand to new heights.
            </p>
          </div>
        </div>
      ))}

      <div>
        <RiArrowLeftWideFill
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 transalte-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          size={50}
          onClick={goToPrevious}
        />
      </div>
      <div>
        <RiArrowRightWideFill
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 transalte-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          size={50}
          onClick={goToNext}
        />
      </div>
    </div>
  );
}

export default Slider;
