import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Technologies from "../components/Technologies";
import AINews from "../components/AINews";
import DigitalTwin from "../components/DigitalTwin";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Technologies />
      <Projects />
      <Services />
      <About />
      <AINews />
      <Contact />
      <DigitalTwin />
    </main>
  );
}
