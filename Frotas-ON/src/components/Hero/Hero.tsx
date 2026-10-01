import { ArrowRight, ChevronRight, Landmark, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";
import { DashboardMockup } from "./DashboardMockup";
import { assets } from "../../config/assets";

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-motif hero-motif-one" aria-hidden="true" />
      <div className="hero-motif hero-motif-two" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy animate-fade-in">
          <span className="hero-kicker"><Landmark /> Tecnologia para a gestão pública municipal</span>
          <h1 className="hero-logo-title">
            <img src={assets.logo} alt="FrotasON" />
          </h1>
          <h2>Sistema de Gerenciamento de Frotas Públicas</h2>
          <p className="hero-lead">Toda a gestão da frota pública em um único sistema.</p>
          <p className="hero-detail">Veículos, agendamentos, despesas, abastecimentos e manutenções organizados para sua prefeitura.</p>
          <div className="hero-actions">
            <Button href="#contato" variant="light">Solicitar demonstração <ArrowRight /></Button>
            <Button href="#funcionalidades" variant="secondary">Conhecer funcionalidades <ChevronRight /></Button>
          </div >
          <div className="hero-trust"><ShieldCheck /><span>Informação organizada</span><i /><CheckCircle2 /><span>Decisões mais seguras</span></div >
        </div >
        <div className="hero-visual animate-fade-in"><DashboardMockup /></div>
      </div >
    </section>
  );
}
