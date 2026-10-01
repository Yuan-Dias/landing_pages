import { Mail, MapPin, ArrowRight, Landmark, Linkedin, Instagram, Facebook } from "lucide-react";
import { Brand } from "../ui/Brand";
import { Button } from "../ui/Button";
import { navItems } from "../../config/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand"><Brand inverse /><p>Gestão inteligente, eficiente e transparente para a frota do seu município.</p></div >
        <div><h3>Links rápidos</h3>{navItems.slice(0, 4).map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div >
        <div><h3>Contato</h3><a href="mailto:contato@frotason.com.br"><Mail /> contato@frotason.com.br</a><span><MapPin /> Atendimento em todo o Brasil</span><a href="#contato"><ArrowRight /> Solicitar contato</a></div >
        <div><h3>FrotasON</h3><div className="public-seal"><Landmark /><span><strong>Sistema para Prefeituras</strong>Tecnologia para a gestão pública</span></div ><div className="social-links"><a href="#inicio" aria-label="LinkedIn"><Linkedin /></a><a href="#inicio" aria-label="Instagram"><Instagram /></a><a href="#inicio" aria-label="Facebook"><Facebook /></a></div ></div >
      </div >
      <div className="container footer-bottom"><span>© 2026 FrotasON. Todos os direitos reservados.</span><span>Eficiência pública que se move.</span></div >
    </footer>
  );
}
