import { useState, type FormEvent, type ReactNode } from "react";
import {
  AlertTriangle,
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
import { BRAND_LOGO_SRC, LOGO_ALT, MOCKUPS } from "@/config/assets";

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

const cx = (...values: Array<string | undefined | false>) => values.filter(Boolean).join(" ");

export function Brand({ inverse = false }: { inverse?: boolean }) {
  const [logoAvailable, setLogoAvailable] = useState(true);

  return (
    <a href="#inicio" className={cx("inline-flex items-center gap-2 text-lg font-extrabold", inverse ? "text-primary-foreground" : "text-primary")}>
      {logoAvailable ? (
        <img
          src={BRAND_LOGO_SRC}
          alt={LOGO_ALT}
          className="h-10 w-auto max-w-44 object-contain"
          onError={() => setLogoAvailable(false)}
        />
      ) : (
        <span className="grid size-9 place-items-center rounded-md bg-live text-primary" aria-label={LOGO_ALT}><ShieldCheck size={21} /></span>
      )}
    </a>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <nav id="main-navigation" className={cx("absolute inset-x-4 top-[calc(100%-0.25rem)] rounded-lg border border-primary-foreground/15 bg-primary p-3 shadow-xl md:static md:flex md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0 md:shadow-none", menuOpen ? "block" : "hidden md:flex")}>
          <a href="#desafios" className="block rounded-md px-3 py-3 text-sm font-semibold hover:bg-primary-foreground/10 hover:text-live md:px-0 md:py-2 md:hover:bg-transparent">Desafios</a>
          <a href="#sobre" className="block rounded-md px-3 py-3 text-sm font-semibold hover:bg-primary-foreground/10 hover:text-live md:px-0 md:py-2 md:hover:bg-transparent">Sobre</a>
          <a href="#funcionalidades" className="block rounded-md px-3 py-3 text-sm font-semibold hover:bg-primary-foreground/10 hover:text-live md:px-0 md:py-2 md:hover:bg-transparent">Funcionalidades</a>
          <a href="#vantagens" className="block rounded-md px-3 py-3 text-sm font-semibold hover:bg-primary-foreground/10 hover:text-live md:px-0 md:py-2 md:hover:bg-transparent">Vantagens</a>
          <a href="#contato" className="block rounded-md px-3 py-3 text-sm font-semibold hover:bg-primary-foreground/10 hover:text-live md:px-0 md:py-2 md:hover:bg-transparent">Contato</a>
          <Button asChild size="default" className="mt-2 w-full bg-live text-primary hover:bg-live/90 md:mt-0 md:w-auto"><a href="#contato" onClick={() => setMenuOpen(false)}>Solicitar demonstração</a></Button>
        </nav>
      </div>
    </header>
  );
}

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function SectionTitle({ eyebrow, title, description, align = "center" }: { eyebrow?: string; title: string; description?: string; align?: "left" | "center" }) {
  return (
    <div className={cx("mb-12", align === "left" ? "text-left" : "mx-auto max-w-3xl text-center")}>
      {eyebrow && <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-accent">{eyebrow}</p>}
      <h2 className="text-3xl font-extrabold leading-tight text-primary sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-7 text-muted-foreground">{description}</p>}
    </div>
  );
}

export function IconBadge({ icon: Icon, tone = "default" }: { icon: LucideIcon; tone?: "default" | "warning" | "live" }) {
  return <span className={cx("grid size-11 place-items-center rounded-md", tone === "warning" ? "bg-warning/20 text-warning" : tone === "live" ? "bg-live/20 text-accent" : "bg-soft text-accent")}><Icon size={21} /></span>;
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
        <div className="mb-6 flex items-center justify-between"><strong>Painel de monitoramento</strong><span className="flex items-center gap-2 text-xs font-bold text-stable"><span className="size-2 rounded-full bg-stable" /> Ao vivo</span></div>
        <div className="grid gap-3 sm:grid-cols-3"><Stat label="Zonas críticas" value="08" tone="critical" /><Stat label="Em atenção" value="17" tone="warning" /><Stat label="Estáveis" value="42" tone="stable" /></div>
        <div className="mt-5 h-32 rounded-md bg-soft p-4"><div className="grid h-full grid-cols-8 items-end gap-2">{[42, 66, 53, 78, 60, 88, 70, 95].map((height, index) => <span key={index} className="rounded-t bg-accent/70" style={{ height: `${height}%` }} />)}</div></div>
      </div>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone: "critical" | "warning" | "stable" }) {
  return <div className="rounded-md border border-border p-3"><span className={`block text-2xl font-extrabold text-${tone}`}>{value}</span><span className="text-xs text-muted-foreground">{label}</span></div>;
}

export function ProfileCard({ title, icon: Icon, items, dark = false }: { title: string; icon: LucideIcon; items: string[]; dark?: boolean }) {
  return <article className={cx("rounded-lg border p-7", dark ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card")}><div className="mb-5 flex items-center gap-3"><IconBadge icon={Icon} /><h3 className="text-xl font-extrabold">{title}</h3></div><ul className="space-y-3 text-sm"><>{items.map((item) => <li key={item} className="flex gap-2"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-live" />{item}</li>)}</></ul></article>;
}

export function MockupImage({ src, alt, fallback }: { src: string | null; alt: string; fallback: ReactNode }) {
  return src ? <img src={src} alt={alt} className="w-full rounded-lg" /> : <div role="img" aria-label={alt}>{fallback}</div>;
}

export function RiskZoneMap() {
  return <div className="grid aspect-[4/3] place-items-center overflow-hidden rounded-lg border border-border bg-[#dbeaf0] p-6"><div className="grid size-52 place-items-center rounded-[45%] border-8 border-critical/50 bg-stable/30 shadow-inner"><div className="size-24 rounded-full border-8 border-warning/70 bg-warning/30" /></div></div>;
}

export function WeatherWidget() {
  return <div className="flex items-center gap-3 rounded-md bg-soft p-4"><CloudRain className="text-accent" /><div><strong>18 mm</strong><p className="text-xs text-muted-foreground">Precipitação nas últimas 24h</p></div></div>;
}

export function FlowTimeline({ steps }: { steps: Array<{ icon: LucideIcon; title: string; text: string }> }) {
  return <div className="grid gap-6 md:grid-cols-5">{steps.map(({ icon: Icon, title, text }, index) => <div key={title} className="relative text-center"><span className="mx-auto mb-4 grid size-12 place-items-center rounded-full bg-primary text-live">{index + 1}</span><Icon className="mx-auto mb-3 text-accent" size={20} /><h3 className="font-extrabold text-primary">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div>;
}

export function DemoForm() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
  if (sent) return <p className="rounded-md bg-primary-foreground/10 p-5 font-bold">Recebemos seu contato. Nossa equipe falará com você em breve.</p>;
  return <form onSubmit={submit} className="mx-auto grid max-w-3xl gap-3 text-left sm:grid-cols-3"><input required aria-label="Nome" placeholder="Seu nome" className="h-12 px-4 text-primary focus:border-live focus:outline-none focus:ring-4 focus:ring-live/30" /><input required type="email" aria-label="E-mail" placeholder="Seu e-mail" className="h-12 px-4 text-primary focus:border-live focus:outline-none focus:ring-4 focus:ring-live/30" /><Button type="submit" size="lg" className="bg-live text-primary hover:bg-live/90">Solicitar contato</Button></form>;
}