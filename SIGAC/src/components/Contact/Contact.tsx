import { CheckCircle2 } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contato" className="cta">
      <div className="container cta-grid">
        <div className="cta-copy">
          <span className="kicker">
            Para prefeituras e consórcios
          </span>

          <h2>
            Leve a gestão ambiental do seu município para o digital.
          </h2>

          <p>
            Conheça o SIGAC e veja como centralizar licenças, fiscalizações,
            multas e comunicação em uma única plataforma.
          </p>

          <ul className="cta-list">
            <li>
              <CheckCircle2 size={16} />
              Conheça os recursos aplicados à rotina do seu órgão
            </li>

            <li>
              <CheckCircle2 size={16} />
              Tire dúvidas com uma equipe especializada
            </li>

            <li>
              <CheckCircle2 size={16} />
              Descubra como ganhar celeridade nos trâmites
            </li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
