import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#111010] flex justify-center items-center space-x-20 py-10">
      <Image alt="logo" src="/images/kubepilot.png" width={50} height={50} />
      <p className="text-xs  text-neutral-400">
        Copyrights © 2024 Kube Pilot, All rights Reserved
      </p>
    </div>
  );
};

export default Footer;
