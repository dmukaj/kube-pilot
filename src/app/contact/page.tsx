import Link from "next/link";
import Contact from "./Contact";
import Testimonial from "./Testimonial";

export default function Home() {
  console.log("here");
  console.log(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID);
  console.log(process.env.TEST);
  return (
    <>
      <Contact />
      {/* <Testimonial /> */}
    </>
  );
}
