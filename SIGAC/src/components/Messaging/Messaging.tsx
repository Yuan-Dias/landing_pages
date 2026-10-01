import { MessageCircle, CheckCircle2 } from "lucide-react";

export function Messaging() {
  return (
    <section className="section features">
      <div className="container about-grid">
        <div>
          <span className="eyebrow">Mensageria e suporte</span>

          <h2>Comunicação direta pelo WhatsApp.</h2>

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

          <h3>IAra no WhatsApp</h3>

          <p>
            Orientação técnica para o cidadão, resposta rápida para a
            secretaria e menos idas e vindas no atendimento.
          </p>
        </div>
      </div>
    </section>
  );
}
