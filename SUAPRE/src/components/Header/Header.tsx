import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { navItems } from "../../config/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="SUAPRE início">
          <img src="/images/logo_suapre_azul.png" alt="SUAPRE" />
        </a>
        <nav className="desktop-nav">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <Button>Solicitar demonstração</Button>
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Navegação móvel">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <Button onClick={() => setOpen(false)}>Solicitar demonstração</Button>
        </nav>
      )}
    </header>
  );
}
