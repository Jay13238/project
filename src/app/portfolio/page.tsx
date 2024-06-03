// @ts-ignore

import React from "react";
import PortCard from "../components/PortCard";
import PortData from "../array/portData";
import Image from "next/image";
import { Metadata } from "next";
import Slider from "../components/Slider";

const metadata: Metadata = {
  title: "Portfolio | Creative Cate",
  description:
    "Dive into a showcase of my portfolio, where creativity meets functionality to bring brands to life. ",
};
export { metadata };

export default function Portfolio() {
  return (
    <div className="  lg:pt-[140px] pb-36 -z-10 ">
      <Slider />

      <h2 className="text-center my-8 mb-8 text-5xl lg:text-7xl">
        Our Projects
      </h2>

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
    </div>
  );
}
