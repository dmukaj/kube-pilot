"use client";
import React from "react";
import { advanceFeatures } from "@/data";
import { Button } from "../../components/ui/MovingBoarder";

export function MovingBorderDemo() {
  return (
    <div
      className="flex flex-col items-center text-gray-200 mt-14"
      id="advanceServices"
    >
      <h1 className="lg:text-4xl md:text-2xl text-xl text-[#7e67d9]">
        Advanced Features
      </h1>
      <div className="flex flex-col items-center space-y-6 p-20">
        {advanceFeatures.map((feature) => (
          <Button
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000) + 10000}
            key={feature.id}
            className=" flex flex-col items-start w-[65vw] bg-[#111010] p-6 rounded-xl border-[#111010] "
          >
            <h2 className="text-base md:text-xl lg:text-2xl mb-4">
              {feature.title}
            </h2>
            <p className="text-xs md:text-sm lg:text-lg text-gray-400">
              {feature.des}
            </p>
          </Button>
        ))}
      </div>
    </div>
  );
}
