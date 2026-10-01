import { type LucideIcon } from "lucide-react";

export function IconCard({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <article className="icon-card">
      <span className="icon-box">
        <Icon size={22} />
      </span>

      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
