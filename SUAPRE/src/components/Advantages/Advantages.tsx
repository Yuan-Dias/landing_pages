import { SectionTitle } from "../ui/SectionTitle";
import { IconCard } from "../ui/IconCard";
import { advantages } from "../../config/content";

export function Advantages() {
  return (
    <section id="vantagens" className="section advantages">
      <div className="container">
        <SectionTitle
          eyebrow="Resultados para a gestão"
          title="Vantagens do SUAPRE"
          description="Mais segurança para quem planeja, executa, acompanha e decide."
        />
        <div className="advantages-grid">
          {advantages.map(([Icon, title, text]) => (
            <IconCard key={title} icon={Icon} title={title} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
}
