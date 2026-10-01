import { Landmark, ChevronDown, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";
import { PrintSlot } from "../ui/PrintSlot";

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="kicker"><Landmark size={16} /> Gestão pública conectada</span>
          <h1>O ciclo das contratações públicas, <em>integrado.</em></h1>
          <p className="hero-lead">
            Do planejamento ao almoxarifado, o SUAPRE organiza processos, documentos, contratos e recursos em um único sistema.
          </p>
          <div className="hero-actions">
            <Button light href="#contato">Conheça o SUAPRE</Button>
            <a className="text-link" href="#funcionalidades">
              Ver funcionalidades <ChevronDown size={16} />
            </a>
          </div>
          <div className="hero-proof">
            <CheckCircle2 size={17} /> Mais controle, transparência e rastreabilidade para a gestão pública
          </div>
        </div>
        <PrintSlot
          label="VISÃO GERAL"
          title="Painel de contratações"
          src="/images/contratos_suapre.png"
        />
      </div>
    </section>
  );
}
