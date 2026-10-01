import { IconCard } from "../ui/IconCard";
import { onlineFeatures } from "../../config/content";

export function Features() {
  return (
    <section id="recursos" className="section">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Sistema 100% online</span>

          <h2>Informação viva, disponível a qualquer momento</h2>

          <p>
            Sem instalação, sem servidor local. Tudo o que a equipe
            precisa, na nuvem.
          </p>
        </div>

        <div className="feature-grid">
          {onlineFeatures.map(([Icon, title, text]) => (
            <IconCard key={title} icon={Icon} title={title} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
}
