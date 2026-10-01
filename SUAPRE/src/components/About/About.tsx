import { Check } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { PrintSlot } from "../ui/PrintSlot";

export function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container about-grid">
        <div>
          <SectionTitle
            left
            eyebrow="Uma visão única"
            title="O que é o SUAPRE?"
            description="Todo o ciclo das contratações públicas em um único sistema."
          />
          <p className="body-copy">
            O SUAPRE conecta planejamento, licitação, contratos, financeiro e almoxarifado em um fluxo contínuo.
            Cada área trabalha com informação atualizada, histórico preservado e processos acompanhados de ponta a ponta.
          </p>
          <div className="module-pills">
            {["Planejamento", "Licitação", "Contratos", "Financeiro", "Almoxarifado"].map((item) => (
              <span key={item}><Check size={14} />{item}</span>
            ))}
          </div>
        </div>
        <PrintSlot
          label="MÓDULOS INTEGRADOS"
          title="Operação conectada"
          src="/images/relatorios_suapre.png"
        />
      </div>
    </section>
  );
}
