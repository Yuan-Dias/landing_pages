import { Reveal } from "@/components/UI/Reveal";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { IconBadge } from "@/components/UI/IconBadge";
import { Layers3 } from "lucide-react";

export function About() {
  return (
    <section
      id="sobre"
      className="scroll-mt-24 bg-soft py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Sobre a plataforma"
            title="O que é o Gardian?"
            align="left"
          />

          <div className="space-y-5 leading-7 text-muted-foreground">
            <p>
              O Gardian é um sistema desenvolvido para monitorar e gerenciar
              riscos municipais. Em um único painel, reúne dados
              meteorológicos, informações geológicas e a localização das
              zonas de risco, oferecendo uma visão integrada do território.
            </p>

            <p>
              A plataforma apoia o registro e a análise de ocorrências, o
              acompanhamento das áreas monitoradas e a tomada de decisão por
              técnicos e gestores, contribuindo para respostas mais rápidas
              e ações preventivas.
            </p>
          </div>

          <blockquote className="mt-8 border-l-4 border-accent bg-background p-5 text-lg font-extrabold text-primary shadow-soft">
            “Uma visão integrada do território para agir antes do
            desastre.”
          </blockquote>
        </Reveal>

        <Reveal>
          <div className="rounded-lg border border-border bg-card p-7 shadow-soft">
            <div className="mb-7 flex items-center gap-3">
              <IconBadge icon={Layers3} />

              <div>
                <h3 className="font-extrabold text-primary">
                  Camadas de informação integradas
                </h3>

                <p className="text-xs text-muted-foreground">
                  Fontes conectadas em uma única leitura
                </p>
              </div>
            </div>

            <ul className="space-y-1">
              {[
                "Dados meteorológicos em tempo real",
                "Indicadores geológicos (AdaptaBrasil)",
                "Zonas de risco georreferenciadas",
                "Ocorrências registradas pela população",
                "Ações de mitigação em andamento",
              ].map((x, i) => (
                <li
                  key={x}
                  className="flex items-center gap-3 border-b border-border py-3 last:border-0"
                >
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-soft text-[10px] font-extrabold text-accent">
                    {i + 1}
                  </span>

                  <span className="text-sm font-semibold text-primary">
                    {x}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
