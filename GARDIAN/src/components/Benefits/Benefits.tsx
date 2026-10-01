import { Reveal } from "@/components/UI/Reveal";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { IconBadge } from "@/components/UI/IconBadge";
import { advantages } from "@/config/content";

export function Benefits() {
  return (
    <section
      id="vantagens"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Resultados"
            title="Vantagens do Gardian"
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {advantages.map(([Icon, title, text], i) => (
            <Reveal key={title} className="h-full">
              <article
                className={`h-full rounded-lg border border-border p-6 ${
                  i % 2 ? "bg-soft" : "bg-card"
                }`}
              >
                <IconBadge icon={Icon} />

                <h3 className="mt-5 font-extrabold text-primary">
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
