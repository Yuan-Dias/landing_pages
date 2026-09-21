import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  Car,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Facebook,
  FileClock,
  Fuel,
  Gauge,
  History,
  Instagram,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  PiggyBank,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
  UsersRound,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const navItems = [
  ["Desafios", "#desafios"],
  ["Sobre", "#sobre"],
  ["Funcionalidades", "#funcionalidades"],
  ["Vantagens", "#vantagens"],
  ["Contato", "#contato"],
];

const challenges = [
  { icon: Car, title: "Controle do uso da frota", text: "Saiba quando, onde e por quem cada veículo está sendo utilizado." },
  { icon: Fuel, title: "Organização dos abastecimentos", text: "Centralize registros e elimine processos dispersos ou sem padronização." },
  { icon: CircleDollarSign, title: "Despesas operacionais dispersas", text: "Reúna os custos da frota para acompanhar os recursos com clareza." },
  { icon: FileClock, title: "Histórico descentralizado", text: "Consulte toda a trajetória de veículos e equipamentos em um só lugar." },
  { icon: Wrench, title: "Acompanhamento de manutenções", text: "Evite atrasos e mantenha a frota disponível com uma rotina organizada." },
  { icon: ShieldCheck, title: "Controle administrativo e financeiro", text: "Fortaleça a gestão com processos rastreáveis e informações confiáveis." },
];

const features = [
  { icon: Fuel, title: "Controle de abastecimento por tipo de combustível", text: "Registre e acompanhe cada abastecimento conforme o combustível utilizado pela frota." },
  { icon: SlidersHorizontal, title: "Definição de limites de custo e/ou litros", text: "Configure limites por veículo ou grupo e mantenha os gastos dentro do planejamento." },
  { icon: UsersRound, title: "Organização por grupos", text: "Estruture veículos, condutores e regras conforme secretarias, setores ou finalidades." },
  { icon: CalendarCheck, title: "Agendamento e aprovação de veículos", text: "A utilização ocorre somente mediante agendamento prévio e aprovação dos responsáveis, garantindo maior controle sobre a disponibilidade e o uso da frota." },
  { icon: ClipboardCheck, title: "Aprovação de abastecimentos", text: "Estabeleça um fluxo simples de autorização antes da liberação de cada abastecimento." },
  { icon: History, title: "Histórico completo de uso", text: "O sistema registra informações que apoiam auditorias, análises de desempenho, planejamento de manutenção e decisões estratégicas." },
  { icon: BarChart3, title: "Controle de gastos operacionais", text: "Acompanhe abastecimentos, ocorrências e manutenções preventivas e corretivas com custos detalhados." },
];

const benefits = [
  { icon: Gauge, title: "Maior controle da frota", text: "Centraliza informações sobre a disponibilidade e a utilização dos veículos e equipamentos municipais." },
  { icon: Fuel, title: "Gestão dos abastecimentos", text: "Permite definir limites, organizar regras por grupos e controlar a aprovação dos abastecimentos." },
  { icon: PiggyBank, title: "Redução de custos operacionais", text: "Facilita o acompanhamento de despesas com combustível, ocorrências e manutenções da frota." },
  { icon: History, title: "Histórico e rastreabilidade", text: "Mantém registros completos das utilizações, movimentações e despesas relacionadas a cada veículo." },
  { icon: BarChart3, title: "Decisões mais estratégicas", text: "Disponibiliza informações que apoiam auditorias, planejamento de manutenções e gestão dos recursos públicos." },
];

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "light";
};

function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <a className={`button button-${variant} ${className}`} {...props}>
      {children}
    </a>
  );
}

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#inicio" className={`brand ${inverse ? "brand-inverse" : ""}`} aria-label="Frotas ON — início">
      <span className="brand-mark"><Car aria-hidden="true" /></span>
      <span>Frotas <strong>ON</strong></span>
    </a>
  );
}

