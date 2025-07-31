"use client";

import Image from "next/image";
import React from "react";
import { ModeToggle } from "./toggle-mode";
import { motion } from "framer-motion";

const fadeInDownVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,

    transition: { duration: 0.8 },
  },
};

export const Navbar = () => {
  const NavLinks = [
    {
      name: "Pricing",
      href: "#pricing",
    },
    {
      name: "Blog",
      href: "#blog",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInDownVariants}
    >
      <nav className="flex flex-row items-center space-x-16 justify-start">
        <div className="flex items-center space-x-1">
          <Image src="/logo.webp" alt="Logo" width={25} height={25} />
          <span className="text-md font-medium">Startup</span>
        </div>
        <div className=" flex items-center justify-between w-full">
          <div>
            <ul className="flex space-x-10 text-sm text-gray-700/60 dark:text-slate-200 font-medium">
              {NavLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-2  text-black ">
            <ModeToggle />
            <button className="text-sm hover:bg-gray-400/10 dark:text-slate-200 px-4 cursor-pointer py-2 hover:rounded-full">
              Login
            </button>
            <button className="text-sm bg-black dark:bg-gray-400/10 border-1 dark:border-slate-100/10 text-white   px-4 cursor-pointer py-2 rounded-full">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </motion.div>
  );
};
