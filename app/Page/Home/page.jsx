import Hero from "../../Components/Home/Hero";
import Services from "../../Components/Home/Services";
import About from "../../Components/Home/About";
import Interior from "../../Components/Home/Interior";
import Contact from "../../Components/Home/Contact";
import BuildingSection from "../../Components/Home/BuildingSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Interior />
      <Services />
      <BuildingSection />
      <Contact />

    </>
  );
}
