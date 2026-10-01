import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Challenges } from "../components/Challenges/Challenges";
import { About } from "../components/About/About";
import { Advantages } from "../components/Advantages/Advantages";
import { Features } from "../components/Features/Features";
import { Messaging } from "../components/Messaging/Messaging";
import { MobileApp } from "../components/MobileApp/MobileApp";
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
        <Advantages />
        <Features />
        <Messaging />
        <MobileApp />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
