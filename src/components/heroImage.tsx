import Image from "next/image";
import React from "react";

export const HeroImage = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="border-1 bg-gray-400/10 p-4 rounded-4xl [mask-image:linear-gradient(to_bottom,black_70%,transparent)]">
        <Image
          src="/header.webp"
          alt="Product Image"
          width={1500}
          height={1000}
          className="border-1 border-gray-300 bg-white rounded-2xl p-2 object-cover [mask-image:linear-gradient(to_bottom,black_90%,transparent)]"
        />
      </div>
    </section>
  );
};
