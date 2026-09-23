import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Bot,
  CheckCircle2,
  ChevronRight,
  CloudRain,
  Gauge,
  History,
  Layers3,
  Map,
  MapPin,
  Menu,
  Satellite,
  ShieldCheck,
  UserRound,
  UsersRound,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BRAND_LOGO_SRC, LOGO_ALT, MOCKUPS, WHATSAPP_NUMBER } from "@/config/assets";

export const icons = {
  AlertTriangle,
  Bot,
  ChevronRight,
  CloudRain,
  Gauge,
  History,
  Layers3,
  Map,
  MapPin,
  Satellite,
  ShieldCheck,
  UserRound,
  UsersRound,
  Zap,
};

const cx = (...values: Array<string | undefined | false>) =>
  values.filter(Boolean).join(" ");

export function Brand({ inverse = false }: { inverse?: boolean }) {
  const [logoFailed, setLogoFailed] = useState(false);
  const showLogo = Boolean(BRAND_LOGO_SRC) && !logoFailed;

  return (
    <a
      href="#inicio"
      aria-label={`${LOGO_ALT} — início`}
      className={cx(
        "inline-flex items-center gap-2 text-lg font-extrabold transition-opacity hover:opacity-90",
        inverse ? "text-primary-foreground" : "text-primary",
      )}
    >
      {showLogo ? (
        <img
          src={BRAND_LOGO_SRC as string}
          alt={LOGO_ALT}
          className="h-10 w-auto max-w-44 object-contain"
          onError={() => setLogoFailed(true)}
        />
      ) : (
        <span
          className="grid size-9 place-items-center rounded-md bg-live text-primary"
          aria-hidden="true"
        >
          <ShieldCheck size={21} />
        </span>
      )}
      {!showLogo && <span className="leading-none">{LOGO_ALT}</span>}
    </a>
  );
}

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

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cx("mb-12", align === "left" ? "text-left" : "mx-auto max-w-3xl text-center")}>
      {eyebrow && (
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-extrabold leading-tight text-primary sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-7 text-muted-foreground">{description}</p>}
    </div>
  );
}

export function IconBadge({
  icon: Icon,
  tone = "default",
}: {
  icon: LucideIcon;
  tone?: "default" | "warning" | "live";
}) {
  const toneClass =
    tone === "warning"
      ? "bg-warning/20 text-warning"
      : tone === "live"
        ? "bg-live/20 text-accent"
        : "bg-soft text-accent";

  return (
    <span className={cx("grid size-11 shrink-0 place-items-center rounded-md", toneClass)} aria-hidden="true">
      <Icon size={21} />
    </span>
  );
}

