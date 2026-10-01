import { LucideIcon } from "lucide-react";

const cx = (...values: Array<string | undefined | false>) =>
  values.filter(Boolean).join(" ");

export function IconBadge({
  icon: Icon,
  tone = "default",
}: {
  icon: LucideIcon;
  tone?: "default" | "warning" | "live";
}) {
  const toneClass =
    tone === "warning"
      ? "bg-warning/20 text-warning"
      : tone === "live"
        ? "bg-live/20 text-accent"
        : "bg-soft text-accent";

  return (
    <span className={cx("grid size-11 shrink-0 place-items-center rounded-md", toneClass)} aria-hidden="true">
      <Icon size={21} />
    </span>
  );
}
