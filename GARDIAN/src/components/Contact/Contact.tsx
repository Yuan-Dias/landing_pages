import { CheckCircle2 } from "lucide-react";
import { DemoForm } from "./DemoForm";

export function Contact() {
  return (
    <section id="contato" className="cta scroll-mt-24">
      <div className="container cta-grid">
        <div className="cta-copy">
          <span className="kicker">Demonstração personalizada</span>

          <h2>
            Pronto para proteger seu município com dados e prevenção?
          </h2>

          <p>Solicite uma demonstração e veja o Gardian em ação.</p>

          <ul className="cta-list">
            <li>
              <CheckCircle2 size={16} />
              Conheça os recursos aplicados à rotina da Defesa Civil
            </li>

            <li>
              <CheckCircle2 size={16} />
              Tire dúvidas com uma equipe especializada
            </li>

            <li>
              <CheckCircle2 size={16} />
              Descubra como ganhar agilidade na gestão de riscos
            </li>
          </ul>
        </div>

        <DemoForm />
      </div>
    </section>
  );
}
