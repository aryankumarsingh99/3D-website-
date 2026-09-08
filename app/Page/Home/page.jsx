import Hero from "../../Components/Home/Hero";
import Services from "../../Components/Home/Services";
import About from "../../Components/Home/About";
import BuildingSection from "../../Components/Home/BuildingSection";
 import HomeShowcase from "../../Components/Home/HomeShowcase";
import Contact from "../../Components/Home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <HomeShowcase />
      <BuildingSection />
      <Contact />
       
    </>
  );
}
