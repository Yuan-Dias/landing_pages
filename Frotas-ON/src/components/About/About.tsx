import { Check, CheckCircle2, Car, CalendarCheck, CircleDollarSign, Fuel, Wrench } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { IconBadge } from "../ui/IconBadge";

export function About() {
  return (
    <section id="sobre" className="section about-section">
      <div className="container about-grid" data-reveal>
        <div className="about-copy">
          <SectionTitle eyebrow="Gestão integrada" title="O que é o FrotasON?" align="left" />
          <p>O <strong>FrotasON Prefeitura</strong> é um sistema completo para gerenciamento de frotas públicas, desenvolvido para otimizar o controle operacional, financeiro e administrativo dos veículos e equipamentos de uma prefeitura.</p>
          <p>A plataforma integra o controle de utilização, abastecimento, despesas, manutenções e histórico da frota, contribuindo para decisões mais seguras, maior eficiência operacional e melhor acompanhamento dos recursos públicos.</p>
          <blockquote><CheckCircle2 />Toda a gestão da frota pública em um único sistema.</blockquote >
        </div >
        <div className="modules-panel">
          <div className="modules-orbit" aria-hidden="true"><span /><span /><span /></div >
          <div className="modules-header"><span>Módulos integrados</span><strong>Um sistema.<br />Toda a operação.</strong></div >
          <div className="module-list">
            {[
              [Car, "Veículos", "Cadastro e disponibilidade"],
              [CalendarCheck, "Agendamentos", "Solicitação e aprovação"],
              [CircleDollarSign, "Despesas", "Custos centralizados"],
              [Fuel, "Abastecimentos", "Limites e autorizações"],
              [Wrench, "Manutenções", "Prevenção e histórico"],
            ].map(([Icon, title, text]) => (
              <div className="module-row" key={title}>
                <IconBadge icon={Icon as any} />
                <div><strong>{title}</strong><small>{text}</small></div >
                <Check />
              </div >
            ))}
          </div >
        </div >
      </div >
    </section>
  );
}
