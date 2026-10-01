import { Reveal } from "@/components/UI/Reveal";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { flow } from "@/config/content";
import { FlowTimeline } from "./FlowTimeline";

export function Flow() {
  return (
    <section className="bg-soft py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Fluxo rastreável"
            title="Como o Gardian funciona"
            description="Do registro do cidadão à decisão técnica, em um fluxo rastreável."
          />
        </Reveal>

        <Reveal>
          <FlowTimeline steps={flow} />
        </Reveal>
      </div>
    </section>
  );
}
