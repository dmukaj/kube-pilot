import { benefits } from "@/data";
import React from "react";

const About = () => {
  return (
    <div className="text-center text-lg px-40 text-gray-200 space-y-20">
      <div className="text-center">
        <h1 className="lg:text-4xl md:text-2xl text-xl text-[#7e67d9]">
          Why Choose KubePilot?
        </h1>
        <p className="xl:text-xl md:text-lg text-base text-gray-400 mt-10">
          <span className="lg:text-2xl md:text-xl text-lg text-white font-bold">
            KubePilot{" "}
          </span>
          is more than just a product, it&apos;s a partnership. StackSolve.io
          stands by your side as your co-pilot, guiding you through the
          complexities of Kubernetes with a product that&apos;s built on the
          foundation of extensive DevOps expertise. Whether you&apos;re looking
          to streamline your deployment processes, scale your operations, or
          secure your applications, KubePilot provides the tools, support, and
          peace of mind you need to navigate the cloud-native landscape with
          confidence.
        </p>
      </div>
      <div className="grid lg:grid-cols-6 md:grid-cols-1 justify-start gap-12 ">
        {benefits.map((items) => (
          <div
            className="col-span-3 items-start bg-[#111111] p-6 rounded-xl bg-gradient-to-b from-[rgba(79,63,142,0.2)] to-[#111111]"
            key={items.id}
          >
            <h2 className="text-lg md:text-xl lg:text-2xl mb-4">
              {items.title}
            </h2>
            <p className="text-xs md:text-sm lg:text-lg text-gray-400">
              {items.des}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
