import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Brand } from "../ui/Brand";
import { Button } from "../ui/Button";
import { navItems } from "../../config/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <Button href="#contato" className="header-cta">Solicitar demonstração</Button>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} type="button">
          {open ? <X /> : <Menu />}
        </button>
      </div >
      <nav className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Navegação móvel">
        {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <Button href="#contato" onClick={() => setOpen(false)}>Solicitar demonstração</Button>
      </nav>
    </header>
  );
}
