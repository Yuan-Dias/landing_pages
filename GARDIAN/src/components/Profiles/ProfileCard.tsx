import { LucideIcon, CheckCircle2 } from "lucide-react";
import { IconBadge } from "@/components/UI/IconBadge";

const cx = (...values: Array<string | undefined | false>) =>
  values.filter(Boolean).join(" ");

export function ProfileCard({
  title,
  icon: Icon,
  items,
  dark = false,
}: {
  title: string;
  icon: LucideIcon;
  items: string[];
  dark?: boolean;
}) {
  return (
    <article
      className={cx(
        "rounded-lg border p-7 shadow-soft",
        dark ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card",
      )}
    >
      <div className="mb-5 flex items-center gap-3">
        <IconBadge icon={Icon} />
        <h3 className="text-xl font-extrabold">{title}</h3>
      </div>
      <ul className="space-y-3 text-sm">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <CheckCircle2
              size={17}
              className={cx("mt-0.5 shrink-0", dark ? "text-live" : "text-accent")}
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
