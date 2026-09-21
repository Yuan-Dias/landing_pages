import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  Activity, ArrowRight, BarChart3, Bell, Bot, Camera, Check,
  CheckCircle2, ChevronRight, CircleDollarSign, ClipboardCheck, Clock3,
  CloudOff, Database, Droplets, FileCheck2, FileText, Gauge, Globe2,
  Instagram, Landmark, Leaf, Mail, Map, MapPin, Menu, MessageCircle,
  Network, Radar, RefreshCw, Satellite,
  Search, ShieldCheck, Smartphone, TreePine, WifiOff, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type IconComponent = typeof Leaf;

const nav = [
  ["Desafios", "#desafios"], ["Sobre", "#sobre"], ["Funcionalidades", "#funcionalidades"],
  ["IAra", "#iara"], ["Vantagens", "#vantagens"], ["Contato", "#contato"],
];

const challenges = [
  [Search, "Informações dispersas", "Dificuldade de acesso às informações dos requerimentos."],
  [BarChart3, "Poucos indicadores", "Ausência de indicadores ambientais na fiscalização e no licenciamento."],
  [Clock3, "Acompanhamento complexo", "Complicações no acompanhamento dos processos e de suas pendências."],
  [Bell, "Renovações reativas", "Falta de proatividade na renovação das licenças ambientais."],
  [FileText, "Excesso de papel", "Rotinas manuais que aumentam custos, prazos e riscos de perda."],
] satisfies Array<[IconComponent, string, string]>;

const features = [
  [Globe2, "Sistema 100% online", "Dados centralizados, documentos e processos acessíveis de qualquer lugar."],
  [BarChart3, "Dashboards em tempo real", "Indicadores ambientais, tempo médio de análise e panorama das arrecadações."],
  [MapPin, "Mapa dos processos", "Visualização georreferenciada de solicitações, licenças e fiscalizações."],
  [ClipboardCheck, "Processos e pendências", "Acompanhamento de cada requerimento, etapa e exigência técnica."],
  [FileCheck2, "Emissão de documentos", "Geração de licenças, notificações, multas e documentos oficiais."],
  [CloudOff, "Vistorias offline", "Registro em campo sem internet, com sincronização automática ao reconectar."],
  [ShieldCheck, "Condicionantes", "Monitoramento contínuo das obrigações assumidas pelos empreendedores."],
  [CircleDollarSign, "Arrecadações", "Visão consolidada das taxas e multas ambientais do município."],
  [Satellite, "Integrações geoespaciais", "GeoBahia, MapBiomas e SIRGAS 2000 apoiando análises precisas."],
] satisfies Array<[IconComponent, string, string]>;

const advantages = [
  [Database, "Centralização dos processos", "Requerimentos, documentos e histórico em um só lugar."],
  [Search, "Acesso rápido à informação", "Consulta imediata ao status de cada processo."],
  [Gauge, "Controle de indicadores", "Dados estratégicos e atualizados para a gestão."],
  [Activity, "Celeridade nos trâmites", "Fluxos mais curtos e comunicação automatizada."],
  [ShieldCheck, "Monitoramento contínuo", "Acompanhamento das condicionantes ambientais."],
  [CircleDollarSign, "Panorama das arrecadações", "Taxas e multas visualizadas de forma consolidada."],
  [WifiOff, "Fiscalização offline", "Trabalho em campo sem depender de conexão."],
  [Satellite, "Bases oficiais integradas", "GeoBahia, MapBiomas e SIRGAS 2000."],
  [MessageCircle, "Notificações no WhatsApp", "Comunicação direta com o cidadão, em tempo real."],
  [Network, "Gestão consorciada", "Operação compartilhada entre os municípios."],
] satisfies Array<[IconComponent, string, string]>;

const offlineBenefits = [
  [WifiOff, "Registro de fiscalizações sem internet"],
  [Camera, "Captura de fotos, GPS e observações em campo"],
  [RefreshCw, "Sincronização automática ao reconectar"],
  [MapPin, "Continuidade do trabalho em qualquer área do município"],
] satisfies Array<[IconComponent, string]>;

