"use client";

import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const NavBarLink = ({ isMobile }: { isMobile: boolean }) => (
  <nav
    className={`flex items-center bg-neutral-950 text-lg ${
      isMobile ? " flex-col justify-start" : "gap-6"
    }`}
  >
    <Link className="text-sm md:text-lg hover:text-[#7a5af5]" href="/">
      About
    </Link>
    <Link className="text-sm md:text-lg hover:text-[#7a5af5]" href="#services">
      Services
    </Link>
    {/* <Link className="text-sm md:text-lg hover:text-[#7a5af5]" href="/contact">
      Contact
    </Link> */}
    <Link href="/contact" className="p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[6px]" />
      <div className="px-8 py-2  bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
        Schedule A Demo
      </div>
    </Link>
  </nav>
);

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="text-white w-full  relative z-50">
      <div className=" flex justify-between items-center mx-auto p-4 px-10 lg:px-36">
        <div className="flex items-center">
          <Image
            alt="Logo"
            src="/images/kubepilot.png"
            width={40}
            height={40}
            className="mr-2"
          />
          <Link href="/" className="text-2xl font-bold">
            Kube Pilot
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <NavBarLink isMobile={false} />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          {showNav ? (
            <IoCloseSharp
              className="w-8 h-8 cursor-pointer"
              onClick={() => setShowNav(false)}
            />
          ) : (
            <FiMenu
              className="w-8 h-8 cursor-pointer"
              onClick={() => setShowNav(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showNav && (
        <div className="md:hidden bg-neutral-950 w-full px-4 pb-4">
          <NavBarLink isMobile={true} />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
