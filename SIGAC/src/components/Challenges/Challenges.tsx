import { IconCard } from "../ui/IconCard";
import { challenges } from "../../config/content";

export function Challenges() {
  return (
    <section id="desafios" className="section features">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Como surgiu a necessidade</span>

          <h2>Um cenário que pedia mudança</h2>

          <p>
            A gestão ambiental pública esbarrava em processos dispersos,
            falta de indicadores e burocracia em papel. O SIGAC nasceu
            para resolver isso.
          </p>
        </div>

        <div className="feature-grid">
          {challenges.map(([Icon, title, text]) => (
            <IconCard key={title} icon={Icon} title={title} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
}
