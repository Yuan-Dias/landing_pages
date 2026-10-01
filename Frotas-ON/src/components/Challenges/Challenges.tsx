import * as LucideIcons from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { challenges } from "../../config/content";

export function Challenges() {
  return (
    <section id="desafios" className="section challenges-section">
      <div className="container" data-reveal>
        <SectionTitle eyebrow="Desafios do município" title="Os desafios da gestão de frotas públicas" description="Problemas que o FrotasON resolve no dia a dia da sua prefeitura." />
        <div className="challenge-grid">
          {challenges.map(({ icon, title, text }, index) => {
            const Icon = LucideIcons[icon as keyof typeof LucideIcons] as any;
            return (
              <article className="challenge-card" key={title} style={{ "--delay": `${index * 60}ms` } as React.CSSProperties}>
                <span className="challenge-icon"><Icon /></span>
                <div><h3>{title}</h3><p>{text}</p></div >
              </article>
            );
          })}
        </div >
      </div >
    </section>
  );
}
