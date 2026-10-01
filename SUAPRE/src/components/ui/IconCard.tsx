import { type LucideIcon } from "lucide-react";

export function IconCard({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text?: string }) {
  return (
    <article className="icon-card">
      <span className="icon-box"><Icon size={21} /></span>
      <h3>{title}</h3>
      {text && <p>{text}</p>}
    </article>
  );
}
