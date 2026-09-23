import { useState, type ReactNode } from "react";
import {
  ArrowRight, BarChart3, Boxes, Check, CheckCircle2, ChevronDown, ClipboardList,
  FileCheck2, FileText, Landmark, Menu, Network, PackageCheck, ReceiptText,
  ScrollText, ShieldCheck, ShoppingCart, Timer, Workflow, X, type LucideIcon,
} from "lucide-react";

const challenges = [
  [Network, "Baixa integração entre setores", "Secretarias, compras, licitação e financeiro precisam trabalhar com a mesma informação."],
  [FileText, "Informações dispersas", "Documentos e dados espalhados dificultam uma visão confiável do processo."],
  [Boxes, "Controles paralelos", "Planilhas e registros manuais aumentam o risco de divergências."],
  [Timer, "Prazos difíceis de acompanhar", "Vigências, etapas e entregas exigem acompanhamento contínuo."],
  [Workflow, "Retrabalho entre etapas", "A repetição de lançamentos torna o fluxo mais lento e sujeito a falhas."],
] as const;

const features = [
  [ClipboardList, "Produção e gestão de DFP, ETP e IRP"],
  [Landmark, "Integração e publicação no PNCP"],
  [FileCheck2, "Organização dos processos licitatórios e contratações"],
  [Boxes, "Controle de entrada, saída e estoque de materiais"],
  [ScrollText, "Elaboração e acompanhamento do Plano de Contratações Anual"],
  [BarChart3, "Acompanhamento da execução financeira"],
  [ReceiptText, "Gestão de atas de registro de preços e contratos"],
  [ShieldCheck, "Relatórios, usuários e rastreabilidade das operações"],
] as const;

const advantages = [
  [Network, "Gestão integrada", "Todo o ciclo das contratações em um único sistema."],
  [Workflow, "Menos retrabalho", "Reduz duplicidade de informações e controles paralelos."],
  [BarChart3, "Mais controle", "Facilita o acompanhamento de prazos, saldos e vigências."],
  [ShieldCheck, "Transparência e rastreabilidade", "Mantém o histórico completo das operações."],
  [CheckCircle2, "Decisões mais seguras", "Disponibiliza informações confiáveis para a gestão."],
] as const;

const navItems = [
  ["Desafios", "#desafios"],
  ["Sobre", "#sobre"],
  ["Funcionalidades", "#funcionalidades"],
  ["Integração", "#integracao"],
  ["Fluxo", "#fluxo-linear"],
  ["Contato", "#contato"],
];

const modules = [
  ["01", "Planejamento"],
  ["02", "Licitação"],
  ["03", "PNCP"],
  ["04", "Atas"],
  ["05", "Contratos"],
  ["06", "Financeiro"],
  ["07", "Almoxarifado"],
];

const flowSteps: [string, string][] = [
  ["PCA", "Necessidades das secretarias e Plano de Contratações Anual."],
  ["Fase preparatória", "DFP, ETP e IRP para formalizar e preparar a contratação."],
  ["Licitação", "Organização dos documentos e condução do processo."],
  ["PNCP", "Integração e publicação das informações no portal nacional."],
  ["Atas e contratos", "Gestão de vigências, saldos e movimentações contratuais."],
  ["Financeiro", "Acompanhamento dos valores e da execução por contrato."],
  ["Almoxarifado", "Recebimento, estoque, distribuição e histórico dos materiais."],
];

function Button({ children, href = "#contato", light = false }: { children: ReactNode; href?: string; light?: boolean }) {
  return (
    <a className={`button ${light ? "button-light" : ""}`} href={href}>
      {children}
      <ArrowRight size={16} />
    </a>
  );
}