function Brand({ inverse = false }: { inverse?: boolean }) {
  return <a href="#inicio" className={`group inline-flex items-center gap-2.5 ${inverse ? "text-primary-foreground" : "text-primary"}`} aria-label="SIGAC — início">
    <span className={`grid size-10 place-items-center rounded-md ${inverse ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground"}`}>
      <Leaf className="size-5 transition-transform group-hover:-rotate-12" aria-hidden="true" />
    </span>
    <span className="font-display text-xl font-extrabold tracking-normal">SIGAC</span>
  </a>;
}

function SectionTitle({ eyebrow, title, description, align = "center" }: { eyebrow: string; title: string; description?: string; align?: "center" | "left" }) {
  return <div className={`mb-12 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase text-accent"><span className="h-px w-7 bg-accent" />{eyebrow}</span>
    <h2 className="font-display text-3xl font-extrabold leading-tight text-primary md:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>}
  </div>;
}

function IconBadge({ children, alert = false }: { children: ReactNode; alert?: boolean }) {
  return <span className={`grid size-11 shrink-0 place-items-center rounded-full ${alert ? "bg-danger-soft text-warning" : "bg-soft text-secondary"}`}>{children}</span>;
}

function ProcessMap() {
  return <div className="relative h-64 overflow-hidden rounded-lg border border-hero-line bg-map" aria-label="Mapa ilustrativo de processos ambientais">
    <svg viewBox="0 0 620 280" className="absolute inset-0 size-full" aria-hidden="true">
      <path d="M-20 40C60 70 90 20 170 55s75 95 165 70 125-85 310-55M-10 210c100-50 180 5 250-35s120-80 210-30 130 40 190 5" fill="none" stroke="currentColor" strokeWidth="2" className="text-map-line" />
      <path d="M80 0v280M180 0v280M280 0v280M380 0v280M480 0v280M580 0v280M0 70h620M0 140h620M0 210h620" stroke="currentColor" strokeWidth="1" className="text-map-grid" />
      <path d="M112 40l70 30 20 57-45 52-71-18-22-60zM390 22l82 30 54 70-32 82-100 34-70-65 20-95z" fill="currentColor" className="text-map-land" />
    </svg>
    {[["left-[24%] top-[36%]", "bg-accent"], ["left-[63%] top-[25%]", "bg-info"], ["left-[72%] top-[64%]", "bg-warning"]].map(([p,c], i) => <span key={i} className={`absolute ${p} grid size-8 place-items-center rounded-full border-4 border-primary-foreground ${c} shadow-lg`}><MapPin className="size-3.5 text-primary-foreground" /></span>)}
    <div className="absolute bottom-3 left-3 flex gap-3 rounded-md border border-hero-line bg-primary/90 px-3 py-2 text-[10px] text-primary-foreground backdrop-blur">
      <span className="flex items-center gap-1"><i className="size-2 rounded-full bg-accent" />Deferido</span><span className="flex items-center gap-1"><i className="size-2 rounded-full bg-info" />Em análise</span><span className="flex items-center gap-1"><i className="size-2 rounded-full bg-warning" />Pendente</span>
    </div>
  </div>;
}

function DashboardMockup() {
  return <div className="relative mx-auto w-full max-w-2xl lg:ml-auto" aria-label="Painel ilustrativo do SIGAC">
    <div className="overflow-hidden rounded-lg border border-hero-line bg-surface shadow-dashboard">
      <div className="flex h-11 items-center justify-between border-b border-border px-4"><div className="flex gap-1.5"><i className="size-2 rounded-full bg-danger-soft"/><i className="size-2 rounded-full bg-soft-strong"/><i className="size-2 rounded-full bg-accent"/></div><span className="text-[10px] font-bold uppercase text-muted-foreground">Central de gestão ambiental</span><Radar className="size-4 text-secondary"/></div>
      <div className="grid gap-3 p-3 sm:grid-cols-[1fr_2.1fr]">
        <div className="hidden space-y-2 sm:block"><div className="rounded-md bg-primary p-3 text-primary-foreground"><Leaf className="mb-8 size-5"/><p className="text-[10px] opacity-70">Visão geral</p><p className="text-sm font-bold">Município de Serra Verde</p></div>{["Processos", "Fiscalização", "Documentos", "Indicadores"].map((x,i)=><div key={x} className={`flex items-center gap-2 rounded-md px-3 py-2 text-xs ${i===0?"bg-soft font-semibold text-primary":"text-muted-foreground"}`}><span className="size-1.5 rounded-full bg-accent"/>{x}</div>)}</div>
        <div className="space-y-3"><div className="grid grid-cols-3 gap-2">{[["148","Ativos"],["12d","Tempo médio"],["34","Licenças/mês"]].map(([v,l])=><div key={l} className="rounded-md border border-border bg-background p-2.5"><p className="font-display text-xl font-extrabold text-primary">{v}</p><p className="text-[9px] text-muted-foreground">{l}</p></div>)}</div><ProcessMap/></div>
      </div>
    </div>
    <div className="absolute -bottom-7 -left-2 flex max-w-56 items-start gap-2 rounded-md border border-soft-strong bg-surface p-3 shadow-card sm:-left-8"><span className="relative grid size-8 shrink-0 place-items-center rounded-full bg-whatsapp text-primary-foreground"><MessageCircle className="size-4"/><i className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-warning animate-ping-soft"/></span><p className="text-[11px] leading-snug text-foreground"><strong className="block text-primary">Atualização do processo</strong>Seu processo está em análise.</p></div>
    <div className="absolute -right-2 top-14 rounded-md border border-info/30 bg-surface p-3 shadow-card sm:-right-8"><div className="flex items-center gap-2 text-xs font-bold text-info"><Bot className="size-4"/>IAra respondendo<span className="typing-dots"/></div></div>
    <div className="absolute -right-1 -bottom-5 flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-card"><Smartphone className="size-4"/>Offline disponível</div>
  </div>;
}

function ProcessTimeline() {
  const steps = [[FileText,"Solicitação do cidadão"],[Search,"Triagem técnica"],[Map,"Análise e vistorias"],[FileCheck2,"Emissão da licença"],[ShieldCheck,"Monitoramento"]] satisfies Array<[IconComponent, string]>;
  return <div className="rounded-lg border border-border bg-surface p-6 shadow-card"><div className="mb-6 flex items-center justify-between"><div><p className="text-xs font-bold uppercase text-accent">Fluxo digital</p><h3 className="mt-1 font-display text-xl font-bold text-primary">Etapas do processo</h3></div><span className="rounded-full bg-soft px-3 py-1 text-xs font-semibold text-secondary">Em tempo real</span></div><div>{steps.map(([Icon,label],i)=><div key={String(label)} className="relative flex gap-4 pb-6 last:pb-0"><div className="relative z-10 grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-primary-foreground"><Icon className="size-4"/></div>{i<steps.length-1&&<span className="absolute left-[17px] top-9 h-[calc(100%-36px)] w-px bg-soft-strong"/>}<div><p className="font-semibold text-primary">{label}</p><p className="mt-0.5 text-xs text-muted-foreground">{i < 3 ? "Etapa concluída" : i === 3 ? "Em andamento" : "Acompanhamento contínuo"}</p></div>{i<3&&<CheckCircle2 className="ml-auto size-5 text-accent"/>}</div>)}</div></div>;
}

function WhatsAppChatMockup() {
  return <div className="mx-auto w-full max-w-sm rounded-[2rem] border-[8px] border-primary bg-surface p-2 shadow-dashboard" aria-label="Conversa ilustrativa com a assistente IAra">
    <div className="overflow-hidden rounded-[1.3rem] bg-chat"><div className="flex items-center gap-3 bg-secondary p-4 text-primary-foreground"><div className="grid size-10 place-items-center rounded-full bg-info"><Bot className="size-5"/></div><div className="grow"><p className="font-bold">IAra</p><p className="text-[10px] opacity-80">Assistente ambiental • online</p></div><span className="rounded-full bg-primary-foreground/15 px-2 py-1 text-[10px]">IA · IAra</span></div><div className="space-y-3 p-4 text-xs leading-relaxed"><ChatBubble side="right">Bom dia, quero saber se minha licença foi aprovada.</ChatBubble><ChatBubble>Olá! Seu processo nº 2026/0142 está em análise técnica. Previsão de resposta em até 5 dias úteis. Deseja acompanhar por aqui?</ChatBubble><ChatBubble side="right">Sim, por favor.</ChatBubble><ChatBubble>Perfeito! Vou te avisar assim que houver atualização. 🌱</ChatBubble><div className="flex items-center gap-2 text-[10px] text-muted-foreground"><span className="typing-dots"/> IAra está disponível</div></div><div className="m-3 flex items-center justify-between rounded-full bg-surface px-4 py-2 text-xs text-muted-foreground">Digite uma mensagem <MessageCircle className="size-4 text-whatsapp"/></div></div>
  </div>;
}
function ChatBubble({ children, side = "left" }: { children: ReactNode; side?: "left"|"right" }) { return <div className={`max-w-[88%] rounded-md p-3 shadow-xs ${side === "right" ? "ml-auto bg-chat-user text-chat-user-foreground" : "bg-surface text-foreground"}`}>{children}</div> }

function MobileAppMockup() {
  return <div className="relative mx-auto w-full max-w-md rounded-xl border border-border bg-primary p-3 shadow-dashboard"><div className="rounded-lg bg-background p-4"><div className="mb-5 flex items-center justify-between"><div className="flex items-center gap-2"><Leaf className="size-5 text-secondary"/><b className="text-primary">Vistoria móvel</b></div><span className="flex items-center gap-1 rounded-full bg-danger-soft px-2 py-1 text-[10px] font-bold text-warning"><WifiOff className="size-3"/>Modo offline ativo</span></div><div className="mb-4 rounded-md bg-soft p-3"><div className="mb-2 flex justify-between text-xs font-semibold text-primary"><span>Vistoria em andamento</span><span>68%</span></div><div className="h-1.5 overflow-hidden rounded-full bg-soft-strong"><div className="h-full w-2/3 rounded-full bg-accent animate-progress"/></div></div><div className="grid grid-cols-2 gap-3"><Field icon={<MapPin/>} label="Localização GPS" value="-12.9718, -38.5011"/><Field icon={<Camera/>} label="Registro fotográfico" value="6 fotos capturadas"/><div className="col-span-2"><Field icon={<FileText/>} label="Observações" value="Vegetação em recuperação na área vistoriada."/></div></div><div className="mt-4 flex items-center justify-between rounded-md bg-primary px-3 py-3 text-xs text-primary-foreground"><span>3 registros aguardando sincronização</span><RefreshCw className="size-4 animate-spin-slow"/></div></div></div>;
}
function Field({icon,label,value}:{icon:ReactNode;label:string;value:string}) { return <div className="rounded-md border border-border bg-surface p-3"><div className="mb-2 flex items-center gap-1 text-[10px] font-semibold text-muted-foreground"><span className="[&_svg]:size-3.5 [&_svg]:text-secondary">{icon}</span>{label}</div><p className="text-xs font-medium text-primary">{value}</p></div> }

function ContactForm() {
  const [sent,setSent]=useState(false);
  function submit(e:FormEvent){e.preventDefault();setSent(true)}
  if(sent) return <div className="grid min-h-64 place-items-center rounded-lg border border-cta-line bg-primary-foreground/10 p-8 text-center"><div><CheckCircle2 className="mx-auto mb-3 size-10 text-soft-strong"/><h3 className="text-xl font-bold text-primary-foreground">Solicitação recebida</h3><p className="mt-2 text-sm text-footer-muted">Nossa equipe entrará em contato com você.</p></div></div>;
  return <form onSubmit={submit} className="grid gap-3 rounded-lg border border-cta-line bg-primary-foreground/10 p-5 backdrop-blur" aria-label="Formulário de solicitação de demonstração"><label className="sr-only" htmlFor="name">Nome</label><Input id="name" required placeholder="Nome completo" className="h-12 border-cta-line bg-surface text-foreground"/><label className="sr-only" htmlFor="email">E-mail institucional</label><Input id="email" type="email" required placeholder="E-mail institucional" className="h-12 border-cta-line bg-surface text-foreground"/><label className="sr-only" htmlFor="org">Cidade, órgão ou consórcio</label><Input id="org" required placeholder="Cidade, órgão ou consórcio" className="h-12 border-cta-line bg-surface text-foreground"/><Button type="submit" size="lg" className="h-12 bg-soft-strong text-primary hover:bg-soft">Solicitar demonstração <ArrowRight/></Button></form>;
}

export function SigacLanding() {
  const [menuOpen,setMenuOpen]=useState(false);
  useEffect(()=>{const nodes=document.querySelectorAll(".reveal");const observer=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("is-visible")),{threshold:.12});nodes.forEach(n=>observer.observe(n));return()=>observer.disconnect()},[]);
  return <div className="min-h-screen bg-background text-foreground">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl"><div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8"><Brand/><nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">{nav.map(([l,h])=><a key={l} href={h} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">{l}</a>)}</nav><div className="flex items-center gap-2"><Button asChild className="hidden md:inline-flex"><a href="#contato">Solicitar demonstração</a></Button><Button variant="ghost" size="icon" className="min-h-11 min-w-11 lg:hidden" aria-label={menuOpen?"Fechar menu":"Abrir menu"} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</Button></div></div>{menuOpen&&<nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Navegação móvel">{nav.map(([l,h])=><a key={l} href={h} onClick={()=>setMenuOpen(false)} className="block border-b border-border py-3 text-sm font-semibold text-primary">{l}</a>)}<Button asChild className="mt-4 w-full"><a href="#contato">Solicitar demonstração</a></Button></nav>}</header>

    <section id="inicio" className="relative overflow-hidden bg-hero pt-28 text-primary-foreground"><div className="absolute inset-0 opacity-15 pattern-grid"/><Leaf className="absolute left-[5%] top-36 size-20 rotate-12 text-accent/20"/><Satellite className="absolute right-[7%] top-28 size-12 text-info/25"/><div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-10 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:pb-32 lg:pt-20"><div className="reveal"><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-hero-line bg-primary-foreground/10 px-3 py-1.5 text-xs font-semibold"><span className="size-2 rounded-full bg-accent animate-ping-soft"/>Gestão ambiental digital e compartilhada</div><h1 className="font-display text-6xl font-extrabold leading-none md:text-8xl">SIGAC</h1><p className="mt-4 max-w-xl font-display text-2xl font-bold leading-tight text-soft-strong md:text-3xl">Sistema Integrado de Gestão Ambiental Compartilhada</p><p className="mt-6 max-w-xl text-lg font-semibold leading-relaxed">Do requerimento à licença, todo o licenciamento ambiental em um só lugar.</p><p className="mt-2 max-w-lg text-base text-footer-muted">Licenciamento, fiscalização e comunicação com o cidadão, em tempo real.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg" className="h-12 bg-accent text-primary hover:bg-soft-strong"><a href="#contato">Solicitar demonstração <ArrowRight/></a></Button><Button asChild size="lg" variant="outline" className="h-12 border-hero-line bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href="#funcionalidades">Conhecer funcionalidades <ChevronRight/></a></Button></div></div><div className="reveal delay-150"><DashboardMockup/></div></div><div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-hero-line px-5 py-5 text-xs font-semibold text-footer-muted lg:justify-start lg:px-8"><span>Integrações oficiais</span><b>GeoBahia</b><b>MapBiomas</b><b>SIRGAS 2000</b></div></section>

    <section id="desafios" className="py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="O cenário atual" title="Como surgiu a necessidade do SIGAC?" description="Problemas que o SIGAC resolve no dia a dia da gestão ambiental."/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">{challenges.map(([Icon,t,d])=><article key={String(t)} className="reveal group rounded-lg border border-border bg-surface p-5 shadow-card transition-all hover:-translate-y-1 hover:border-warning/50"><IconBadge alert><Icon className="size-5"/></IconBadge><h3 className="mt-5 font-display text-lg font-bold text-primary">{t}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p></article>)}</div></div></section>

    <section id="sobre" className="bg-section py-24"><div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8"><div className="reveal"><SectionTitle eyebrow="Sobre a plataforma" title="O que é o SIGAC?" align="left"/><p className="text-lg leading-relaxed text-foreground">O SIGAC acompanha todo o processo de licenciamento ambiental, desde a solicitação realizada pelo cidadão até a emissão da licença.</p><p className="mt-5 leading-relaxed text-muted-foreground">A plataforma permite a triagem das solicitações, a organização dos dados e documentos necessários e a comunicação, em tempo real, entre o requerente e a secretaria. O sistema também auxilia nas atividades de fiscalização e no registro de eventuais multas.</p><blockquote className="mt-7 border-l-4 border-accent bg-soft p-5 font-display text-lg font-bold text-primary">“Do requerimento à licença, todo o licenciamento ambiental em um só lugar.”</blockquote></div><div className="reveal delay-150"><ProcessTimeline/></div></div></section>

    <section id="funcionalidades" className="py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="Recursos integrados" title="Funcionalidades do SIGAC" description="Recursos que simplificam o licenciamento, a fiscalização e a comunicação com o cidadão."/><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{features.map(([Icon,t,d])=><article key={String(t)} className="reveal group rounded-lg border border-border bg-surface p-6 shadow-card transition-all hover:-translate-y-1 hover:border-accent hover:shadow-card-hover"><IconBadge><Icon className="size-5"/></IconBadge><h3 className="mt-5 font-display text-lg font-bold text-primary">{t}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p><span className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-secondary opacity-0 transition-opacity group-hover:opacity-100">Saiba mais <ArrowRight className="size-3"/></span></article>)}</div></div></section>

    <section id="iara" className="overflow-hidden bg-soft py-24"><div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8"><div className="reveal"><span className="mb-5 inline-flex items-center gap-2 rounded-full bg-info-soft px-3 py-1.5 text-xs font-bold text-info"><Bot className="size-4"/>Inteligência artificial</span><h2 className="font-display text-3xl font-extrabold leading-tight text-primary md:text-4xl">IAra: inteligência artificial a serviço do cidadão</h2><p className="mt-4 text-lg font-semibold text-secondary">Um agente de IA com qualificação técnica para orientar a população.</p><p className="mt-6 leading-relaxed text-muted-foreground">A IAra é um agente de inteligência artificial do SIGAC que orienta a população pelo WhatsApp sobre os requerimentos.</p><p className="mt-3 leading-relaxed text-muted-foreground">Com notificações em tempo real, informa o andamento do processo e agiliza os trâmites para que prazos não sejam perdidos.</p><ul className="mt-7 grid gap-3">{["Atendimento automatizado no WhatsApp","Orientação técnica sobre requerimentos","Notificações em tempo real sobre o andamento","Redução de prazos perdidos"].map(x=><li key={x} className="flex items-center gap-3 text-sm font-semibold text-primary"><Check className="size-5 rounded-full bg-accent p-1 text-primary-foreground"/>{x}</li>)}</ul></div><div className="reveal delay-150"><WhatsAppChatMockup/></div></div></section>

    <section className="py-24"><div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8"><div className="reveal order-2 lg:order-1"><MobileAppMockup/></div><div className="reveal order-1 lg:order-2"><span className="mb-5 inline-flex items-center gap-2 rounded-full bg-danger-soft px-3 py-1.5 text-xs font-bold text-warning"><CloudOff className="size-4"/>Operação offline</span><h2 className="font-display text-3xl font-extrabold text-primary md:text-4xl">Aplicativo para técnicos</h2><p className="mt-3 text-lg font-semibold text-secondary">Funcionamento offline para quem atua onde a internet não chega.</p><p className="mt-6 leading-relaxed text-muted-foreground">Muitas vezes, os técnicos atuam em áreas que não têm sinal de internet. Para facilitar as vistorias e fiscalizações, o SIGAC conta com um app mobile com suporte offline.</p><ul className="mt-7 grid gap-4">{offlineBenefits.map(([Icon,x])=><li key={x} className="flex items-center gap-3"><IconBadge><Icon className="size-5"/></IconBadge><span className="font-semibold text-primary">{x}</span></li>)}</ul></div></div></section>

    <section id="vantagens" className="bg-section py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="Resultados para a gestão" title="Vantagens do SIGAC" description="Mais agilidade, transparência e capacidade de decisão para municípios e consórcios."/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{advantages.map(([Icon,t,d],i)=><article key={String(t)} className={`reveal flex gap-4 rounded-lg border border-border p-5 transition-transform hover:-translate-y-1 ${i%2?"bg-soft":"bg-surface"}`}><IconBadge><Icon className="size-5"/></IconBadge><div><h3 className="font-display font-bold text-primary">{t}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</p></div></article>)}</div></div></section>

    <section id="contato" className="relative overflow-hidden bg-hero py-24 text-primary-foreground"><TreePine className="absolute -bottom-12 left-8 size-52 text-accent/10"/><Droplets className="absolute right-10 top-12 size-36 text-info/10"/><div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_.85fr] lg:px-8"><div className="reveal"><span className="text-xs font-bold uppercase text-soft-strong">Transformação digital ambiental</span><h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight md:text-5xl">Pronto para modernizar o licenciamento ambiental do seu município?</h2><p className="mt-5 text-lg text-footer-muted">Solicite uma demonstração e veja o SIGAC em ação.</p><div className="mt-8 flex flex-wrap gap-4 text-sm text-footer-muted"><span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-accent"/>Apresentação personalizada</span><span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-accent"/>Sem compromisso</span></div></div><div className="reveal delay-150"><ContactForm/></div></div></section>

    <footer className="bg-primary pb-8 pt-16 text-primary-foreground"><div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 lg:grid-cols-4 lg:px-8"><div><Brand inverse/><p className="mt-5 max-w-xs text-sm leading-relaxed text-footer-muted">Gestão ambiental compartilhada, do requerimento à licença.</p></div><div><h3 className="text-sm font-bold">Links rápidos</h3><div className="mt-4 grid gap-2">{nav.slice(0,5).map(([l,h])=><a key={l} href={h} className="text-sm text-footer-muted hover:text-primary-foreground">{l}</a>)}</div></div><div><h3 className="text-sm font-bold">Contato</h3><div className="mt-4 grid gap-3 text-sm text-footer-muted"><a href="#contato" className="flex items-center gap-2 hover:text-primary-foreground"><Mail className="size-4"/>Solicitar demonstração</a><a href="#contato" className="flex items-center gap-2 hover:text-primary-foreground"><MessageCircle className="size-4"/>Atendimento institucional</a><a href="#contato" className="flex items-center gap-2 hover:text-primary-foreground"><FileText className="size-4"/>Formulário de contato</a></div></div><div><div className="inline-flex items-center gap-3 rounded-md border border-hero-line p-3"><Landmark className="size-8 text-soft-strong"/><span className="text-xs font-bold leading-tight">Sistema para Prefeituras<br/>e Consórcios Ambientais</span></div><a href="#inicio" className="mt-5 flex items-center gap-2 text-sm text-footer-muted hover:text-primary-foreground"><Instagram className="size-4"/>Acompanhe o SIGAC</a></div></div><div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-3 border-t border-hero-line px-5 pt-6 text-xs text-footer-muted sm:flex-row lg:px-8"><span>© 2026 SIGAC. Todos os direitos reservados.</span><span>Gestão pública mais ágil, transparente e sustentável.</span></div></footer>
  </div>;
}