export function HeroDashboard() {
  if (MOCKUPS.dashboard) {
    return (
      <div className="overflow-hidden rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-2 shadow-lift backdrop-blur sm:p-4">
        <img
          src={MOCKUPS.dashboard}
          alt="Painel de monitoramento do Gardian"
          className="block h-auto w-full rounded-xl object-cover"
        />
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-2 shadow-lift backdrop-blur sm:p-4">
      <div className="rounded-xl bg-background p-4 text-primary shadow-soft sm:p-5">
        <div className="mb-6 flex items-center justify-between">
          <strong>Painel de monitoramento</strong>
          <span className="flex items-center gap-2 text-xs font-bold text-stable">
            <span className="size-2 rounded-full bg-stable" aria-hidden="true" />
            Ao vivo
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <Stat label="Zonas críticas" value="08" tone="critical" />
          <Stat label="Em atenção" value="17" tone="warning" />
          <Stat label="Estáveis" value="42" tone="stable" />
        </div>
        <div className="mt-5 h-32 rounded-md bg-soft p-4">
          <div className="grid h-full grid-cols-8 items-end gap-2">
            {[42, 66, 53, 78, 60, 88, 70, 95].map((height, index) => (
              <span
                key={index}
                className="rounded-t bg-accent/70"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "critical" | "warning" | "stable";
}) {
  const toneClass = {
    critical: "text-critical",
    warning: "text-warning",
    stable: "text-stable",
  }[tone];

  return (
    <div className="rounded-md border border-border p-3">
      <span className={cx("block text-2xl font-extrabold", toneClass)}>{value}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

export function ProfileCard({
  title,
  icon: Icon,
  items,
  dark = false,
}: {
  title: string;
  icon: LucideIcon;
  items: string[];
  dark?: boolean;
}) {
  return (
    <article
      className={cx(
        "rounded-lg border p-7 shadow-soft",
        dark ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card",
      )}
    >
      <div className="mb-5 flex items-center gap-3">
        <IconBadge icon={Icon} />
        <h3 className="text-xl font-extrabold">{title}</h3>
      </div>
      <ul className="space-y-3 text-sm">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <CheckCircle2
              size={17}
              className={cx("mt-0.5 shrink-0", dark ? "text-live" : "text-accent")}
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function MockupImage({
  src,
  alt,
  fallback,
}: {
  src: string | null;
  alt: string;
  fallback: ReactNode;
}) {
  return src ? (
    <img src={src} alt={alt} className="w-full rounded-lg" loading="lazy" decoding="async" />
  ) : (
    <div role="img" aria-label={alt}>
      {fallback}
    </div>
  );
}

export function RiskZoneMap() {
  return (
    <div className="grid aspect-[4/3] place-items-center overflow-hidden rounded-lg border border-border bg-[#dbeaf0] p-6">
      <div className="grid size-52 place-items-center rounded-[45%] border-8 border-critical/50 bg-stable/30 shadow-inner">
        <div className="size-24 rounded-full border-8 border-warning/70 bg-warning/30" />
      </div>
    </div>
  );
}

export function WeatherWidget() {
  return (
    <div className="flex items-center gap-3 rounded-md bg-soft p-4">
      <CloudRain className="text-accent" aria-hidden="true" />
      <div>
        <strong>18 mm</strong>
        <p className="text-xs text-muted-foreground">Precipitação nas últimas 24h</p>
      </div>
    </div>
  );
}

export function FlowTimeline({
  steps,
}: {
  steps: Array<{ icon: LucideIcon; title: string; text: string }>;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-5">
      {steps.map(({ icon: Icon, title, text }, index) => (
        <div key={title} className="relative text-center">
          <span className="mx-auto mb-4 grid size-12 place-items-center rounded-full bg-primary text-live">
            {index + 1}
          </span>
          <Icon className="mx-auto mb-3 text-accent" size={20} aria-hidden="true" />
          <h3 className="font-extrabold text-primary">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
        </div>
      ))}
    </div>
  );
}

export function DemoForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: "", email: "", orgao: "" });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message =
      `Olá! Gostaria de solicitar uma demonstração do Gardian.\n\n` +
      `*Nome:* ${form.nome}\n` +
      `*E-mail:* ${form.email}\n` +
      `*Cidade/Órgão:* ${form.orgao}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  if (sent) {
    return (
      <div
        role="status"
        className="mx-auto flex max-w-2xl flex-col items-center gap-3 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-6 text-primary-foreground"
      >
        <BadgeCheck className="text-live" size={32} aria-hidden="true" />
        <strong className="text-lg font-extrabold">Solicitação encaminhada!</strong>
        <p className="text-center text-sm text-primary-foreground/80">
          Abrimos o WhatsApp com sua mensagem preenchida. Se a janela não abriu,
          verifique o bloqueador de pop-ups e tente novamente.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-3 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-5 text-left sm:grid-cols-2 lg:grid-cols-4"
      aria-label="Formulário de solicitação de demonstração"
    >
      <label className="sr-only" htmlFor="nome">
        Nome
      </label>
      <Input
        id="nome"
        name="nome"
        required
        autoComplete="name"
        placeholder="Nome completo"
        value={form.nome}
        onChange={handleChange}
        className="h-12 border-primary-foreground/30 bg-background"
      />

      <label className="sr-only" htmlFor="email">
        E-mail institucional
      </label>
      <Input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="E-mail institucional"
        value={form.email}
        onChange={handleChange}
        className="h-12 border-primary-foreground/30 bg-background"
      />

      <label className="sr-only" htmlFor="orgao">
        Cidade ou órgão
      </label>
      <Input
        id="orgao"
        name="orgao"
        required
        autoComplete="organization"
        placeholder="Cidade ou órgão"
        value={form.orgao}
        onChange={handleChange}
        className="h-12 border-primary-foreground/30 bg-background"
      />

      <Button
        type="submit"
        className="h-12 bg-live text-primary hover:bg-live/90"
        aria-label="Enviar solicitação pelo WhatsApp"
      >
        Enviar pelo WhatsApp <ArrowRight aria-hidden="true" />
      </Button>

      <p className="text-xs text-primary-foreground/70 sm:col-span-2 lg:col-span-4">
        Ao enviar, você será redirecionado ao WhatsApp com a mensagem preenchida.
      </p>
    </form>
  );
}