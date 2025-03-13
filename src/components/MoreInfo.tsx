import Link from "next/link";
import React from "react";

const MoreInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-20 ">
      <h2 className="lg:text-4xl md:text-2xl text-xl text-[#7e67d9]">
        Ready to redefine your Kubernetes strategy?
      </h2>

      <Link href="/contact" className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[6px]" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          Schedule A Demo
        </div>
      </Link>
    </div>
  );
};

export default MoreInfo;
