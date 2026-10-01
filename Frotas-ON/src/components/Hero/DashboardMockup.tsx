import { assets } from "../../config/assets";

export function DashboardMockup() {
  return (
    <div className="dashboard-shell dashboard-image-shell" aria-label="Prévia do painel de gestão do FrotasON">
      <img
        src={assets.dashboard}
        alt="Dashboard do FrotasON com indicadores de consumo, quilometragem, abastecimentos e manutenções"
        className="dashboard-image"
      />
    </div>
  );
}
