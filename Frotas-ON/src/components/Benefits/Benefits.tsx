import * as LucideIcons from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { IconBadge } from "../ui/IconBadge";
import { benefits } from "../../config/content";

export function Benefits() {
  return (
    <section id="vantagens" className="section benefits-section">
      <div className="container" data-reveal>
        <div className="benefits-heading">
          <SectionTitle eyebrow="Resultados para a gestão" title="Vantagens do FrotasON" description="Mais eficiência na operação e mais confiança para cuidar do patrimônio do município." align="left" />
        </div >
        <div className="benefits-list">
          {benefits.map(({ icon, title, text }, index) => {
            const Icon = LucideIcons[icon as keyof typeof LucideIcons] as any;
            return (
              <article className="benefit-item" key={title}>
                <span className="benefit-index">{String(index + 1).padStart(2, "0")}</span>
                <IconBadge icon={Icon} />
                <div><h3>{title}</h3><p>{text}</p></div >
                <CheckCircle2 className="benefit-check" />
              </article>
            );
          })}
        </div >
      </div >
    </section>
  );
}
