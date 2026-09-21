import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown, BarChart3, BriefcaseBusiness, CheckCircle2, CloudRain, Facebook,
  Gauge, Instagram, Linkedin, Mail, MapPin, Phone, Radio, ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Brand, DemoForm, FlowTimeline, Header, HeroDashboard, IconBadge,
  MockupImage, ProfileCard, Reveal, RiskZoneMap, SectionTitle, WeatherWidget, icons,
} from "@/components/gardian";
import { MOCKUPS, OG_IMAGE } from "@/config/assets";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gardian — Monitoramento e Gestão de Riscos Municipais" },
      {
        name: "description",
        content:
            "Sistema integrado para monitoramento climático, gestão de zonas de risco e prevenção de desastres municipais.",
      },
      { property: "og:title", content: "Gardian — Gestão de Riscos Municipais" },
      {
        property: "og:description",
        content: "Uma visão integrada do território para agir antes do desastre.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Gardian",
          applicationCategory: "GovernmentApplication",
          operatingSystem: "Web",
          description: "Sistema de Monitoramento e Gestão de Riscos Municipais",
        }),
      },
    ],
  }),
  component: Index,
});

/* -------------------------------------------------------------------------- */
/*  Dados das seções                                                          */
/* -------------------------------------------------------------------------- */

const challenges = [
  [icons.CloudRain, "Dados meteorológicos e geológicos dispersos", "Informações críticas espalhadas dificultam uma leitura precisa do cenário."],
  [icons.Map, "Dificuldade para visualizar as zonas de risco", "Sem uma visão geográfica clara, áreas prioritárias podem passar despercebidas."],
  [icons.Zap, "Demora na triagem das ocorrências", "Processos manuais atrasam o encaminhamento e a resposta das equipes."],
  [icons.Layers3, "Ausência de visão integrada do território", "Dados isolados impedem que gestores compreendam o município por inteiro."],
  [icons.History, "Acompanhamento limitado de eventos e ações", "A falta de histórico compromete a continuidade das ações de mitigação."],
  [icons.AlertTriangle, "Atuação predominantemente reativa", "Sem monitoramento contínuo, a resposta acontece somente após o agravamento."],
] as const;

const features = [
  [icons.UsersRound, "Perfis de acesso para cidadãos e técnicos", "Níveis distintos de permissão para cada tipo de usuário."],
  [icons.MapPin, "Mapa interativo das zonas de risco", "Visualização georreferenciada de todo o território municipal."],
  [icons.Bot, "Registro e triagem com apoio de IA", "A IA faz a triagem preliminar e prioriza o encaminhamento."],
  [icons.History, "Histórico de desastres e mitigação", "Registro rastreável de eventos e respostas ao longo do tempo."],
  [icons.CloudRain, "Dados meteorológicos em tempo real", "Integração com fontes climáticas para monitoramento contínuo."],
  [icons.Satellite, "Indicadores do AdaptaBrasil", "Base nacional oficial para análise de suscetibilidade geológica."],
  [icons.Gauge, "Monitoramento por status", "Classificação das zonas como críticas, em atenção ou estáveis."],
] as const;

const advantages = [
  [BarChart3, "Decisões baseadas em dados", "Integra IA, dados geográficos e meteorológicos e análise humana."],
  [icons.Zap, "Respostas mais rápidas", "A triagem preliminar agiliza o encaminhamento das ocorrências."],
  [icons.Map, "Visão territorial integrada", "Mapas interativos facilitam o acompanhamento das zonas de risco."],
  [icons.History, "Histórico rastreável", "Ocorrências, alertas e ações de mitigação permanecem registrados."],
  [ShieldCheck, "Atuação preventiva", "O monitoramento contínuo permite planejar ações antes do agravamento."],
] as const;

const flow = [
  { icon: icons.UserRound, title: "Registro", text: "Cidadão informa ocorrência e localização." },
  { icon: icons.MapPin, title: "Localização", text: "Sistema georreferencia o ponto no mapa." },
  { icon: icons.Bot, title: "Análise com IA", text: "IA faz triagem e classifica a criticidade." },
  { icon: BriefcaseBusiness, title: "Validação técnica", text: "Técnico avalia, valida ou rejeita a ocorrência." },
  { icon: CheckCircle2, title: "Decisão", text: "Ação de mitigação é registrada e acompanhada." },
];

const footerLinks: ReadonlyArray<readonly [string, string]> = [
  ["Desafios", "desafios"],
  ["Sobre", "sobre"],
  ["Funcionalidades", "funcionalidades"],
  ["Perfis", "perfis"],
  ["Vantagens", "vantagens"],
];

