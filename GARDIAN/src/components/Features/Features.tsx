import { Radio, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/UI/Reveal";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { IconBadge } from "@/components/UI/IconBadge";
import { Button } from "@/components/ui/button";
import { features } from "@/config/content";

export function Features() {
  return (
    <section
      id="funcionalidades"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Recursos"
            title="Funcionalidades do Gardian"
            description="Tecnologia aplicada à prevenção e resposta a riscos municipais."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([Icon, title, text]) => (
            <Reveal key={title} className="h-full">
              <article className="h-full rounded-lg border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift">
                <IconBadge icon={Icon} tone="live" />

                <h3 className="mt-5 font-extrabold text-primary">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {text}
                </p>
              </article>
            </Reveal>
          ))}

          <Reveal className="h-full md:col-span-2 lg:col-span-1">
            <article className="flex h-full flex-col justify-between gap-6 rounded-lg bg-primary p-7 text-primary-foreground shadow-soft">
              <Radio
                className="text-live"
                size={30}
                aria-hidden="true"
              />

              <div>
                <p className="text-xl font-extrabold">
                  Prevenção começa com informação conectada.
                </p>

                <a
                  href="#contato"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-live hover:underline"
                >
                  Ver o Gardian em ação
                  <ChevronRight
                    size={17}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
