"use client";

import { MdEmail, MdCall, MdLocationOn } from "react-icons/md";
import React, { useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";
import dotenv from "dotenv";
dotenv.config();

const Contact = () => {
  const form = useRef<any>();
  const { toast } = useToast();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_YOUR_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID}`,
        form.current,
        {
          publicKey: `${process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY}`,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.currentTarget.reset();
  };

  return (
    <section className=" flex items-center justify-center md:p-20 bg-[url('/images/waves.svg')] bg-no-repeat bg-cover">
      <div className="flex flex-col max-w-[70vw] font-sans bg-[#111111] bg-opacity-80">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className=" flex flex-col items-center justify-center md:p-10 p-5">
            <h1 className="text-xl md:text-3xl lg:text-4xl text-purple-300 font-bold md:mb-10 mb-4">
              Your Journey Simplified
            </h1>
            <p className="lg:text-lg text-xs text-neutral-400">
              Join forces with
              <span className="md:text-xl text-sm text-purple-300 font-bold">
                {" "}
                KubePilot{" "}
              </span>
              and
              <span className="md:text-xl text-sm text-purple-300 font-bold">
                {" "}
                StackSolve.io{" "}
              </span>
              to master the cloud-native landscape. Our commitment goes beyond
              software. We partner with you to ensure your Kubernetes journey is
              efficient, secure, and perfectly aligned with your operational
              goals.
            </p>
            <p className="lg:text-lg text-xs text-neutral-400">
              Contact us at
              <span className="md:text-xl text-sm text-purple-300 font-bold">
                {" "}
                contact@stacksolve.io{" "}
              </span>
              to explore how KubePilot can streamline your cloud-native
              operations, backed by dedicated support and expertise from
              StackSolve.io. Let&apos;s navigate the complexities of Kubernetes
              together, making it an asset rather than an obstacle
            </p>
          </div>
          <div className=" flex items-center justify-center">
            <form
              onSubmit={sendEmail}
              ref={form}
              id="contact"
              className="flex flex-col md:w-[40vw] w-[60vw] mx-auto md:space-y-8 space-y-2 md:p-10 p-5"
            >
              <input
                type="name"
                name="user_name"
                placeholder="Full Name *"
                className="block p-2.5 w-full text-sm text-gray-200 bg-neutral-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Work Email *"
                className="block p-2.5 w-full text-sm text-gray-200 bg-neutral-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="name"
                name="company_name"
                placeholder="Company Name *"
                className="block p-2.5 w-full text-sm text-gray-200 bg-neutral-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="date"
                name="date"
                className="block p-2.5 w-full text-sm text-gray-200 bg-neutral-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />

              <textarea
                id="message"
                name="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-200 bg-neutral-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Please share any comments or questions "
              ></textarea>
              <button
                onClick={() => {
                  toast({
                    description: "Your message has been sent.",
                  });
                }}
                type="submit"
                className=" px-4 py-2 rounded-md border border-neutral-300 bg-neutral-900 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
              >
                Schedule Demo
              </button>
            </form>
          </div>
        </div>

        <div className=" text-white flex lg:flex-row flex-col items-center justify-center md:px-40 py-20 gap-10 ">
          <div className="flex flex-col items-center justify-center space-y-1 w-[20vw]">
            <MdEmail size={40} />
            <h2 className="md:text-lg text-sm font-bold ">Email us:</h2>
            <h3 className="md:text-sm text-xs text-center text-neutral-400 ">
              Contact us to explore how KubePilot can streamline your
              cloud-native operations.
            </h3>
            <p className="text-purple-300 font-bold">contact@stacksolve.io</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-1 w-[20vw]">
            <MdCall size={40} />
            <h2 className="lg:text-lg text-sm font-bold">Call us:</h2>
            <h3 className="lg:text-sm text-xs text-center text-neutral-400">
              Call to speak to a member of our team. We are always happy to help
              you.
            </h3>
            <p className="text-purple-300 font-bold">614-568-6058</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-1 w-[20vw]">
            <MdLocationOn size={40} />
            <h2 className="lg:text-lg text-sm font-bold">Address</h2>
            <h3 className="lg:text-sm text-xs text-center text-neutral-400 ">
              3737 Easton Market #1299 Columbus, OH 43219 United States
            </h3>
            <p className="text-purple-300 font-bold">
              KubePilot, by StackSolve
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
