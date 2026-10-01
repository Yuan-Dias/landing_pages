import { Reveal } from "@/components/UI/Reveal";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { IconBadge } from "@/components/UI/IconBadge";
import { challenges } from "@/config/content";

export function Challenges() {
  return (
    <section
      id="desafios"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Cenário municipal"
            title="Os desafios da gestão municipal de riscos"
            description="Problemas que o Gardian resolve no dia a dia da sua prefeitura."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map(([Icon, title, text], i) => (
            <Reveal key={title} className="h-full">
              <article className="group h-full rounded-lg border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift">
                <div className="mb-5 flex items-start justify-between">
                  <IconBadge icon={Icon} tone="warning" />

                  <span className="text-xs font-extrabold text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-primary">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
