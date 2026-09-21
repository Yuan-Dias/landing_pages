import {
  AlertTriangle, ArrowRight, BadgeCheck, Bot, CheckCircle2, ChevronRight,
  CloudRain, Database, Gauge, History, Layers3, Map, MapPin, Menu,
  Radio, Satellite, ShieldCheck, UserRound, UsersRound, Wind, X, Zap,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BRAND_LOGO_SRC, LOGO_ALT, MOCKUPS } from "@/config/assets";

/* -------------------------------------------------------------------------- */
/*  Mockup central — troca SVG por imagem real sem tocar na seção             */
/* -------------------------------------------------------------------------- */

export function MockupImage({
                              src,
                              alt,
                              fallback,
                              className = "",
                            }: {
  src: string | null;
  alt: string;
  fallback: ReactNode;
  className?: string;
}) {
  if (!src) return <>{fallback}</>;
  return (
      <div className={`relative aspect-[300/165] overflow-hidden rounded-lg ${className}`}>
        <img
            src={src}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
        />
      </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Brand / Logo                                                              */
/* -------------------------------------------------------------------------- */

export function Brand({
                        inverse = false,
                        className = "",
                      }: {
  inverse?: boolean;
  className?: string;
}) {
  return (
      <a
          href="#inicio"
          aria-label={`${LOGO_ALT} — início`}
          className={`inline-flex items-center gap-2.5 font-extrabold text-xl transition-opacity hover:opacity-90 ${
              inverse ? "text-primary-foreground" : "text-primary"
          } ${className}`}
      >
        {BRAND_LOGO_SRC ? (
            <img
                src={BRAND_LOGO_SRC}
                alt={LOGO_ALT}
                className="h-9 w-auto"
                decoding="async"
            />
        ) : (
            <>
          <span className="relative grid size-9 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground">
            <ShieldCheck size={21} aria-hidden="true" />
            <span
                className="absolute right-1 top-1 size-1.5 animate-pulse rounded-full bg-live"
                aria-hidden="true"
            />
          </span>
              <span className="leading-none">{LOGO_ALT}</span>
            </>
        )}
      </a>
  );
}

/* -------------------------------------------------------------------------- */
/*  Átomos de UI                                                              */
/* -------------------------------------------------------------------------- */

export function IconBadge({
                            icon: Icon,
                            tone = "accent",
                          }: {
  icon: LucideIcon;
  tone?: "accent" | "warning" | "live";
}) {
  const tones = {
    accent: "bg-soft text-accent",
    warning: "bg-warning/15 text-warning",
    live: "bg-live/15 text-secondary",
  } as const;
  return (
      <span
          className={`grid size-11 shrink-0 place-items-center rounded-full ${tones[tone]}`}
          aria-hidden="true"
      >
      <Icon size={21} />
    </span>
  );
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
  align?: "center" | "left";
}) {
  return (
      <div
          className={`mb-12 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
      >
        {eyebrow && (
            <p className="mb-3 text-xs font-extrabold uppercase tracking-wide text-accent">
              {eyebrow}
            </p>
        )}
        <h2 className="text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
          {title}
        </h2>
        {description && (
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              {description}
            </p>
        )}
      </div>
  );
}

export function Reveal({
                         children,
                         className = "",
                       }: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      node.classList.add("is-visible");
      return;
    }

    const io = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            node.classList.add("is-visible");
            io.disconnect();
          }
        },
        { threshold: 0.12 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
      <div ref={ref} className={`reveal ${className}`}>
        {children}
      </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Mapa de zonas de risco (placeholder SVG)                                  */
/* -------------------------------------------------------------------------- */

const streets = [
  "M18 70 C60 48 80 58 125 25 S210 34 258 10",
  "M20 135 C70 110 98 124 145 94 S230 86 278 56",
  "M55 10 C65 60 40 96 80 150",
  "M186 8 C170 50 206 93 185 154",
];

export function RiskZoneMap({ compact = false }: { compact?: boolean }) {
  return (
      <div
          className={`relative overflow-hidden rounded-lg border border-primary/10 bg-soft shadow-soft ${
              compact ? "h-72" : "h-[390px]"
          }`}
          aria-label="Mapa ilustrativo das zonas de risco"
      >
        <div className="radar-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <svg
            viewBox="0 0 300 165"
            className="absolute inset-0 h-full w-full"
            role="img"
            aria-label="Mapa municipal com áreas monitoradas"
        >
          <path
              d="M38 28 L105 12 152 34 234 20 277 65 254 134 186 150 129 133 66 151 24 105Z"
              fill="var(--soft)"
              stroke="var(--secondary)"
              strokeWidth="2"
          />
          {streets.map((d, i) => (
              <path
                  key={i}
                  d={d}
                  fill="none"
                  stroke="var(--secondary)"
                  strokeOpacity=".24"
                  strokeWidth="2"
              />
          ))}
          <circle cx="82" cy="83" r="8" fill="var(--critical)" />
          <circle cx="82" cy="83" r="14" fill="none" stroke="var(--critical)" opacity=".35">
            <animate attributeName="r" values="9;20" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values=".6;0" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="190" cy="67" r="8" fill="var(--warning)" />
          <circle cx="218" cy="116" r="8" fill="var(--stable)" />
          <circle cx="121" cy="119" r="6" fill="var(--warning)" />
        </svg>

        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-md bg-card/95 px-3 py-2 text-xs font-bold text-primary shadow-soft">
          <Radio size={14} className="text-critical" aria-hidden="true" />
          <span className="size-2 animate-pulse rounded-full bg-critical" aria-hidden="true" />
          Monitoramento ativo
        </div>

        {!compact && (
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
              <WeatherWidget icon={Gauge} value="26°" label="Temperatura" />
              <WeatherWidget icon={CloudRain} value="18 mm" label="Chuva acumulada" />
              <WeatherWidget icon={Wind} value="12 km/h" label="Vento" />
            </div>
        )}
      </div>
  );
}

export function WeatherWidget({
                                icon: Icon,
                                value,
                                label,
                              }: {
  icon: LucideIcon;
  value: string;
  label: string;
}) {
  return (
      <div className="rounded-md border border-border bg-card/95 p-3 shadow-soft">
        <Icon size={16} className="mb-1 text-secondary" aria-hidden="true" />
        <strong className="block text-sm text-primary">{value}</strong>
        <span className="block truncate text-[10px] text-muted-foreground">{label}</span>
      </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Header                                                                    */
/* -------------------------------------------------------------------------- */

const NAV_LINKS: ReadonlyArray<readonly [string, string]> = [
  ["Desafios", "desafios"],
  ["Sobre", "sobre"],
  ["Funcionalidades", "funcionalidades"],
  ["Perfis", "perfis"],
  ["Vantagens", "vantagens"],
  ["Contato", "contato"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Brand />

          <nav
              className="hidden items-center gap-6 lg:flex"
              aria-label="Navegação principal"
          >
            {NAV_LINKS.map(([label, id]) => (
                <a
                    key={id}
                    href={`#${id}`}
                    className="text-sm font-semibold text-muted-foreground transition-colors hover:text-accent"
                >
                  {label}
                </a>
            ))}
          </nav>

          <Button asChild className="hidden h-11 lg:inline-flex">
            <a href="#contato">Solicitar demonstração</a>
          </Button>

          <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>

        {open && (
            <nav
                id="mobile-nav"
                className="border-t bg-background px-5 py-5 lg:hidden"
                aria-label="Navegação móvel"
            >
              {NAV_LINKS.map(([label, id]) => (
                  <a
                      key={id}
                      href={`#${id}`}
                      onClick={() => setOpen(false)}
                      className="block border-b border-border py-3 font-semibold text-primary"
                  >
                    {label}
                  </a>
              ))}
              <Button asChild className="mt-4 w-full">
                <a href="#contato" onClick={() => setOpen(false)}>
                  Solicitar demonstração
                </a>
              </Button>
            </nav>
        )}
      </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero dashboard                                                            */
/* -------------------------------------------------------------------------- */

export function HeroDashboard() {
  return (
      <div className="relative mx-auto w-full max-w-xl">
        <div
            className="pointer-events-none absolute -inset-4 rounded-xl border border-primary-foreground/15"
            aria-hidden="true"
        />

        <div className="relative overflow-hidden rounded-lg border border-primary-foreground/20 bg-background/95 p-3 shadow-2xl sm:p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-xs font-bold text-primary">
                Central de Monitoramento
              </p>
              <p className="truncate text-[10px] text-muted-foreground">
                Visão municipal em tempo real
              </p>
            </div>
            <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-stable/15 px-2.5 py-1 text-[10px] font-bold text-stable">
            <span
                className="size-1.5 animate-pulse rounded-full bg-stable"
                aria-hidden="true"
            />
            AO VIVO
          </span>
          </div>

          <MockupImage
              src={MOCKUPS.dashboard}
              alt="Dashboard do Gardian com mapa de zonas de risco em tempo real"
              fallback={<RiskZoneMap />}
          />
        </div>

        <div className="absolute -bottom-5 left-2 flex items-center gap-3 rounded-md border border-border bg-card p-3 shadow-lift sm:-left-7">
        <span className="grid size-9 place-items-center rounded-full bg-live/15 text-secondary">
          <Bot size={19} aria-hidden="true" />
        </span>
          <div>
            <p className="text-[10px] text-muted-foreground">IA analisando ocorrência</p>
            <div className="mt-1 flex gap-1" aria-hidden="true">
              <span className="size-1.5 animate-bounce rounded-full bg-accent" />
              <span className="size-1.5 animate-bounce rounded-full bg-accent [animation-delay:150ms]" />
              <span className="size-1.5 animate-bounce rounded-full bg-accent [animation-delay:300ms]" />
            </div>
          </div>
        </div>
      </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Cards e fluxo                                                             */
/* -------------------------------------------------------------------------- */

export function ProfileCard({
                              dark,
                              title,
                              icon: Icon,
                              items,
                            }: {
  dark?: boolean;
  title: string;
  icon: LucideIcon;
  items: string[];
}) {
  return (
      <article
          className={`h-full rounded-lg border p-7 shadow-soft sm:p-9 ${
              dark
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-soft text-foreground"
          }`}
      >
      <span
          className={`mb-6 grid size-12 place-items-center rounded-full ${
              dark ? "bg-primary-foreground/10" : "bg-background text-accent"
          }`}
          aria-hidden="true"
      >
        <Icon />
      </span>
        <h3
            className={`text-2xl font-extrabold ${
                dark ? "text-primary-foreground" : "text-primary"
            }`}
        >
          {title}
        </h3>
        <ul className="mt-6 space-y-4">
          {items.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6">
                <CheckCircle2
                    size={18}
                    className={`mt-0.5 shrink-0 ${dark ? "text-live" : "text-accent"}`}
                    aria-hidden="true"
                />
                {item}
              </li>
          ))}
        </ul>
      </article>
  );
}

export function FlowTimeline({
                               steps,
                             }: {
  steps: { icon: LucideIcon; title: string; text: string }[];
}) {
  return (
      <div className="relative grid gap-5 lg:grid-cols-5">
        <div
            className="absolute left-[10%] right-[10%] top-8 hidden border-t-2 border-dashed border-live lg:block"
            aria-hidden="true"
        />
        {steps.map((step, i) => (
            <article
                key={step.title}
                className="relative flex gap-5 rounded-lg border border-border bg-card p-5 shadow-soft lg:block lg:border-0 lg:bg-transparent lg:p-0 lg:text-center lg:shadow-none"
            >
          <span className="relative z-10 grid size-16 shrink-0 place-items-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-soft">
            <step.icon size={23} aria-hidden="true" />
            <small
                className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-live text-[10px] font-extrabold text-primary"
                aria-hidden="true"
            >
              {i + 1}
            </small>
          </span>
              <div className="lg:mt-5">
                <h3 className="font-extrabold text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
              </div>
            </article>
        ))}
      </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Formulário de demonstração                                                */
/* -------------------------------------------------------------------------- */

export function DemoForm() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
      <form
          onSubmit={submit}
          className="grid gap-3 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-5 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="Formulário de solicitação de demonstração"
      >
        <label className="sr-only" htmlFor="nome">
          Nome
        </label>
        <Input
            id="nome"
            required
            autoComplete="name"
            placeholder="Nome completo"
            className="h-12 border-primary-foreground/30 bg-background"
        />

        <label className="sr-only" htmlFor="email">
          E-mail institucional
        </label>
        <Input
            id="email"
            type="email"
            required
            autoComplete="email"
            placeholder="E-mail institucional"
            className="h-12 border-primary-foreground/30 bg-background"
        />

        <label className="sr-only" htmlFor="orgao">
          Cidade ou órgão
        </label>
        <Input
            id="orgao"
            required
            autoComplete="organization"
            placeholder="Cidade ou órgão"
            className="h-12 border-primary-foreground/30 bg-background"
        />

        <Button type="submit" className="h-12 bg-live text-primary hover:bg-live/90">
          {sent ? (
              <>
                <BadgeCheck /> Solicitação enviada
              </>
          ) : (
              <>
                Solicitar demonstração <ArrowRight />
              </>
          )}
        </Button>

        {sent && (
            <p
                role="status"
                className="text-sm text-primary-foreground sm:col-span-2 lg:col-span-4"
            >
              Recebemos seu interesse. Nossa equipe entrará em contato.
            </p>
        )}
      </form>
  );
}

/* -------------------------------------------------------------------------- */
/*  Re-export de ícones usados fora do módulo                                 */
/* -------------------------------------------------------------------------- */

export const icons = {
  AlertTriangle,
  Database,
  Map,
  Layers3,
  History,
  Zap,
  UsersRound,
  MapPin,
  Bot,
  CloudRain,
  Satellite,
  Gauge,
  Radio,
  UserRound,
  BadgeCheck,
  ChevronRight,
};