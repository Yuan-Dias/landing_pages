import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, ShieldCheck } from "lucide-react";
import { Brand } from "@/components/UI/Brand";
import { CONTACT_EMAIL } from "@/config/assets";
import { footerLinks } from "@/config/content";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Brand inverse />

          <p className="mt-5 max-w-xs text-sm leading-6 text-primary-foreground/65">
            Monitoramento contínuo e visão integrada para municípios mais
            seguros.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-extrabold">Links rápidos</h2>

          <div className="mt-4 grid gap-3 text-sm text-primary-foreground/65">
            {footerLinks.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="hover:text-live"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-extrabold">Contato</h2>

          <div className="mt-4 space-y-3 text-sm text-primary-foreground/65">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-2 hover:text-live"
            >
              <Mail size={15} aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>

            <a
              href="#contato"
              className="flex items-center gap-2 hover:text-live"
            >
              <Phone size={15} aria-hidden="true" />
              Fale com nossa equipe
            </a>

            <p className="flex items-center gap-2">
              <MapPin size={15} aria-hidden="true" />
              Atendimento nacional
            </p>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-3 rounded-md border border-primary-foreground/15 p-3 text-xs font-bold">
            <ShieldCheck className="text-live" aria-hidden="true" />

            <span>
              Sistema para Prefeituras
              <br />
              Defesa Civil e Proteção
            </span>
          </div>

          <div className="mt-6 flex gap-3">
            {[
              [Linkedin, "LinkedIn"],
              [Instagram, "Instagram"],
              [Facebook, "Facebook"],
            ].map(([Icon, label]) => (
              <a
                key={label as string}
                href="#inicio"
                aria-label={label as string}
                className="grid size-9 place-items-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 px-5 py-6 text-center text-xs text-primary-foreground/55">
        © 2026 Gardian. Todos os direitos reservados.
      </div>
    </footer>
  );
}