function SectionTitle({ eyebrow, title, description, align = "center" }: { eyebrow: string; title: string; description?: string; align?: "center" | "left" }) {
  return (
    <div className={`section-title section-title-${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return <span className="icon-badge"><Icon aria-hidden="true" /></span>;
}

function DashboardMockup() {
  return (
    <div className="dashboard-shell" aria-label="Prévia do painel de gestão do Frotas ON">
      <div className="dashboard-top">
        <div className="dashboard-brand"><span /><span>Visão geral da frota</span></div>
        <div className="dashboard-user">GM</div>
      </div>
      <div className="dashboard-body">
        <aside className="dashboard-menu" aria-hidden="true">
          {[Car, CalendarCheck, Fuel, Wrench, BarChart3].map((Icon, index) => <Icon key={index} />)}
        </aside>
        <div className="dashboard-content">
          <div className="dashboard-heading">
            <div><small>Prefeitura Municipal</small><strong>Resumo operacional</strong></div>
            <span><span className="live-dot" /> Atualizado agora</span>
          </div>
          <div className="dashboard-stats">
            <div><span className="stat-icon"><Car /></span><p>Veículos ativos</p><strong>128</strong><small>+6 neste mês</small></div>
            <div><span className="stat-icon"><CalendarCheck /></span><p>Agendamentos</p><strong>24</strong><small>8 para hoje</small></div>
            <div><span className="stat-icon"><Wrench /></span><p>Em manutenção</p><strong>07</strong><small>Dentro do previsto</small></div>
          </div>
          <div className="dashboard-lower">
            <div className="chart-panel">
              <div className="panel-label"><strong>Despesas da frota</strong><span>Últimos 6 meses</span></div>
              <div className="chart" aria-hidden="true">
                {[44, 63, 51, 78, 68, 87].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
              </div>
              <div className="chart-months"><span>JAN</span><span>FEV</span><span>MAR</span><span>ABR</span><span>MAI</span><span>JUN</span></div>
            </div>
            <div className="activity-panel">
              <div className="panel-label"><strong>Atividade</strong><ChevronRight /></div>
              <div className="activity"><span><Fuel /></span><p><strong>Abastecimento aprovado</strong><small>Veículo 042 · agora</small></p></div>
              <div className="activity"><span><Check /></span><p><strong>Agendamento concluído</strong><small>Veículo 018 · 12 min</small></p></div>
              <div className="activity"><span><Wrench /></span><p><strong>Revisão programada</strong><small>Veículo 096 · 35 min</small></p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="floating-chip floating-chip-top"><ShieldCheck /><span><strong>100%</strong> rastreável</span></div>
      <div className="floating-chip floating-chip-bottom"><CheckCircle2 /><span><strong>Controle</strong> em tempo real</span></div>
    </div>
  );
}

function Header() {
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
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Navegação móvel">
        {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <Button href="#contato" onClick={() => setOpen(false)}>Solicitar demonstração</Button>
      </nav>
    </header>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 />
        <div><strong>Solicitação recebida!</strong><p>Nossa equipe entrará em contato para agendar a demonstração.</p></div>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label><span>Nome</span><input required name="name" autoComplete="name" placeholder="Seu nome" /></label>
      <label><span>E-mail institucional</span><input required name="email" type="email" autoComplete="email" placeholder="nome@prefeitura.gov.br" /></label>
      <label><span>Cidade / órgão</span><input required name="organization" autoComplete="organization" placeholder="Prefeitura ou secretaria" /></label>
      <button type="submit" className="button button-light">Solicitar demonstração <ArrowRight /></button>
      <small>Ao enviar, você concorda em receber contato da equipe Frotas ON.</small>
    </form>
  );
}

function Index() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <Header />
      <main>
        <section id="inicio" className="hero">
          <div className="hero-motif hero-motif-one" aria-hidden="true" />
          <div className="hero-motif hero-motif-two" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy animate-fade-in">
              <span className="hero-kicker"><Landmark /> Tecnologia para a gestão pública municipal</span>
              <h1>Frotas <span>ON</span></h1>
              <h2>Sistema de Gerenciamento de Frotas Públicas</h2>
              <p className="hero-lead">Toda a gestão da frota pública em um único sistema.</p>
              <p className="hero-detail">Veículos, agendamentos, despesas, abastecimentos e manutenções organizados para sua prefeitura.</p>
              <div className="hero-actions">
                <Button href="#contato" variant="light">Solicitar demonstração <ArrowRight /></Button>
                <Button href="#funcionalidades" variant="secondary">Conhecer funcionalidades <ChevronRight /></Button>
              </div>
              <div className="hero-trust"><ShieldCheck /><span>Informação organizada</span><i /><CheckCircle2 /><span>Decisões mais seguras</span></div>
            </div>
            <div className="hero-visual animate-fade-in"><DashboardMockup /></div>
          </div>
        </section>

        <section id="desafios" className="section challenges-section">
          <div className="container" data-reveal>
            <SectionTitle eyebrow="Desafios do município" title="Os desafios da gestão de frotas públicas" description="Problemas que o Frotas ON resolve no dia a dia da sua prefeitura." />
            <div className="challenge-grid">
              {challenges.map(({ icon: Icon, title, text }, index) => (
                <article className="challenge-card" key={title} style={{ "--delay": `${index * 60}ms` } as React.CSSProperties}>
                  <span className="challenge-icon"><Icon /></span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="section about-section">
          <div className="container about-grid" data-reveal>
            <div className="about-copy">
              <SectionTitle eyebrow="Gestão integrada" title="O que é o Frotas ON?" align="left" />
              <p>O <strong>Frotas ON Prefeitura</strong> é um sistema completo para gerenciamento de frotas públicas, desenvolvido para otimizar o controle operacional, financeiro e administrativo dos veículos e equipamentos de uma prefeitura.</p>
              <p>A plataforma integra o controle de utilização, abastecimento, despesas, manutenções e histórico da frota, contribuindo para decisões mais seguras, maior eficiência operacional e melhor acompanhamento dos recursos públicos.</p>
              <blockquote><CheckCircle2 />Toda a gestão da frota pública em um único sistema.</blockquote>
            </div>
            <div className="modules-panel">
              <div className="modules-orbit" aria-hidden="true"><span /><span /><span /></div>
              <div className="modules-header"><span>Módulos integrados</span><strong>Um sistema.<br />Toda a operação.</strong></div>
              <div className="module-list">
                {[
                  [Car, "Veículos", "Cadastro e disponibilidade"],
                  [CalendarCheck, "Agendamentos", "Solicitação e aprovação"],
                  [CircleDollarSign, "Despesas", "Custos centralizados"],
                  [Fuel, "Abastecimentos", "Limites e autorizações"],
                  [Wrench, "Manutenções", "Prevenção e histórico"],
                ].map(([Icon, title, text]) => {
                  const ModuleIcon = Icon as LucideIcon;
                  return <div className="module-row" key={title as string}><IconBadge icon={ModuleIcon} /><div><strong>{title as string}</strong><small>{text as string}</small></div><Check /></div>;
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="funcionalidades" className="section features-section">
          <div className="container" data-reveal>
            <SectionTitle eyebrow="Recursos essenciais" title="Funcionalidades do Frotas ON" description="Ferramentas pensadas para simplificar a rotina, fortalecer o controle e melhorar o uso dos recursos públicos." />
            <div className="features-grid">
              {features.map(({ icon, title, text }, index) => (
                <article className={`feature-card ${index === 6 ? "feature-card-wide" : ""}`} key={title}>
                  <IconBadge icon={icon} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="feature-number">0{index + 1}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="vantagens" className="section benefits-section">
          <div className="container" data-reveal>
            <div className="benefits-heading">
              <SectionTitle eyebrow="Resultados para a gestão" title="Vantagens do Frotas ON" description="Mais eficiência na operação e mais confiança para cuidar do patrimônio do município." align="left" />
              <div className="benefits-seal"><ShieldCheck /><span><strong>Gestão responsável</strong>Controle e transparência</span></div>
            </div>
            <div className="benefits-list">
              {benefits.map(({ icon, title, text }, index) => (
                <article className="benefit-item" key={title}>
                  <span className="benefit-index">{String(index + 1).padStart(2, "0")}</span>
                  <IconBadge icon={icon} />
                  <div><h3>{title}</h3><p>{text}</p></div>
                  <CheckCircle2 className="benefit-check" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="cta-section">
          <div className="container cta-grid" data-reveal>
            <div className="cta-copy">
              <span className="cta-kicker"><span /> Demonstração personalizada</span>
              <h2>Pronto para transformar a gestão da frota pública?</h2>
              <p>Solicite uma demonstração e veja o Frotas ON em ação.</p>
              <ul>
                <li><Check /> Conheça os recursos aplicados à rotina do seu município</li>
                <li><Check /> Tire dúvidas com uma equipe especializada</li>
                <li><Check /> Descubra como ganhar controle e eficiência</li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand"><Brand inverse /><p>Gestão inteligente, eficiente e transparente para a frota do seu município.</p></div>
          <div><h3>Links rápidos</h3>{navItems.slice(0, 4).map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
          <div><h3>Contato</h3><a href="mailto:contato@frotason.com.br"><Mail /> contato@frotason.com.br</a><span><MapPin /> Atendimento em todo o Brasil</span><a href="#contato"><ArrowRight /> Solicitar contato</a></div>
          <div><h3>Frotas ON</h3><div className="public-seal"><Landmark /><span><strong>Sistema para Prefeituras</strong>Tecnologia para a gestão pública</span></div><div className="social-links"><a href="#inicio" aria-label="LinkedIn"><Linkedin /></a><a href="#inicio" aria-label="Instagram"><Instagram /></a><a href="#inicio" aria-label="Facebook"><Facebook /></a></div></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Frotas ON. Todos os direitos reservados.</span><span>Eficiência pública que se move.</span></div>
      </footer>
    </div>
  );
}