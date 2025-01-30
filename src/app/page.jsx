import Image from "next/image";
import Hero from "./components/Hero/Hero";
import ContactUs from "./components/ContactUs/ContactUs";
import CallRequest from "./components/CallRequest/CallRequest";
import Challenge from "./components/Challenge/Challenge";
import WhySection from "./components/WhySection/WhySection";
import HowWeSolve from "./components/HowWeSolve/HowWeSolve";
import OurServices from "./components/OurServices/OurServices";
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
  return (
    <>
      <Hero />
      <Challenge />
      <HowWeSolve />
      <WhySection />
      <OurServices />
      <ContactUs />
      <CallRequest />
      
    </>
  );
}
