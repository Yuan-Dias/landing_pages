import { Landmark, ChevronDown, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="tag">
            <Landmark size={14} />
            Gestão ambiental compartilhada
          </span>

          <h1>
            Todo o licenciamento ambiental, da solicitação do cidadão à{" "}
            <em>emissão da licença.</em>
          </h1>

          <p className="hero-lead">
            O SIGAC organiza a triagem, os documentos e a comunicação em
            tempo real entre o requerente e a secretaria — com suporte à
            fiscalização, registro de multas e funcionamento em conjunto
            do consórcio.
          </p>

          <div className="hero-actions">
            <Button href="#contato">Solicitar demonstração</Button>

            <a className="text-link" href="#sobre">
              Conhecer o SIGAC
              <ChevronDown size={16} />
            </a>
          </div>

          <p className="hero-proof">
            <CheckCircle2 size={16} />
            Integrado ao GeoBahia, MapBiomas e SIRGAS 2000
          </p>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-frame">
            <div className="hero-visual-bar">
              <span />
              <span />
              <span />
            </div>

            <img
              src="/images/dashboard_sigac.png"
              alt="Painel do SIGAC com dashboards, mapa de processos e indicadores ambientais"
              loading="eager"
            />
          </div>

          <span className="hero-visual-caption">Painel do SIGAC</span>
        </div>
      </div>
    </section>
  );
}
