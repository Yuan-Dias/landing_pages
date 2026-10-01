import { BarChart3, CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="section">
      <div className="container about-grid">
        <div>
          <span className="eyebrow">O que é o SIGAC</span>

          <h2>Do protocolo do cidadão à licença emitida.</h2>

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

          <h3>Visão consolidada do processo</h3>

          <p>
            Requerente e secretaria compartilham o mesmo painel: status,
            pendências, documentos e prazos, em tempo real.
          </p>
        </div>
      </div>
    </section>
  );
}
