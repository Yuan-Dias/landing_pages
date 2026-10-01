import { SectionTitle } from "../ui/SectionTitle";
import { flowSteps } from "../../config/content";

export function Flow() {
  return (
    <section id="fluxo-linear" className="section flow-section">
      <div className="container">
        <SectionTitle
          eyebrow="Fluxo de funcionamento"
          title="Do planejamento ao almoxarifado, uma sequência rastreável."
          description="PCA, fase preparatória, licitação, PNCP, atas e contratos, financeiro e almoxarifado em uma jornada contínua."
        />
        <div className="flow-steps">
          {flowSteps.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
              {index < flowSteps.length - 1 && <i aria-hidden="true">→</i>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
