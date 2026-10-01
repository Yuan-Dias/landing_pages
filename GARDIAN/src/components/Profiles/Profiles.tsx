import { Reveal } from "@/components/UI/Reveal";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { BriefcaseBusiness, Zap, UserRound } from "lucide-react";
import { ProfileCard } from "./ProfileCard";

export function Profiles() {
  return (
    <section
      id="perfis"
      className="scroll-mt-24 bg-soft py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Colaboração"
            title="Dois perfis, um só propósito: proteger o município"
          />
        </Reveal>

        <div className="relative grid gap-8 md:grid-cols-2">
          <ProfileCard
            title="Cidadão"
            icon={UserRound}
            items={[
              "Registra ocorrências",
              "Informa sua localização",
              "Envia dados sobre a situação identificada",
              "Acompanha o atendimento da ocorrência",
            ]}
          />

          <div
            className="absolute left-1/2 top-1/2 z-10 hidden size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-soft bg-accent text-accent-foreground md:grid"
            aria-hidden="true"
          >
            <Zap size={20} />
          </div>

          <ProfileCard
            dark
            title="Técnico"
            icon={BriefcaseBusiness}
            items={[
              "Analisa as ocorrências registradas",
              "Avalia a análise da IA",
              "Valida ou rejeita a ocorrência",
              "Atualiza a situação das zonas de risco",
              "Registra ações de mitigação",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
