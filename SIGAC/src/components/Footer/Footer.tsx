import { Landmark } from "lucide-react";
import { navItems, CONTACT_EMAIL } from "../../config/content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand">
            <img src="/images/icone_sigac.png" alt="SIGAC" />
          </div>

          <p>
            Sistema Integrado de Gestão Ambiental Compartilhada para
            prefeituras e consórcios.
          </p>
        </div>

        <div>
          <h4>Navegação</h4>

          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>

        <div>
          <h4>Contato</h4>

          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>

          <span>Atendimento a órgãos públicos</span>
        </div>

        <div>
          <h4>Conformidade</h4>

          <div className="footer-seal">
            <Landmark size={18} />

            <span>
              Integração com GeoBahia, MapBiomas e SIRGAS 2000
            </span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 SIGAC. Todos os direitos reservados.</span>

        <span>Gestão ambiental compartilhada.</span>
      </div>
    </footer>
  );
}
