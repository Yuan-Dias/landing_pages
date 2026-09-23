import {
  Activity,
  AlertCircle,
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Database,
  FileText,
  FileX,
  Landmark,
  MapPin,
  Menu,
  MessageCircle,
  Printer,
  ShieldCheck,
  Smartphone,
  Timer,
  WifiOff,
  X,
  type LucideIcon,
} from "lucide-react";
import {
  useState,
  type ReactNode,
  type ChangeEvent,
  type FormEvent,
} from "react";

/* ---------------------------------------------------------
   CONFIGURAÇÃO DE CONTATO
   --------------------------------------------------------- */

const WHATSAPP_NUMBER = "5573999321323";
const CONTACT_EMAIL = "suporte@14tech.com.br";

/* ---------------------------------------------------------
   DADOS
   --------------------------------------------------------- */

const navItems = [
  ["Desafios", "#desafios"],
  ["Sobre", "#sobre"],
  ["Vantagens", "#vantagens"],
  ["Recursos", "#recursos"],
  ["Contato", "#contato"],
];

const challenges: [LucideIcon, string, string][] = [
  [
    FileX,
    "Acesso difícil à informação",
    "Dificuldade de acesso às informações dos requerimentos.",
  ],
  [
    BarChart3,
    "Ausência de indicadores",
    "Falta de indicadores ambientais na fiscalização e no licenciamento.",
  ],
  [
    Timer,
    "Acompanhamento comprometido",
    "Complicações no acompanhamento dos processos e de suas pendências.",
  ],
  [
    AlertCircle,
    "Renovações esquecidas",
    "Falta de proatividade na renovação das licenças.",
  ],
  [
    Printer,
    "Uso excessivo de papel",
    "Processos físicos tornam o trâmite lento e sujeito a falhas.",
  ],
];

const advantages = [
  "Centralização dos processos",
  "Acesso rápido à informação",
  "Controle de indicadores",
  "Celeridade nos trâmites das licenças",
  "Monitoramento das condicionantes",
  "Panorama das arrecadações",
  "Registro de fiscalizações e vistorias offline",
  "Integração com GeoBahia, MapBiomas e SIRGAS 2000",
  "Notificações rápidas no WhatsApp",
  "Funcionamento em conjunto do consórcio",
];

const onlineFeatures: [LucideIcon, string, string][] = [
  [
    BarChart3,
    "Dashboards em tempo real",
    "Indicadores atualizados conforme o processo avança.",
  ],
  [
    MapPin,
    "Mapa dos processos",
    "Localização geográfica dos requerimentos e vistorias.",
  ],
  [
    Activity,
    "Movimento registrado",
    "Histórico completo para facilitar a gestão.",
  ],
  [
    FileText,
    "Emissão de documentos",
    "Licenças, notificações e ofícios gerados pelo sistema.",
  ],
  [
    ClipboardList,
    "Controle de processos",
    "Triagem, pendências e andamento em um só painel.",
  ],
  [
    Database,
    "Dados centralizados",
    "Uma base única para todas as secretarias e consórcios.",
  ],
];

/* ---------------------------------------------------------
   BOTÃO
   --------------------------------------------------------- */

function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "light";
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
}) {
  const classes = `btn btn-${variant} ${className}`.trim();

  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick}>
        {children}
        <ArrowRight size={16} />
      </a>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
      <ArrowRight size={16} />
    </button>
  );
}

/* ---------------------------------------------------------
   CARD DE ÍCONE
   --------------------------------------------------------- */

