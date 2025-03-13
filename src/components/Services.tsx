import { advanceFeatures, features } from "@/data";
import React from "react";
import "../app/globals.css";
import { cn } from "@/utils/cn";
import Image from "next/image";

const Services = () => {
  return (
    <section>
      <div className="text-center text-lg md:px-40 lg:px-60">
        <p className="text-gray-400 ">
          <span className="text-xl text-white font-bold">
            KubePilot from StackSolve.io{" "}
          </span>
          is the ultimate GitOps solution engineered to tackle the multifaceted
          challenges of Kubernetes environments head-on. By blending
          sophisticated cloud-native tooling with a streamlined approach to
          Kubernetes management, KubePilot offers a comprehensive platform that
          simplifies deployments, enhances scalability, and fortifies security,
          all while ensuring your infrastructure is robust, compliant, and
          effortlessly manageable.
        </p>
      </div>
      <div
        className="flex flex-col items-center text-gray-200 mt-14"
        id="services"
      >
        <h1 className="lg:text-4xl md:text-2xl text-xl text-[#7e67d9]">
          Core Features
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 justify-start gap-12 p-20 ">
          {features.map((feature) => (
            <div
              className="flex flex-col items-start bg-gradient-to-b from-[#111111] to-[#1f1f1f] p-6 rounded-xl "
              key={feature.id}
            >
              <Image
                alt={feature.title}
                src={feature.img}
                width={200}
                height={200}
                className="lg:w-[300px] md:w-[250px] p-6 "
              />
              <h2 className="text-lg md:text-xl lg:text-2xl mb-4">
                {feature.title}
              </h2>
              <p className="text-xs md:text-sm lg:text-lg text-gray-400">
                {feature.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
