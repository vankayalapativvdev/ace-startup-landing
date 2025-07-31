import { ArrowRight, ChevronRight } from "lucide-react";
import React from "react";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16">
      <span className="text-xs flex items-center justify-center gap-1 cursor-pointer text-black bg-gray-400/10 px-4 py-2 rounded-full">
        We&#39;ve raised $69M seed funding <ChevronRight size={16} />
      </span>
      <h1 className="text-8xl tracking-wide font-bold mt-6 mb-4">
        Generate Images, Text <br /> and Videos with AI
      </h1>
      <p className="text-xl text-gray-500 mt-6 max-w-2xl tracking-wide">
        Everything AI seamlessly integrated all the modern AI generation tools
        into one platform so that you can generate content with a single click.
      </p>
      <div className="flex items-center space-x-2  text-black mt-6">
        <button className="text-sm bg-black dark:bg-gray-400/10 border-1 dark:border-slate-100/10 text-white   px-4 cursor-pointer py-2 rounded-full">
          Get Started
        </button>
        <button className="text-sm flex gap-2 items-center hover:bg-gray-400/10 dark:text-slate-200 px-4 cursor-pointer py-2 hover:rounded-full">
          Contact us <ArrowRight size={12} />
        </button>
      </div>
    </section>
  );
};
