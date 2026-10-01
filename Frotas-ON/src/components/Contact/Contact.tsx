import { Check } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contato" className="cta-section">
      <div className="container cta-grid">
        <div className="cta-copy">
          <span className="kicker">Demonstração personalizada</span>
          <h2>Pronto para transformar a gestão da frota pública?</h2>
          <p>Solicite uma demonstração e veja o FrotasON em ação.</p>
          <ul className="cta-list">
            <li><Check size={16} /> Conheça os recursos aplicados à rotina do seu município</li>
            <li><Check size={16} /> Tire dúvidas com uma equipe especializada</li>
            <li><Check size={16} /> Descubra como ganhar controle e eficiência</li>
          </ul >
        </div >
        <ContactForm />
      </div >
    </section>
  );
}
