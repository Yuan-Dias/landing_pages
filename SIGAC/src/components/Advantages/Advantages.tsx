import { CheckCircle2 } from "lucide-react";
import { advantages } from "../../config/content";

export function Advantages() {
  return (
    <section id="vantagens" className="section features">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Vantagens do SIGAC</span>

          <h2>Mais controle, celeridade e integração</h2>

          <p>
            Um conjunto de recursos pensado para a rotina real de
            secretarias e consórcios ambientais.
          </p>
        </div>

        <div className="module-pills" style={{ justifyContent: "center" }}>
          {advantages.map((item) => (
            <span key={item}>
              <CheckCircle2 size={14} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
