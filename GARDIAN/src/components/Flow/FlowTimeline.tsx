import { LucideIcon } from "lucide-react";

export function FlowTimeline({
  steps,
}: {
  steps: Array<{ icon: LucideIcon; title: string; text: string }>;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-5">
      {steps.map(({ icon: Icon, title, text }, index) => (
        <div key={title} className="relative text-center">
          <span className="mx-auto mb-4 grid size-12 place-items-center rounded-full bg-primary text-live">
            {index + 1}
          </span>
          <Icon className="mx-auto mb-3 text-accent" size={20} aria-hidden="true" />
          <h3 className="font-extrabold text-primary">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
        </div>
      ))}
    </div>
  );
}
