import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import NavScroll from "../components/NavScroll";

export default function NavBar() {
  return (
    <NavScroll>
      <div className="flex justify-around  items-center bg-accent-100 ">
        <div className="block lg:hidden mr-[13rem] md:mr-[30rem]  ">
          <Link href={"/"}>
            <Image
              src={"/heading-logo-bl.png"}
              width={140}
              height={130}
              alt="logo"
            />
          </Link>
        </div>

        <div className="hidden lg:flex justify-between items-center gap-6 text-secondary  text-xl ">
          <Link
            className="hover:text-white transition-all duration-150"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-white transition-all duration-150"
            href="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-white transition-all duration-150"
            href="/packages"
          >
            Packages
          </Link>
          <div className="sm:hidden md:block  z-10">
            <Link href={"/"}>
              <Image
                src={"/heading-logo-bl.png"}
                width={200}
                height={200}
                alt="logo"
              />
            </Link>
          </div>

          <Link
            className="hover:text-white transition-all duration-150"
            href="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="hover:text-white transition-all duration-150"
            href="/blogs"
          >
            Blogs
          </Link>
          <Link
            className="hover:text-white transition-all duration-150"
            href="/contact"
          >
            Contact Us
          </Link>
        </div>

        <div className="">
          <div className="mr-5">
            <MobileMenu />
          </div>
        </div>
      </div>
    </NavScroll>
  );
}
