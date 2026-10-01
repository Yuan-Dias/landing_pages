import * as LucideIcons from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { IconBadge } from "../ui/IconBadge";
import { features } from "../../config/content";

export function Features() {
  return (
    <section id="funcionalidades" className="section features-section">
      <div className="container" data-reveal>
        <SectionTitle eyebrow="Recursos essenciais" title="Funcionalidades do FrotasON" description="Ferramentas pensadas para simplificar a rotina, fortalecer o controle e melhorar o uso dos recursos públicos." />
        <div className="features-grid">
          {features.map(({ icon, title, text }, index) => {
            const Icon = LucideIcons[icon as keyof typeof LucideIcons] as any;
            return (
              <article className={`feature-card ${index === 6 ? "feature-card-wide" : ""}`} key={title}>
                <IconBadge icon={Icon} />
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="feature-number">0{index + 1}</span>
              </article>
            );
          })}
        </div >
      </div >
    </section>
  );
}
