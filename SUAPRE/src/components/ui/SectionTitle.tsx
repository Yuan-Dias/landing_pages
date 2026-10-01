export function SectionTitle({ eyebrow, title, description, left = false }: { eyebrow: string; title: string; description?: string; left?: boolean }) {
  return (
    <div className={`section-title ${left ? "section-title-left" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
