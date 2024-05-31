// @ts-ignore

import React from "react";
import PortCard from "../components/PortCard";
import PortData from "../array/portData";
import Image from "next/image";
import images from "../array/images";


export default function Portfolio() {
  return (
    <div className="pt-40 pb-36 -z-10">
      <h1 className=" mb-4 lg:mb-10 text-center font-bold text-secondary">
        My Work
      </h1>
      <p className="px-8 mb-20 text-center text-secondary font-medium  lg:px-28">
        Dive into a showcase of my portfolio, where creativity meets
        functionality to bring brands to life. With a diverse range of projects
        spanning branding, web design, social media campaigns, and more, each
        piece demonstrates a meticulous attention to detail and a commitment to
        excellence. From captivating visual identities to dynamic online
        experiences, my work reflects a passion for innovation and a dedication
        to delivering results that surpass expectations. Explore my portfolio
        and discover how I can elevate your brand to new heights.
      </p>
      <div className="flex justify-center flex-wrap px-8 gap-4 lg:gap-9 -z-50">
        {PortData.map((portData) => (
          <PortCard
            key={portData.id}
            title={portData.title}
            image={portData.image}
            description={portData.description}
          />
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-center mb-11">Working With Cients</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {images.map((props) => (
            <div key={props.id} className="relative w-[300px] h-[300px]">
              <Image
                src={props.image}
                fill
                priority={true}
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
