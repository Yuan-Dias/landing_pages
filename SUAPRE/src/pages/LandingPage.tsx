import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Challenges } from "../components/Challenges/Challenges";
import { About } from "../components/About/About";
import { Features } from "../components/Features/Features";
import { Modules } from "../components/Modules/Modules";
import { Integration } from "../components/Integration/Integration";
import { Flow } from "../components/Flow/Flow";
import { Advantages } from "../components/Advantages/Advantages";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";

export default function LandingPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <Hero />
        <Challenges />
        <About />
        <Features />
        <Modules />
        <Integration />
        <Flow />
        <Advantages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
