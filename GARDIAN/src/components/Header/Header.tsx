import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand } from "@/components/UI/Brand";

const cx = (...values: Array<string | undefined | false>) =>
  values.filter(Boolean).join(" ");

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links: ReadonlyArray<readonly [string, string]> = [
    ["Desafios", "#desafios"],
    ["Sobre", "#sobre"],
    ["Funcionalidades", "#funcionalidades"],
    ["Vantagens", "#vantagens"],
    ["Contato", "#contato"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary-foreground/10 bg-primary/90 text-primary-foreground shadow-lg backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Brand inverse />

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="grid size-11 place-items-center rounded-md border border-primary-foreground/20 text-primary-foreground md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav
          id="main-navigation"
          aria-label="Navegação principal"
          className={cx(
            "absolute inset-x-4 top-[calc(100%-0.25rem)] rounded-lg border border-primary-foreground/15 bg-primary p-3 shadow-xl",
            "md:static md:flex md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0 md:shadow-none",
            menuOpen ? "block" : "hidden md:flex",
          )}
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-md px-3 py-3 text-sm font-semibold hover:bg-primary-foreground/10 hover:text-live md:px-0 md:py-2 md:hover:bg-transparent"
            >
              {label}
            </a>
          ))}
          <Button
            asChild
            size="default"
            className="mt-2 w-full bg-live text-primary hover:bg-live/90 md:mt-0 md:w-auto"
          >
            <a href="#contato" onClick={() => setMenuOpen(false)}>
              Solicitar demonstração
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
