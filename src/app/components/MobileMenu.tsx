"use client";

import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import React, { useEffect } from "react";
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import Link from "next/link";

export default function MobileMenu() {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  useEffect(() => {
    if (mobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNav]);

  const menuVariants = {
    open: {
      x: "0%",
      transition: {
        type: "tween",
        when: "beforeChildren",
      },
    },
    closed: {
      x: "100%",
      transition: {
        type: "tween",
        when: "afterChildren",
      },
    },
  };

  const itemVariants = {
    open: {
      y: "0%",
      opacity: 1,
    },
    closed: {
      y: "25%",
      opacity: 0,
    },
  };

  const buttonVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 7 },
  };

  return (
    <div className="relative lg:hidden z-40">
      <motion.button
        animate={mobileNav ? "open" : "close"}
        onClick={() => toggleMobileNav()}
        className="flex flex-col space-y-1 relative z-[10000000000]"
      >
        <motion.span
          variants={buttonVariants}
          className="w-7 h-[3px] bg-black block"
        ></motion.span>

        <motion.span
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          className="w-7 h-[3px] bg-black block"
        ></motion.span>

        <motion.span
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -7 },
          }}
          className="w-7 h-[3px] bg-black block"
        ></motion.span>
      </motion.button>

      <AnimatePresence>
        {mobileNav && (
          <MotionConfig transition={{ type: "tween", bounce: 0.099 }}>
            <motion.div
              key="mobile-nav"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 h-[100vh]  bg-secondary z-50"
            >
              <motion.div
                variants={itemVariants}
                className="flex justify-center text-5xl pt-[10rem] mb-10"
              >
                <ul className="text-white">
                  <li className="mb-5 text-center">
                    <Link href="/" onClick={() => toggleMobileNav()}>
                      Home
                    </Link>
                  </li>
                  <li className="mb-5 text-center">
                    <Link href="/about" onClick={() => toggleMobileNav()}>
                      About
                    </Link>
                  </li>
                  <li className="mb-5 text-center">
                    <Link href="/packages" onClick={() => toggleMobileNav()}>
                      Packages
                    </Link>
                  </li>
                  <li className="mb-5 text-center">
                    <Link href="/portfolio" onClick={() => toggleMobileNav()}>
                      Portfolio
                    </Link>
                  </li>
                  <li className="mb-5 text-center">
                    <Link href="/contact" onClick={() => toggleMobileNav()}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="w-[80%] bg-white h-px mx-auto"
              ></motion.div>
              <motion.div variants={itemVariants}>
                <div className="flex items-center justify-center gap-x-5 mt-10">
                  <Link
                    href="https://www.instagram.com/cre_ative.cate/?igsh=MXZqeDI2MWhwb3E0eQ%3D%3D&utm_source=qr"
                    onClick={() => toggleMobileNav()}
                  >
                    <FaInstagram fill="white" className="w-10 h-10" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/people/Creative-Cate-Marketing/61559951823971/"
                    onClick={() => toggleMobileNav()}
                  >
                    <FaFacebookSquare fill="white" className="w-10 h-10" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </div>
  );
}
