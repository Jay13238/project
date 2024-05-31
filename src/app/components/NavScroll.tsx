"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {};

const NavScroll = (props: any ) => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous: any = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
      
    } else {
      setHidden(false);
    }
   
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-140%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className=" fixed w-full flex justify-around items-center z-10 bg-accent-100 py-3"
      {...props}
    />
  );
};
export default NavScroll;
