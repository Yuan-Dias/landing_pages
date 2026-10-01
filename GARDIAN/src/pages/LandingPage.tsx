import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Challenges } from "@/components/Challenges/Challenges";
import { About } from "@/components/About/About";
import { Features } from "@/components/Features/Features";
import { Profiles } from "@/components/Profiles/Profiles";
import { RiskMap } from "@/components/RiskMap/RiskMap";
import { Flow } from "@/components/Flow/Flow";
import { Benefits } from "@/components/Benefits/Benefits";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <Hero />
        <Challenges />
        <About />
        <Features />
        <Profiles />
        <RiskMap />
        <Flow />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