/* -------------------------------------------------------------------------- */
/*  Página                                                                    */
/* -------------------------------------------------------------------------- */

function Index() {
  return (
      <div className="min-h-screen overflow-x-hidden bg-background">
        <a
            href="#inicio"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Pular para o conteúdo
        </a>

        <Header />

        <main>
          {/* HERO ------------------------------------------------------------ */}
          <section
              id="inicio"
              className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary pt-28 text-primary-foreground sm:pt-32"
          >
            <div className="radar-grid absolute inset-0 opacity-[.07]" aria-hidden="true" />
            <div
                className="absolute -right-36 top-16 size-[520px] rounded-full border border-primary-foreground/10"
                aria-hidden="true"
            />
            <div
                className="absolute -right-16 top-36 size-[360px] rounded-full border border-primary-foreground/10"
                aria-hidden="true"
            />

            <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 lg:min-h-[680px] lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:px-8 lg:pb-24">
              <div>
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 text-xs font-bold">
                  <span className="size-2 animate-pulse rounded-full bg-live" aria-hidden="true" />
                  Território monitorado em tempo real
                </div>

                <h1 className="text-5xl font-extrabold leading-none sm:text-6xl lg:text-7xl">
                  Gardian
                </h1>

                <p className="mt-5 max-w-xl text-xl font-bold leading-snug sm:text-2xl">
                  Sistema de Monitoramento e Gestão de Riscos Municipais
                </p>

                <p className="mt-7 text-lg font-semibold text-primary-foreground">
                  Uma visão integrada do território para agir antes do desastre.
                </p>

                <p className="mt-3 max-w-xl leading-7 text-primary-foreground/75">
                  Dados meteorológicos, geológicos e zonas de risco em um único painel.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="h-12 bg-live text-primary hover:bg-live/90">
                    <a href="#contato">Solicitar demonstração</a>
                  </Button>
                  <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="h-12 border-primary-foreground/35 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  >
                    <a href="#funcionalidades">
                      Conhecer funcionalidades <ArrowDown />
                    </a>
                  </Button>
                </div>

                <div className="mt-12 grid grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-6 sm:flex sm:gap-8">
                  <div>
                    <strong className="text-2xl">24h</strong>
                    <span className="block text-xs text-primary-foreground/65">monitoramento</span>
                  </div>
                  <div>
                    <strong className="text-2xl">360°</strong>
                    <span className="block text-xs text-primary-foreground/65">visão territorial</span>
                  </div>
                  <div>
                    <strong className="text-2xl">01</strong>
                    <span className="block text-xs text-primary-foreground/65">painel integrado</span>
                  </div>
                </div>
              </div>

              <HeroDashboard />
            </div>
          </section>

          {/* DESAFIOS -------------------------------------------------------- */}
          <section id="desafios" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <Reveal>
                <SectionTitle
                    eyebrow="Cenário municipal"
                    title="Os desafios da gestão municipal de riscos"
                    description="Problemas que o Gardian resolve no dia a dia da sua prefeitura."
                />
              </Reveal>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {challenges.map(([Icon, title, text], i) => (
                    <Reveal key={title} className="h-full">
                      <article className="group h-full rounded-lg border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift">
                        <div className="mb-5 flex items-start justify-between">
                          <IconBadge icon={Icon} tone="warning" />
                          <span className="text-xs font-extrabold text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                        </div>
                        <h3 className="text-lg font-extrabold text-primary">{title}</h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                      </article>
                    </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* SOBRE ----------------------------------------------------------- */}
          <section id="sobre" className="scroll-mt-24 bg-soft py-20 sm:py-24 lg:py-28">
            <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
              <Reveal>
                <SectionTitle eyebrow="Sobre a plataforma" title="O que é o Gardian?" align="left" />
                <div className="space-y-5 leading-7 text-muted-foreground">
                  <p>
                    O Gardian é um sistema desenvolvido para monitorar e gerenciar riscos
                    municipais. Em um único painel, reúne dados meteorológicos, informações
                    geológicas e a localização das zonas de risco, oferecendo uma visão
                    integrada do território.
                  </p>
                  <p>
                    A plataforma apoia o registro e a análise de ocorrências, o
                    acompanhamento das áreas monitoradas e a tomada de decisão por técnicos
                    e gestores, contribuindo para respostas mais rápidas e ações preventivas.
                  </p>
                </div>
                <blockquote className="mt-8 border-l-4 border-accent bg-background p-5 text-lg font-extrabold text-primary shadow-soft">
                  “Uma visão integrada do território para agir antes do desastre.”
                </blockquote>
              </Reveal>

              <Reveal>
                <div className="rounded-lg border border-border bg-card p-7 shadow-soft">
                  <div className="mb-7 flex items-center gap-3">
                    <IconBadge icon={icons.Layers3} />
                    <div>
                      <h3 className="font-extrabold text-primary">
                        Camadas de informação integradas
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Fontes conectadas em uma única leitura
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {[
                      "Dados meteorológicos em tempo real",
                      "Indicadores geológicos (AdaptaBrasil)",
                      "Zonas de risco georreferenciadas",
                      "Ocorrências registradas pela população",
                      "Ações de mitigação em andamento",
                    ].map((x, i) => (
                        <li
                            key={x}
                            className="flex items-center gap-3 border-b border-border py-3 last:border-0"
                        >
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-soft text-[10px] font-extrabold text-accent">
                        {i + 1}
                      </span>
                          <span className="text-sm font-semibold text-primary">{x}</span>
                        </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </section>

          {/* FUNCIONALIDADES ------------------------------------------------- */}
          <section id="funcionalidades" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <Reveal>
                <SectionTitle
                    eyebrow="Recursos"
                    title="Funcionalidades do Gardian"
                    description="Tecnologia aplicada à prevenção e resposta a riscos municipais."
                />
              </Reveal>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {features.map(([Icon, title, text]) => (
                    <Reveal key={title} className="h-full">
                      <article className="h-full rounded-lg border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift">
                        <IconBadge icon={Icon} tone="live" />
                        <h3 className="mt-5 font-extrabold text-primary">{title}</h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                      </article>
                    </Reveal>
                ))}

                <Reveal className="h-full md:col-span-2 lg:col-span-1">
                  <article className="flex h-full flex-col justify-between gap-6 rounded-lg bg-primary p-7 text-primary-foreground shadow-soft">
                    <Radio className="text-live" size={30} aria-hidden="true" />
                    <div>
                      <p className="text-xl font-extrabold">
                        Prevenção começa com informação conectada.
                      </p>
                      <a
                          href="#contato"
                          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-live hover:underline"
                      >
                        Ver o Gardian em ação <icons.ChevronRight size={17} aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                </Reveal>
              </div>
            </div>
          </section>

          {/* PERFIS ---------------------------------------------------------- */}
          <section id="perfis" className="scroll-mt-24 bg-soft py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-6xl px-5 lg:px-8">
              <Reveal>
                <SectionTitle
                    eyebrow="Colaboração"
                    title="Dois perfis, um só propósito: proteger o município"
                />
              </Reveal>

              <div className="relative grid gap-8 md:grid-cols-2">
                <ProfileCard
                    title="Cidadão"
                    icon={icons.UserRound}
                    items={[
                      "Registra ocorrências",
                      "Informa sua localização",
                      "Envia dados sobre a situação identificada",
                      "Acompanha o atendimento da ocorrência",
                    ]}
                />

                <div
                    className="absolute left-1/2 top-1/2 z-10 hidden size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-soft bg-accent text-accent-foreground md:grid"
                    aria-hidden="true"
                >
                  <icons.Zap size={20} />
                </div>

                <ProfileCard
                    dark
                    title="Técnico"
                    icon={BriefcaseBusiness}
                    items={[
                      "Analisa as ocorrências registradas",
                      "Avalia a análise da IA",
                      "Valida ou rejeita a ocorrência",
                      "Atualiza a situação das zonas de risco",
                      "Registra ações de mitigação",
                    ]}
                />
              </div>
            </div>
          </section>

          {/* MAPA ------------------------------------------------------------ */}
          <section className="py-20 sm:py-24 lg:py-28">
            <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-8">
              <Reveal>
                <SectionTitle
                    eyebrow="Monitoramento climático e territorial"
                    title="Mapa das zonas de risco"
                    align="left"
                />
                <p className="leading-7 text-muted-foreground">
                  O mapa interativo permite localizar as zonas de risco e acompanhar a
                  situação de cada área do município. As zonas são classificadas como
                  críticas, em atenção ou estáveis, facilitando a identificação das regiões
                  prioritárias.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    ["bg-critical", "Crítica"],
                    ["bg-warning", "Em atenção"],
                    ["bg-stable", "Estável"],
                  ].map(([color, label]) => (
                      <span
                          key={label}
                          className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-primary"
                      >
                    <span className={`size-2.5 rounded-full ${color}`} aria-hidden="true" />
                        {label}
                  </span>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <div className="relative pb-8">
                  <MockupImage
                      src={MOCKUPS.riskMap}
                      alt="Mapa do Gardian com zonas municipais classificadas por risco"
                      fallback={<RiskZoneMap />}
                  />
                  <div className="absolute -bottom-8 left-6 right-6 rounded-lg border border-border bg-card p-4 shadow-lift">
                    <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-bold text-primary">
                      Precipitação — últimas 24h
                    </span>
                      <span className="text-xs text-muted-foreground">18 mm</span>
                    </div>
                    <div className="flex h-12 items-end gap-2" aria-hidden="true">
                      {[22, 35, 28, 44, 66, 51, 80, 62, 40, 32, 24, 18].map((h, i) => (
                          <span
                              key={i}
                              className="flex-1 rounded-t-sm bg-live"
                              style={{ height: `${h}%`, opacity: 0.45 + i * 0.035 }}
                          />
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* FLUXO ----------------------------------------------------------- */}
          <section className="bg-soft py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <Reveal>
                <SectionTitle
                    eyebrow="Fluxo rastreável"
                    title="Como o Gardian funciona"
                    description="Do registro do cidadão à decisão técnica, em um fluxo rastreável."
                />
              </Reveal>
              <Reveal>
                <FlowTimeline steps={flow} />
              </Reveal>
            </div>
          </section>

          {/* VANTAGENS ------------------------------------------------------- */}
          <section id="vantagens" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <Reveal>
                <SectionTitle eyebrow="Resultados" title="Vantagens do Gardian" />
              </Reveal>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
                {advantages.map(([Icon, title, text], i) => (
                    <Reveal key={title} className="h-full">
                      <article
                          className={`h-full rounded-lg border border-border p-6 ${
                              i % 2 ? "bg-soft" : "bg-card"
                          }`}
                      >
                        <IconBadge icon={Icon} />
                        <h3 className="mt-5 font-extrabold text-primary">{title}</h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                      </article>
                    </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* CONTATO --------------------------------------------------------- */}
          <section
              id="contato"
              className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-primary to-secondary py-20 text-primary-foreground sm:py-24 lg:py-28"
          >
            <div
                className="absolute -right-28 -top-28 size-96 rounded-full border border-primary-foreground/10"
                aria-hidden="true"
            />
            <div
                className="absolute -right-10 -top-10 size-60 rounded-full border border-primary-foreground/10"
                aria-hidden="true"
            />

            <div className="relative mx-auto max-w-6xl px-5 text-center lg:px-8">
              <Radio className="mx-auto mb-5 text-live" size={38} aria-hidden="true" />
              <h2 className="mx-auto max-w-3xl text-3xl font-extrabold sm:text-4xl">
                Pronto para proteger seu município com dados e prevenção?
              </h2>
              <p className="mb-10 mt-4 text-primary-foreground/75">
                Solicite uma demonstração e veja o Gardian em ação.
              </p>
              <DemoForm />
            </div>
          </section>
        </main>

        {/* FOOTER ----------------------------------------------------------- */}
        <footer className="bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            <div>
              <Brand inverse />
              <p className="mt-5 max-w-xs text-sm leading-6 text-primary-foreground/65">
                Monitoramento contínuo e visão integrada para municípios mais seguros.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-extrabold">Links rápidos</h2>
              <div className="mt-4 grid gap-3 text-sm text-primary-foreground/65">
                {footerLinks.map(([label, id]) => (
                    <a key={id} href={`#${id}`} className="hover:text-live">
                      {label}
                    </a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-extrabold">Contato</h2>
              <div className="mt-4 space-y-3 text-sm text-primary-foreground/65">
                <a
                    href="mailto:contato@gardian.com.br"
                    className="flex items-center gap-2 hover:text-live"
                >
                  <Mail size={15} aria-hidden="true" /> contato@gardian.com.br
                </a>
                <a href="#contato" className="flex items-center gap-2 hover:text-live">
                  <Phone size={15} aria-hidden="true" /> Fale com nossa equipe
                </a>
                <p className="flex items-center gap-2">
                  <MapPin size={15} aria-hidden="true" /> Atendimento nacional
                </p>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-3 rounded-md border border-primary-foreground/15 p-3 text-xs font-bold">
                <ShieldCheck className="text-live" aria-hidden="true" />
                Sistema para Prefeituras
                <br />
                Defesa Civil e Proteção
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
                      {/* @ts-expect-error — ícone dinâmico */}
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
      </div>
  );
}