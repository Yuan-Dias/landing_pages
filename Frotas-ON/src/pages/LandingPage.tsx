import { useEffect } from "react";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Challenges } from "../components/Challenges/Challenges";
import { About } from "../components/About/About";
import { Features } from "../components/Features/Features";
import { Benefits } from "../components/Benefits/Benefits";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";

export default function LandingPage() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <Header />
      <main>
        <Hero />
        <Challenges />
        <About />
        <Features />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div >
  );
}
