import { ReactNode } from "react";

const cx = (...values: Array<string | undefined | false>) =>
  values.filter(Boolean).join(" ");

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cx("mb-12", align === "left" ? "text-left" : "mx-auto max-w-3xl text-center")}>
      {eyebrow && (
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-extrabold leading-tight text-primary sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-7 text-muted-foreground">{description}</p>}
    </div>
  );
}
