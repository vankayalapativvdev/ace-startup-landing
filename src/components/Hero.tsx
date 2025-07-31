"use client";

import { ArrowRight, ChevronRight, Rotate3D } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,

    transition: { duration: 0.8 },
  },
};

const fadeInUpVariantsButton = {
  hidden: { opacity: 0, y: 60, filter: "blur(5px)", rotate: -5 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: { duration: 1 },
  },
};

export const Hero = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeInUpVariants}>
      <section className="flex flex-col items-center justify-center text-center py-16">
        <span className="text-xs flex items-center justify-center gap-1 cursor-pointer text-black dark:text-white bg-gray-400/10 px-4 py-2 rounded-full">
          We&#39;ve raised $69M seed funding <ChevronRight size={16} />
        </span>
        <h1 className="text-8xl tracking-wide font-bold mt-6 mb-4">
          Generate Images, Text <br /> and Videos with AI
        </h1>
        <p className="text-xl text-gray-500 mt-6 max-w-2xl tracking-wide">
          Everything AI seamlessly integrated all the modern AI generation tools
          into one platform so that you can generate content with a single
          click.
        </p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariantsButton}
        >
          <div className="flex items-center space-x-2  text-black mt-6">
            <button className="text-sm bg-black dark:bg-gray-400/10 border-1 dark:border-slate-100/10 text-white   px-4 cursor-pointer py-2 rounded-full">
              Get Started
            </button>
            <button className="text-sm flex gap-2 items-center hover:bg-gray-400/10 dark:text-slate-200 px-4 cursor-pointer py-2 hover:rounded-full">
              Contact us <ArrowRight size={12} />
            </button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};
