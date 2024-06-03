import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import { FaQuoteLeft } from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Creative Cate",
  description:
    "With a passion for creativity and a keen eye for detail, we are dedicated to helping businesses thrive in the digital landscape. Our expertise spans across branding, social media management, copywriting, graphic design, and website development. ",
};

export default function About() {
  return (
    <div className="lg:pt-[117px]">
      <section className="pt-36 block lg:flex justify-between lg:pt-0 ">
        <div className=" px-8 md:px-4 md:mx-[5rem] lg:mx-[3rem] lg:w-[55%] 2xl:mx-[20rem] my-auto">
          <h2 className="mb-6  font-medium lg:mb-8">What We Do</h2>
          <p className="mb-14 text-secondary font-medium">
            With a passion for creativity and a keen eye for detail, we are
            dedicated to helping businesses thrive in the digital landscape. Our
            expertise spans across branding, social media management,
            copywriting, graphic design, and website development. Armed with
            years of experience and a commitment to excellence, we tailor
            solutions to meet the unique needs of each client. Whether it's
            crafting compelling content, designing captivating visuals, or
            optimizing online presence, we are driven by the goal of achieving
            tangible results and exceeding expectations.
          </p>
        </div>
        <div className="relative -z-10 w-[100%] lg:h-[700px] lg:w-[50%] ">
          <Image
            className="h-full "
            src={"/carousel/1.jpg"}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            alt="profile"
          />
        </div>
      </section>

      {/* founder */}
      <section className=" bg-accent-100 lg:flex justify-around bg-gradient-to-b from-accent-50 to-accent-100 py-11 2xl:pt-28">
        <div className=" mx-[2.2rem] md:mx-[13rem]  lg:mx-[3.2rem] 2xl:mx-[20rem]  py-12  flex flex-col  justify-center  bg-gradient-to-b from-accent-50 to-accent-100">
          <div className="relative w-[230px] h-[330px]">
            <Image
              src={"/founder.jpg"}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
              alt="founder"
            />
          </div>

          <div className="relative w-[300px] h-[300px] ml-[3rem] mt-[-10rem] ">
            <Image
              src={"/founder-client.jpg"}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
              alt="founder with client"
            />
          </div>
        </div>
        <div className="px-8 mx-[2rem] my-auto">
          <h2 className=" text-center md:text-left  mb-3"> Meet The Founder</h2>
          <h3 className="font-normal mb-4">Kate</h3>
          <p className="mb-3">
            Hello! I'm Kate, the driving force behind Creative Cate. With a
            passion for innovation and a vision for excellence, I founded this
            company with the goal of making a meaningful impact in the industry.
            Drawing from my diverse background in Soical media and Branding, I
            bring a unique perspective to our work, constantly pushing
            boundaries and seeking new opportunities for growth and development.
          </p>
          <br />
          <p>
            At Creative Cate, we're not just about delivering products or
            services; we're about creating lasting relationships and driving
            positive change. Our commitment to integrity, creativity, and
            customer satisfaction is reflected in every aspect of our business.
            Together with our dedicated team, we are excited to embark on this
            journey with you, shaping the future of your company and making a
            difference, one project at a time.
          </p>
          <div className="flex flex-col items-center mt-9 mb-10 pb-10 gap-y-2 md:flex-row gap-x-2">
            <a href="https://www.facebook.com/people/Creative-Cate-Marketing/61559951823971/">
              <Button>Facebook</Button>
            </a>
            <a href="https://www.instagram.com/cre_ative.cate/?igsh=MXZqeDI2MWhwb3E0eQ%3D%3D&utm_source=qr">
              <Button>Instagram</Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="bg-white pt-3 px-8  lg:px-[4rem] lg:max-w-[200rem] mx-auto">
          <div className="">
            <h2 className="mb-5 text-center">Why Choose Us?</h2>
            <p className="mb-10 text-center mx-[2rem]">
              Choose us for a partner dedicated to your success. With a proven
              track record of delivering exceptional results and a commitment to
              personalized service, We prioritize your goals as if they were our
              own. From innovative solutions to unwavering support, We are here
              to exceed your expectations and drive lasting impact for your
              business.
            </p>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap justify-center">
            <div className=" border-l border-sub-DEFUALT pl-5 mb-10 py-4 pr-10   lg:w-[420px]">
              <h4>Gain New</h4>
              <h3 className="mb-3">Ideas </h3>
              <p className="text-secondary font-semibold">
                Choose Us for a burst of fresh creativity tailored to your
                needs. With a passion for innovation and a track record of
                driving results, We offer dynamic solutions to propel your
                business forward. Let's collaborate and unlock new possibilities
                together.
              </p>
            </div>
            <div className=" border-l border-sub-DEFUALT pl-5 mb-10 py-4 pr-10 lg:w-[420px]">
              <h4>Stay</h4>
              <h3 className="mb-3">Up to Date</h3>
              <p className="text-secondary font-semibold">
                Choose us to stay ahead in an ever-evolving landscape. With a
                commitment to continuous learning and a finger on the pulse of
                industry trends, we provide timely insights and strategies to
                keep you at the forefront. Stay competitive and relevant with
                our expertise guiding the way.
              </p>
            </div>
            <div className=" border-l border-sub-DEFUALT pl-5 mb-10 py-4 pr-10 lg:w-[420px]">
              <h4>Focus on</h4>
              <h3 className="mb-3">What Matters</h3>
              <p className="text-secondary font-semibold">
                Choose us for streamlined solutions that cut through the noise.
                With a keen eye for priorities and a commitment to efficiency,
                we deliver targeted strategies that drive meaningful results.
                Trust us to help you stay focused on what truly moves the needle
                for your success.
              </p>
            </div>
            <div className=" border-l border-sub-DEFUALT pl-5 mb-10 py-4 lg:w-[420px]">
              <h4>Save</h4>
              <h3 className="mb-3">Time</h3>
              <p className="text-secondary font-semibold">
                Choose us to reclaim precious time for what truly matters. With
                streamlined processes and efficient solutions, we ensure optimal
                productivity without sacrificing quality. Let us handle the
                details so you can focus on what you do best.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
