import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-accent-100 ">
      <div className="grid grid-cols-2 lg:grid-cols-4 pl-8 py-7 mb-3 mx-auto max-w-[54rem] gap-x-3">
        <div className="mb-3 lg:mb-0">
          <Link href={"/"}>
            <Image
              src={"/logo-black.png"}
              width={120}
              height={100}
              alt="logo"
            />
          </Link>
          
        </div>
        <div className="mb-4">
          <h4 className="text-secondary font-extrabold mt-8 mb-3 md:mt-0 ">
            Contact Us:
          </h4>
          <ul className=" text-secondary font-semibold">
            <li>Email us: info@creativecate.co.za</li>
            <li>Hours: Mon-Fri</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className=" text-secondary font-extrabold mb-2">Company</h4>
          <Link className="text-secondary font-semibold" href={"/about"}>
            About
          </Link>
          <Link className="text-secondary font-semibold" href={"/services"}>
            Services
          </Link>
          <Link className="text-secondary font-semibold" href={"/blogs"}>
            Blogs
          </Link>
          <Link
            className="text-secondary font-semibold"
            href={"/policy"}
          >
            Privacy Policy
          </Link>
        </div>
        <div>
          <h4 className=" text-secondary font-extrabold mb-2">Follow Us On:</h4>
          <ul className=" text-secondary font-semibold">
            <div className="flex items-center gap-x-1 mb-1">
              <div>
                <FaFacebookSquare />
              </div>
              <Link
                href={
                  "https://www.facebook.com/people/Creative-Cate-Marketing/61559951823971/"
                }
              >
                <li>Facebook</li>
              </Link>
            </div>

            <div className="flex items-center gap-x-1">
              <FaInstagram />
              <div>
                <Link
                  href={
                    "https://www.instagram.com/cre_ative.cate/?igsh=MXZqeDI2MWhwb3E0eQ%3D%3D&utm_source=qr"
                  }
                >
                  <li>Instagram</li>
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="bg-accent-100 pb-5">
        <p className=" text-secondary font-semibold text-center text-xs">
          copyright 2024 | Made By Wise Web Solutions
        </p>
      </div>
    </footer>
  );
}
