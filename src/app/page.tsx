import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import Button from "./components/Button";
import VideoHead from "./components/VideoHead";
export default function Home() {
  return (
    <main>
      <div className="relative -z-10 pt-[4rem] lg:pt-0">
        <Image
          className="lg:hidden"
          src={"/mobile-header.jpg"}
          width={1000}
          height={1000}
          alt="laptop"
        />

        <div className="w-full h-[100vh] hidden lg:block pt-[117px]">
          <VideoHead />
        </div>

        <div
          className=" absolute w-[100%] h-[100%] bg-black bg-opacity-30 top-0"
          id="overlay"
        ></div>
        {/* heading */}
        <div className=" absolute bottom-[9%] w-[100%] mb-20 md:bottom-[35%] lg:bottom-[35%] ">
          <h1 className=" relative text-white text-center px-1 ">
            Telling your brand story right
          </h1>
        </div>
      </div>
      <section className="pt-2  bg-accent-100 lg:flex justify-between lg:pt-0 ">
        <div className=" pl-1 pr-1 sm:mx-20 lg:ml-[4rem] lg:w-[55%] md:mx-[4rem] 2xl:mx-[20rem] px-8">
          <h2 className="mb-6 md:my-10 mt-3   lg:mt-[6rem] lg:mb-8">
            What We Do
          </h2>
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
            <br />
            <br />
            We offer a comprehensive suite of services to elevate your brand and
            online presence. From expert branding and social media coaching to
            hands-on management and custom templates, our team has you covered
            on all things social media. Increase your visibility with targeted
            social media and Google Ads campaigns, while our skilled copywriters
            and editors ensure your message is clear and compelling. Our graphic
            designers, photographers, and videographers bring your vision to
            life, and our SEO specialists and web developers optimize your
            digital footprint. Let us help you connect with your audience and
            grow your business.
          </p>
          <div className="pb-8 md:pb-20 lg:mb-0">
            <Link href="/about">
              <Button>LEARN MORE</Button>
            </Link>
          </div>
        </div>
        <div className="relative  w-[100%] h-[380px]  lg:w-[50%] xl:h-[40rem]">
          <Image
            className="h-full"
            src={"/profile.jpg"}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            alt="profile"
          />
        </div>
      </section>

      {/* services */}
      <section className="py-20 bg-accent-200">
        <div>
          <h2 className="mb-14  flex justify-center text-secondary md:mb-20">
            Main Services
          </h2>
          <div className="flex flex-col items-center justify-center mx-8 xl:flex-row gap-3 ">
            <div className=" bg-white w-[360px]  md:w-[24rem] pt-7 pb-9 px-8 rounded-md shadow-lg hover:-translate-y-3 transition-transform duration-200">
              <img className="w-[50px] mb-4" src="./paid-ads.png" alt="" />
              <h3 className="mb-4">Branding</h3>
              <ul className=" list-inside list-disc pl-5 mb-14">
                <li className="text-secondary font-medium">Logo design</li>
                <li className="text-secondary font-medium">Brand identity</li>
                <li className="text-secondary font-medium">Email signature</li>
                <li className="text-secondary font-medium">And More</li>
              </ul>
              <div className="">
                <Link className="" href={"./packages"}>
                  <Button>LEARN MORE</Button>
                </Link>
              </div>
            </div>
            <div className=" bg-white w-[360px]  md:w-[24rem] pt-7 pb-9 px-8 rounded-md shadow-lg hover:-translate-y-3 transition-transform duration-200 ">
              <img className="w-[50px] mb-4" src="./paid-ads.png" alt="" />
              <h3 className="mb-4">Social Media</h3>
              <ul className=" list-inside list-disc pl-5 mb-14">
                <li className="text-secondary font-medium">
                  Creation and management of social media accounts
                </li>
                <li className="text-secondary font-medium">Create content</li>
                <li className="text-secondary font-medium">Posting</li>
                <li className="text-secondary font-medium">And More</li>
              </ul>
              <Link className="" href={"./packages"}>
                <Button>LEARN MORE</Button>
              </Link>
            </div>
            <div className=" bg-white w-[360px]  md:w-[24rem] pt-7 pb-9 px-8  rounded-md shadow-lg hover:-translate-y-3 transition-transform duration-200 ">
              <img className="w-[50px] mb-4" src="./paid-ads.png" alt="" />
              <h3 className="mb-4">Website Design </h3>
              <ul className=" list-inside list-disc pl-5 mb-14">
                <li className="text-secondary font-medium">
                  Design and Development
                </li>
                <li className="text-secondary font-medium">Hosting</li>
                <li className="text-secondary font-medium">
                  SEO(Search Engine Optimization)
                </li>
                <li className="text-secondary font-medium">And More</li>
              </ul>
              <Link className="" href={"./packages"}>
                <Button>LEARN MORE</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-20 px-7 bg-white">
        <div className=" max-w-[40rem] mx-auto">
          <h2 className="mb-10 text-center">Why Work With Us?</h2>
          <p className="mb-20 text-secondary font-semibold text-center">
            We bring a wealth of experience in branding, social media
            management, copywriting, graphic design, and website development to
            craft a comprehensive strategy that caters to your unique needs. Our
            team is passionate about creating compelling content and designing
            eye-catching visuals that resonate with your audience and drive
            growth for your businesses. When you choose us, you're gaining
            dedicated partners invested in your success. Let's collaborate and
            create something remarkable together. Schedule a free consultation
            today!
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap justify-center lg:px-[4rem] lg:max-w-[200rem] mx-auto">
          <div className=" border-l-2 pl-5 mb-10 py-4 pr-10  lg:w-[420px]">
            <h4>Innovative</h4>
            <h3 className="mb-3">Solutions </h3>
            <p className="text-secondary font-semibold">
              Our forte is resourcefulness. We excel in finding innovative
              solutions and making the most of available resources. With
              proactive mindsets and creative approaches, we navigate challenges
              efficiently, turning limitations into opportunities for success.
            </p>
          </div>
          <div className=" border-l-2 pl-5 mb-10 py-4 pr-10 lg:w-[420px]">
            <h4>Meaningful</h4>
            <h3 className="mb-3">Engagement</h3>
            <p className="text-secondary font-semibold">
              We are personable, fostering genuine connections through warmth,
              empathy, and sincere engagement. Whether with colleagues or
              clients, we create welcoming atmospheres where collaboration
              thrives, prioritizing trust and understanding in every
              interaction.
            </p>
          </div>

          <div className=" border-l-2 pl-5 mb-10 py-4 lg:w-[420px]">
            <h4>Tangible</h4>
            <h3 className="mb-3">Outcomes</h3>
            <p className="text-secondary font-semibold">
              We are result-driven. Focused on achieving tangible outcomes, we
              approach every task with determination and purpose. Guided by
              clear objectives, we strive to deliver impactful results that make
              a difference. From project inception to completion, we remain
              committed to driving success and exceeding expectations.
            </p>
          </div>
        </div>
      </section>
      {/* blogs */}
    </main>
  );
}
