import MoreInfo from "@/components/MoreInfo";
import Services from "@/components/Services";
import { BackgroundBeamsDemo } from "@/components/ui/BackgroundBeamsDemo";
import { MovingBorderDemo } from "./about/MovingBoarderDemo";
import About from "./about/About";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen space-y-20">
      <BackgroundBeamsDemo />
      <Services />
      <MovingBorderDemo />
      <About />
      <MoreInfo />
    </main>
  );
}
