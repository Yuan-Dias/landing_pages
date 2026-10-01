import { SectionTitle } from "../ui/SectionTitle";
import { IconCard } from "../ui/IconCard";
import { features } from "../../config/content";

export function Features() {
  return (
    <section id="funcionalidades" className="section features">
      <div className="container">
        <SectionTitle
          eyebrow="Recursos essenciais"
          title="Funcionalidades do SUAPRE"
          description="Ferramentas para simplificar a rotina, fortalecer o controle e dar visibilidade a cada etapa."
        />
        <div className="feature-grid">
          {features.map(([Icon, title]) => (
            <IconCard key={title} icon={Icon} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
}
