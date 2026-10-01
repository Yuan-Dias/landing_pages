import { PackageCheck, BarChart3, ShoppingCart } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";

export function Modules() {
  return (
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
  );
}
