import { Reveal } from "@/components/UI/Reveal";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { MOCKUPS } from "@/config/assets";
import { MockupImage } from "./MockupImage";
import { RiskZoneMap } from "./RiskZoneMap";

export function RiskMap() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Monitoramento climático e territorial"
            title="Mapa das zonas de risco"
            align="left"
          />

          <p className="leading-7 text-muted-foreground">
            O mapa interativo permite localizar as zonas de risco e
            acompanhar a situação de cada área do município. As zonas são
            classificadas como críticas, em atenção ou estáveis,
            facilitando a identificação das regiões prioritárias.
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
                <span
                  className={`size-2.5 rounded-full ${color}`}
                  aria-hidden="true"
                />

                {label}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="relative">
            <MockupImage
              src={MOCKUPS.riskMap}
              alt="Mapa do Gardian com zonas municipais classificadas por risco"
              fallback={<RiskZoneMap />}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
