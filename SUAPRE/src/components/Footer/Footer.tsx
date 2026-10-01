import { ShieldCheck } from "lucide-react";
import { navItems, CONTACT_EMAIL } from "../../config/content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/images/logo_suapre_branco.png" alt="SUAPRE" />
          <p>Sistema Integrado de Gestão Pública para planejamento, contratações, contratos e execução.</p>
        </div>
        <div>
          <h3>Navegação</h3>
          {navItems.slice(0, 4).map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>
        <div>
          <h3>Contato</h3>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <span>Atendimento para órgãos públicos</span>
          <a href="#contato">Solicitar demonstração</a>
        </div>
        <div>
          <h3>Conformidade</h3>
          <div className="footer-seal">
            <ShieldCheck size={19} />
            <span><strong>Gestão pública</strong>Transparência e rastreabilidade</span>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 SUAPRE. Todos os direitos reservados.</span>
        <span>Contratações públicas conectadas.</span>
      </div>
    </footer>
  );
}
