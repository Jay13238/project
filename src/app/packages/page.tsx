import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";
import PackCard from "../components/PackCard";
import packData from "../array/packData";
import { Metadata } from "next";


const metadata: Metadata = {
  title: "Packages | Creative Cate", 
description: "Explore a range of tailored solutions designed to elevate your brand and online presence."
}
export {metadata}


export default function Packages() {
  return (
    <div className="pt-[117px] -z-10">
      
      <section className="block lg:flex justify-between lg:pt-0 ">
        <div className="flex flex-col justify-center mb-8 px-8 md:px-4 md:mx-[5rem] lg:mx-[4rem] lg:w-[50%] 2xl:mx-[20rem]">
          <h2 className="mb-6 md:my-10  lg:mb-8">Our Packages</h2>
          <p className="mb-14 text-secondary font-medium">
            Explore a range of tailored solutions designed to elevate your brand
            and online presence. From comprehensive branding packages that
            define your identity to expertly crafted social media strategies
            that engage your audience, each offering is meticulously curated to
            meet your specific needs. Dive into the world of digital marketing
            with ease through our website creation packages, designed to
            establish a strong online presence and drive meaningful connections
            with your target audience. With these packages, you're not just
            investing in services; you're investing in the future success of
            your business.
          </p>
        </div>
        <div className="relative -z-10 w-[100%] h-[380px] lg:h-[630px] lg:w-[50%] ">
          <Image
            className="h-full "
            src={"/packages.jpg"}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            alt="profile"
          />
        </div>
      </section>

      <section className="bg-accent-100 px-5 py-[9rem]  ">
        <div className="mx-auto">
          <div className=" flex flex-wrap justify-center md:grid md:mx-[3rem] md:grid-cols-[repeat(2,_minmax(0,_500px))]  xl:mx-[10%] 2xl:mx-[27%]  lg:grid-cols-[repeat(3,_minmax(0,_500px))] gap-y-8 ">
            {packData.map((packData) => (
              <PackCard
                key={packData.id}
                title={packData.title}
                includes={packData.includes}
                price={packData.price}
                image={packData.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent-100  lg:px-[12rem] py-5 -z-30">
        <ContactForm />
      </section>
    </div>
  );
}
