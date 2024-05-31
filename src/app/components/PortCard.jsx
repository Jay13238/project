"use client";
import React from "react";
import Image from "next/image";

import { CldImage } from "next-cloudinary";

export default function PortCard(props) {
  return (
    <div className=" flex justify-center">
      <div
        className="relative overflow-hidden w-[350px] h-[350px] lg:w-[365px] lg:h-[374px] mb-4 lg:hover:scale transition-transform duration-200  "
        key={props.id}
      >
        <Image
          className=" -z-10 block m-auto"
          src={props.image}
          fill
          sizes="100vw,"

          style={{ objectFit: "cover",
          objectPosition: "45%"
           }}
          alt={props.title}
        />

        <div
          className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent to-black"
          id="overlay"
        ></div>
        <div className="absolute  overflow-hidden inset-0 flex flex-col items-center justify-start lg:justify-center translate-y-[28%] md:translate-y-[10%] px-9 text-center lg:translate-y-[38%] xl:translate-y-[38%]  hover:translate-y-[-10%] transition-all duration-200">
          <div className="">
            <h3 className="text-white mb-2 lg:mb-10 xl:mb-20">{props.title}</h3>
          </div>
          <div className="relative h-[0px]">
            <p className="text-white">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
