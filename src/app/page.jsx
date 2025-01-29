import Image from "next/image";
import Hero from "./components/Hero/Hero";
import ContactUs from "./components/ContactUs/ContactUs";
import CallRequest from "./components/CallRequest/CallRequest";
import Challenge from "./components/Challenge/Challenge";
import WhySection from "./components/WhySection/WhySection";

export default function Home() {
  return (
    <>
      <Hero />
      <Challenge />
      <WhySection />
      <ContactUs />
      <CallRequest />
    </>
  );
}
