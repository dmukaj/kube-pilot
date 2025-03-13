"use client";
import React from "react";
import { BackgroundBeams } from "./BackgroundBeams";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[55rem] flex flex-col text-center justify-center w-full px-10 rounded-md bg-neutral-950 antialiased">
      <div className=" max-w-2xl mx-auto space-y-12">
        <h1 className="text-3xl md:text-5xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold ">
          Your Co-Pilot in Navigating Cloud-Native Complexity
        </h1>
        <h2 className="relative z-10 text-lg md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Elevate Your Kubernetes Experience with Precision Engineering
        </h2>
      </div>
      <BackgroundBeams />
    </div>
  );
}
