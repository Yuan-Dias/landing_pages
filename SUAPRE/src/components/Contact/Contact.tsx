import { CheckCircle2 } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contato" className="cta">
      <div className="container cta-grid">
        <div className="cta-copy">
          <span className="kicker">Uma gestão mais integrada começa agora</span>
          <h2>Leve mais controle para as contratações do seu município.</h2>
          <p>Conheça o SUAPRE e veja como conectar planejamento, processos, contratos e execução.</p>
          <ul className="cta-list">
            <li><CheckCircle2 size={16} /> Conheça os recursos aplicados à rotina do seu órgão</li>
            <li><CheckCircle2 size={16} /> Tire dúvidas com uma equipe especializada</li>
            <li><CheckCircle2 size={16} /> Descubra como ganhar celeridade nas contratações</li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
