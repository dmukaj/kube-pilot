import path from "path";
import React from "react";
import { MdEmail, MdCall, MdSupport } from "react-icons/md";
import { FaBuilding } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <div className="text-white flex justify-around px-40">
      <div className="text-white">
        <MdEmail />
        <h2>Email us:</h2>
        <h3></h3>
        <p>contact@stacksolve.io</p>
      </div>
      <div>
        <MdCall />
        <h2>Call us:</h2>
        <h3></h3>
        <p>919...</p>
      </div>
      <div>
        <FaBuilding />
        <h2>Company Information:</h2>
        <h3>KubePilot</h3>
        <p>by: StactSolve</p>
      </div>
    </div>
  );
};

export default Testimonial;
