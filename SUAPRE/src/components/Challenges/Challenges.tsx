import { SectionTitle } from "../ui/SectionTitle";
import { IconCard } from "../ui/IconCard";
import { challenges } from "../../config/content";

export function Challenges() {
  return (
    <section id="desafios" className="section challenges">
      <div className="container">
        <SectionTitle
          eyebrow="O cenário atual"
          title="Desafios das contratações públicas"
          description="Quando cada etapa funciona isoladamente, a gestão perde tempo, visibilidade e segurança."
        />
        <div className="challenge-grid">
          {challenges.map(([Icon, title, text]) => (
            <IconCard key={title} icon={Icon} title={title} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
}
