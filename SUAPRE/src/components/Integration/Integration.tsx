import { SectionTitle } from "../ui/SectionTitle";
import { modules } from "../../config/content";

export function Integration() {
  return (
    <section id="integracao" className="section integration">
      <div className="container">
        <SectionTitle
          eyebrow="Integração"
          title="Os módulos trabalham conectados."
          description="Planejamento, licitação, PNCP, atas, contratos, financeiro e almoxarifado compartilham contexto em uma visão única."
        />
        <div className="integration-map">
          <div className="integration-map-brand">
            <img src="/images/logo_suapre_icone_branco.png" alt="SUAPRE" />
            <span>SUAPRE</span>
          </div>
          {modules.map(([num, label]) => (
            <div key={num} className="integration-module">
              <b>{num}</b>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
