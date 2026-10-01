import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { navItems } from "../../config/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="SIGAC início">
          <img src="/images/icone_sigac.png" alt="SIGAC" />
        </a>

        <nav className="nav" aria-label="Navegação principal">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}

          <Button variant="outline" href="#contato">
            Falar com a equipe
          </Button>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          type="button"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Navegação móvel">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}

          <Button
            variant="outline"
            href="#contato"
            onClick={() => setOpen(false)}
          >
            Falar com a equipe
          </Button>
        </nav>
      )}
    </header>
  );
}
