import { WifiOff, Smartphone, ShieldCheck } from "lucide-react";

export function MobileApp() {
  return (
    <section className="section modules">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Aplicativo para técnicos</span>

          <h2>Funcionamento offline em campo.</h2>

          <p>
            Muitas vezes, os técnicos atuam em áreas que não têm sinal de
            internet. Por isso, o SIGAC conta com um app mobile com suporte
            offline para facilitar as vistorias e fiscalizações.
          </p>
        </div>

        <div className="module-grid">
          <div>
            <WifiOff size={28} />

            <h3>Vistorias sem sinal</h3>

            <p>
              Registre fiscalizações, fotos e observações mesmo em áreas
              remotas. Os dados sincronizam quando a conexão voltar.
            </p>
          </div>

          <div>
            <Smartphone size={28} />

            <h3>App dedicado ao técnico</h3>

            <p>
              Interface pensada para o trabalho de campo, com os dados do
              processo sempre à mão.
            </p>
          </div>

          <div>
            <ShieldCheck size={28} />

            <h3>Rastreabilidade garantida</h3>

            <p>
              Cada vistoria registrada em campo fica vinculada ao processo
              e ao histórico do empreendimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
