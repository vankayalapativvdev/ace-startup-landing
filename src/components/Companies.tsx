import Image from "next/image";
import React from "react";

export const Companies = () => {
  return (
    <div>
      <section className="py-20 items-center justify-center">
        <div>
          <h1 className="font-normal text-black text-5xl text-center mb-6">
            Trusted by the best companies
          </h1>
          <p className="text-md text-center text-gray-500">
            Every AI is the choice of all the fortune 500 companies.
          </p>
        </div>
        <div className="flex items-center justify-between mt-14">
          <Image
            src={"/google.webp"}
            alt="Google Logo"
            width={150}
            height={100}
          />
          <Image
            src={"/meta.webp"}
            alt="Google Logo"
            width={150}
            height={100}
          />
          <Image
            src={"/netflix.webp"}
            alt="Google Logo"
            width={150}
            height={100}
          />
          <Image
            src={"/onlyfans.webp"}
            alt="Google Logo"
            width={150}
            height={100}
          />
        </div>
      </section>
    </div>
  );
};