function SectionTitle({ eyebrow, title, description, left = false }: { eyebrow: string; title: string; description?: string; left?: boolean }) {
  return (
    <div className={`section-title ${left ? "section-title-left" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function IconCard({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text?: string }) {
  return (
    <article className="icon-card">
      <span className="icon-box"><Icon size={21} /></span>
      <h3>{title}</h3>
      {text && <p>{text}</p>}
    </article>
  );
}

function PrintSlot({ label, title, src }: { label: string; title: string; src?: string }) {
  if (src) {
    return (
      <div className="print-slot print-slot-image">
        <img src={src} alt={title} loading="lazy" />
        <span className="print-caption">{title}</span>
      </div>
    );
  }

  return (
    <div className="print-slot" role="img" aria-label={`${title}. Print do sistema será adicionado aqui.`}>
      <div className="print-window">
        <div className="window-bar"><i /><i /><i /></div>
        <div className="window-body">
          <span className="window-label">{label}</span>
          <strong>{title}</strong>
          <div className="skeleton-row"><i /><i /><i /></div>
          <div className="skeleton-chart"><i /><i /><i /><i /><i /></div>
        </div>
      </div>
      <span className="print-caption">Print do sistema em breve</span>
    </div>
  );
}

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="page-shell">
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
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="mobile-nav">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
            <Button>Solicitar demonstração</Button>
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="kicker"><Landmark size={16} /> Gestão pública conectada</span>
              <h1>O ciclo das contratações públicas, <em>integrado.</em></h1>
              <p className="hero-lead">
                Do planejamento ao almoxarifado, o SUAPRE organiza processos, documentos, contratos e recursos em um único sistema.
              </p>
              <div className="hero-actions">
                <Button light>Conheça o SUAPRE</Button>
                <a className="text-link" href="#funcionalidades">
                  Ver funcionalidades <ChevronDown size={16} />
                </a>
              </div>
              <div className="hero-proof">
                <CheckCircle2 size={17} /> Mais controle, transparência e rastreabilidade para a gestão pública
              </div>
            </div>
            <PrintSlot
  label="VISÃO GERAL"
  title="Painel de contratações"
  src="/images/contratos_suapre.png"
/>
          </div>
        </section>

        <section id="desafios" className="section challenges">
          <div className="container">
            <SectionTitle
              eyebrow="O cenário atual"
              title="Desafios das contratações públicas"
              description="Quando cada etapa funciona isoladamente, a gestão perde tempo, visibilidade e segurança."
            />
            <div className="challenge-grid">
              {challenges.map(([Icon, title, text]) => (
                <IconCard key={title} icon={Icon} title={title} text={text} />
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="section about">
          <div className="container about-grid">
            <div>
              <SectionTitle
                left
                eyebrow="Uma visão única"
                title="O que é o SUAPRE?"
                description="Todo o ciclo das contratações públicas em um único sistema."
              />
              <p className="body-copy">
                O SUAPRE conecta planejamento, licitação, contratos, financeiro e almoxarifado em um fluxo contínuo.
                Cada área trabalha com informação atualizada, histórico preservado e processos acompanhados de ponta a ponta.
              </p>
              <div className="module-pills">
                {["Planejamento", "Licitação", "Contratos", "Financeiro", "Almoxarifado"].map((item) => (
                  <span key={item}><Check size={14} />{item}</span>
                ))}
              </div>
            </div>
            <PrintSlot
  label="MÓDULOS INTEGRADOS"
  title="Operação conectada"
  src="/images/relatorios_suapre.png"
/>
          </div>
        </section>

        <section id="funcionalidades" className="section features">
          <div className="container">
            <SectionTitle
              eyebrow="Recursos essenciais"
              title="Funcionalidades do SUAPRE"
              description="Ferramentas para simplificar a rotina, fortalecer o controle e dar visibilidade a cada etapa."
            />
            <div className="feature-grid">
              {features.map(([Icon, title]) => (
                <IconCard key={title} icon={Icon} title={title} />
              ))}
            </div>
          </div>
        </section>

        <section className="section modules">
          <div className="container">
            <SectionTitle eyebrow="Gestão por etapa" title="Cada módulo no lugar certo" />
            <div className="module-grid">
              <div>
                <PackageCheck />
                <h3>Atas e contratos</h3>
                <ul>
                  <li>Gestão de atas de registro de preços</li>
                  <li>Controle de vigências e saldos</li>
                  <li>Movimentações e histórico completo</li>
                </ul>
              </div>
              <div>
                <BarChart3 />
                <h3>Execução financeira</h3>
                <ul>
                  <li>Acompanhamento dos valores contratados</li>
                  <li>Controle de saldos disponíveis</li>
                  <li>Visão consolidada por contrato</li>
                </ul>
              </div>
              <div>
                <ShoppingCart />
                <h3>Controle de materiais</h3>
                <ul>
                  <li>Estoque atualizado e recebimentos</li>
                  <li>Distribuição aos setores</li>
                  <li>Histórico das movimentações</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="integracao" className="section integration">
          <div className="container">
            <SectionTitle
              eyebrow="Integração"
              title="Os módulos trabalham conectados."
              description="Planejamento, licitação, PNCP, atas, contratos, financeiro e almoxarifado compartilham contexto em uma visão única."
            />
            <div className="integration-map">
              <div className="integration-map-brand">
                <img src="/images/logo_suapre_icone_branco.png" alt="SUAPRE" />
                <span>SUAPRE</span>
              </div>
              {modules.map(([num, label]) => (
                <div key={num} className="integration-module">
                  <b>{num}</b>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="fluxo-linear" className="section flow-section">
          <div className="container">
            <SectionTitle
              eyebrow="Fluxo de funcionamento"
              title="Do planejamento ao almoxarifado, uma sequência rastreável."
              description="PCA, fase preparatória, licitação, PNCP, atas e contratos, financeiro e almoxarifado em uma jornada contínua."
            />
            <div className="flow-steps">
              {flowSteps.map(([title, text], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                  {index < flowSteps.length - 1 && <i aria-hidden="true">→</i>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="vantagens" className="section advantages">
          <div className="container">
            <SectionTitle
              eyebrow="Resultados para a gestão"
              title="Vantagens do SUAPRE"
              description="Mais segurança para quem planeja, executa, acompanha e decide."
            />
            <div className="advantages-grid">
              {advantages.map(([Icon, title, text]) => (
                <IconCard key={title} icon={Icon} title={title} text={text} />
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="cta">
          <div className="container cta-inner">
            <div>
              <span className="kicker">Uma gestão mais integrada começa agora</span>
              <h2>Leve mais controle para as contratações do seu município.</h2>
              <p>Conheça o SUAPRE e veja como conectar planejamento, processos, contratos e execução.</p>
            </div>
            <Button light>Solicitar demonstração</Button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/images/logo_suapre_branco.png" alt="SUAPRE" />
            <p>Sistema Integrado de Gestão Pública para planejamento, contratações, contratos e execução.</p>
          </div>
          <div>
            <h3>Navegação</h3>
            {navItems.slice(0, 4).map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </div>
          <div>
            <h3>Contato</h3>
            <a href="mailto:contato@suapre.com.br">contato@suapre.com.br</a>
            <span>Atendimento para órgãos públicos</span>
            <a href="#contato">Solicitar demonstração</a>
          </div>
          <div>
            <h3>Conformidade</h3>
            <div className="footer-seal">
              <ShieldCheck size={19} />
              <span><strong>Gestão pública</strong>Transparência e rastreabilidade</span>
            </div>
            <a href="#inicio">Voltar ao início ↑</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 SUAPRE. Todos os direitos reservados.</span>
          <span>Contratações públicas conectadas.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;