function IconCard({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <article className="icon-card">
      <span className="icon-box">
        <Icon size={22} />
      </span>

      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

/* ---------------------------------------------------------
   FORMULÁRIO DE CONTATO
   --------------------------------------------------------- */

function ContactForm() {
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message =
      `Olá! Gostaria de solicitar uma demonstração do SIGAC.\n\n` +
      `*Nome:* ${form.name}\n` +
      `*E-mail:* ${form.email}\n` +
      `*Cidade/Órgão:* ${form.organization}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");

    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={28} />

        <strong>Solicitação encaminhada!</strong>

        <p>
          Abrimos o WhatsApp com sua mensagem preenchida. Se a janela não abriu,
          verifique o bloqueador de pop-ups.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>Nome</span>

        <input
          required
          name="name"
          autoComplete="name"
          placeholder="Seu nome"
          value={form.name}
          onChange={handleChange}
        />
      </label>

      <label>
        <span>E-mail institucional</span>

        <input
          required
          name="email"
          type="email"
          autoComplete="email"
          placeholder="nome@orgao.gov.br"
          value={form.email}
          onChange={handleChange}
        />
      </label>

      <label>
        <span>Cidade / órgão</span>

        <input
          required
          name="organization"
          autoComplete="organization"
          placeholder="Prefeitura, secretaria ou consórcio"
          value={form.organization}
          onChange={handleChange}
        />
      </label>

      <Button type="submit" variant="light">
        Enviar pelo WhatsApp
      </Button>

      <small>
        Ao enviar, você será redirecionado ao WhatsApp com a mensagem
        preenchida.
      </small>
    </form>
  );
}

/* ---------------------------------------------------------
   COMPONENTE PRINCIPAL
   --------------------------------------------------------- */

export function Sigac() {
  const [open, setOpen] = useState(false);

  return (
    <div className="page-shell">
      {/* -----------------------------------------------------
          HEADER
      ----------------------------------------------------- */}

      <header className="site-header">
        <div className="container header-inner">
          <a
            className="brand"
            href="#inicio"
            aria-label="SIGAC início"
          >
            <img src="/images/icone_sigac.png" alt="SIGAC" />
          </a>

          <nav
            className="nav"
            aria-label="Navegação principal"
          >
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}

            <Button
              variant="outline"
              href="#contato"
            >
              Falar com a equipe
            </Button>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label={
              open ? "Fechar menu" : "Abrir menu"
            }
            aria-expanded={open}
            type="button"
          >
            {open ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>

        {open && (
          <nav
            className="mobile-nav"
            aria-label="Navegação móvel"
          >
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
              >
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

      {/* -----------------------------------------------------
          CONTEÚDO
      ----------------------------------------------------- */}

      <main>
        {/* HERO */}

        <section
          id="inicio"
          className="hero"
        >
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="tag">
                <Landmark size={14} />
                Gestão ambiental compartilhada
              </span>

              <h1>
                Todo o licenciamento ambiental, da solicitação do cidadão à{" "}
                <em>emissão da licença.</em>
              </h1>

              <p className="hero-lead">
                O SIGAC organiza a triagem, os documentos e a comunicação em
                tempo real entre o requerente e a secretaria — com suporte à
                fiscalização, registro de multas e funcionamento em conjunto
                do consórcio.
              </p>

              <div className="hero-actions">
                <Button href="#contato">
                  Solicitar demonstração
                </Button>

                <a
                  className="text-link"
                  href="#sobre"
                >
                  Conhecer o SIGAC
                  <ChevronDown size={16} />
                </a>
              </div>

              <p className="hero-proof">
                <CheckCircle2 size={16} />
                Integrado ao GeoBahia, MapBiomas e SIRGAS 2000
              </p>
            </div>

            <div className="hero-visual">
              <div className="hero-visual-frame">
                <div className="hero-visual-bar">
                  <span />
                  <span />
                  <span />
                </div>

                <img
                  src="/images/dashboard_sigac.png"
                  alt="Painel do SIGAC com dashboards, mapa de processos e indicadores ambientais"
                  loading="eager"
                />
              </div>

              <span className="hero-visual-caption">
                Painel do SIGAC
              </span>
            </div>
          </div>
        </section>

        {/* DESAFIOS */}

        <section
          id="desafios"
          className="section features"
        >
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">
                Como surgiu a necessidade
              </span>

              <h2>
                Um cenário que pedia mudança
              </h2>

              <p>
                A gestão ambiental pública esbarrava em processos dispersos,
                falta de indicadores e burocracia em papel. O SIGAC nasceu
                para resolver isso.
              </p>
            </div>

            <div className="feature-grid">
              {challenges.map(
                ([Icon, title, text]) => (
                  <IconCard
                    key={title}
                    icon={Icon}
                    title={title}
                    text={text}
                  />
                ),
              )}
            </div>
          </div>
        </section>

        {/* SOBRE */}

        <section
          id="sobre"
          className="section"
        >
          <div className="container about-grid">
            <div>
              <span className="eyebrow">
                O que é o SIGAC
              </span>

              <h2>
                Do protocolo do cidadão à licença emitida.
              </h2>

              <p className="body-copy">
                O SIGAC acompanha todo o processo de licenciamento ambiental,
                desde a solicitação realizada pelo cidadão até a emissão da
                licença. A plataforma permite a triagem das solicitações, a
                organização dos dados e documentos necessários e a comunicação,
                em tempo real, entre o requerente e a secretaria.
              </p>

              <p className="body-copy">
                O sistema também auxilia nas atividades de fiscalização e no
                registro de eventuais multas, garantindo rastreabilidade de
                ponta a ponta.
              </p>

              <div className="module-pills">
                {[
                  "Triagem",
                  "Licenciamento",
                  "Fiscalização",
                  "Multas",
                  "Comunicação",
                ].map((item) => (
                  <span key={item}>
                    <CheckCircle2 size={14} />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="card">
              <BarChart3 size={28} />

              <h3>
                Visão consolidada do processo
              </h3>

              <p>
                Requerente e secretaria compartilham o mesmo painel: status,
                pendências, documentos e prazos, em tempo real.
              </p>
            </div>
          </div>
        </section>

        {/* VANTAGENS */}

        <section
          id="vantagens"
          className="section features"
        >
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">
                Vantagens do SIGAC
              </span>

              <h2>
                Mais controle, celeridade e integração
              </h2>

              <p>
                Um conjunto de recursos pensado para a rotina real de
                secretarias e consórcios ambientais.
              </p>
            </div>

            <div
              className="module-pills"
              style={{ justifyContent: "center" }}
            >
              {advantages.map((item) => (
                <span key={item}>
                  <CheckCircle2 size={14} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SISTEMA 100% ONLINE */}

        <section
          id="recursos"
          className="section"
        >
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">
                Sistema 100% online
              </span>

              <h2>
                Informação viva, disponível a qualquer momento
              </h2>

              <p>
                Sem instalação, sem servidor local. Tudo o que a equipe
                precisa, na nuvem.
              </p>
            </div>

            <div className="feature-grid">
              {onlineFeatures.map(
                ([Icon, title, text]) => (
                  <IconCard
                    key={title}
                    icon={Icon}
                    title={title}
                    text={text}
                  />
                ),
              )}
            </div>
          </div>
        </section>

        {/* MENSAGERIA E WHATSAPP */}

        <section className="section features">
          <div className="container about-grid">
            <div>
              <span className="eyebrow">
                Mensageria e suporte
              </span>

              <h2>
                Comunicação direta pelo WhatsApp.
              </h2>

              <p className="body-copy">
                Para facilitar a comunicação, o sistema conta com notificação
                em tempo real, que informa aos requerentes o andamento do seu
                processo, agilizando os trâmites para que não se percam prazos.
              </p>

              <p className="body-copy">
                A <strong>IAra</strong> é um agente de inteligência artificial
                do SIGAC com qualificação técnica para orientar a população pelo
                WhatsApp sobre os requerimentos.
              </p>

              <div className="module-pills">
                {[
                  "Notificação em tempo real",
                  "Andamento do processo",
                  "IAra — IA técnica",
                ].map((item) => (
                  <span key={item}>
                    <CheckCircle2 size={14} />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="card">
              <MessageCircle size={28} />

              <h3>
                IAra no WhatsApp
              </h3>

              <p>
                Orientação técnica para o cidadão, resposta rápida para a
                secretaria e menos idas e vindas no atendimento.
              </p>
            </div>
          </div>
        </section>

        {/* APLICATIVO PARA TÉCNICOS */}

        <section className="section modules">
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">
                Aplicativo para técnicos
              </span>

              <h2>
                Funcionamento offline em campo.
              </h2>

              <p>
                Muitas vezes, os técnicos atuam em áreas que não têm sinal de
                internet. Por isso, o SIGAC conta com um app mobile com suporte
                offline para facilitar as vistorias e fiscalizações.
              </p>
            </div>

            <div className="module-grid">
              <div>
                <WifiOff size={28} />

                <h3>
                  Vistorias sem sinal
                </h3>

                <p>
                  Registre fiscalizações, fotos e observações mesmo em áreas
                  remotas. Os dados sincronizam quando a conexão voltar.
                </p>
              </div>

              <div>
                <Smartphone size={28} />

                <h3>
                  App dedicado ao técnico
                </h3>

                <p>
                  Interface pensada para o trabalho de campo, com os dados do
                  processo sempre à mão.
                </p>
              </div>

              <div>
                <ShieldCheck size={28} />

                <h3>
                  Rastreabilidade garantida
                </h3>

                <p>
                  Cada vistoria registrada em campo fica vinculada ao processo
                  e ao histórico do empreendimento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA + FORMULÁRIO */}

        <section
          id="contato"
          className="cta"
        >
          <div className="container cta-grid">
            <div className="cta-copy">
              <span className="tag">
                <Building2 size={14} />
                Para prefeituras e consórcios
              </span>

              <h2>
                Leve a gestão ambiental do seu município para o digital.
              </h2>

              <p>
                Conheça o SIGAC e veja como centralizar licenças, fiscalizações,
                multas e comunicação em uma única plataforma.
              </p>

              <ul className="cta-list">
                <li>
                  <CheckCircle2 size={16} />
                  Conheça os recursos aplicados à rotina do seu órgão
                </li>

                <li>
                  <CheckCircle2 size={16} />
                  Tire dúvidas com uma equipe especializada
                </li>

                <li>
                  <CheckCircle2 size={16} />
                  Descubra como ganhar celeridade nos trâmites
                </li>
              </ul>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      {/* -----------------------------------------------------
          FOOTER
      ----------------------------------------------------- */}

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <img
                src="/images/icone_sigac.png"
                alt="SIGAC"
              />
            </div>

            <p>
              Sistema Integrado de Gestão Ambiental Compartilhada para
              prefeituras e consórcios.
            </p>
          </div>

          <div>
            <h4>Navegação</h4>

            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>

          <div>
            <h4>Contato</h4>

            <a href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>

            <span>
              Atendimento a órgãos públicos
            </span>
          </div>

          <div>
            <h4>Conformidade</h4>

            <div className="footer-seal">
              <Landmark size={18} />

              <span>
                Integração com GeoBahia, MapBiomas e SIRGAS 2000
              </span>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © 2026 SIGAC. Todos os direitos reservados.
          </span>

          <span>
            Gestão ambiental compartilhada.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Sigac;