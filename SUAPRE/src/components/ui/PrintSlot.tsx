export function PrintSlot({ label, title, src }: { label: string; title: string; src?: string }) {
  if (src) {
    return (
      <div className="print-slot print-slot-image">
        <img src={src} alt={title} loading="lazy" />
        <span className="print-caption">{title}</span>
      </div>
    );
  }

  return (
    <div className="print-slot" role="img" aria-label={`${title}. Print do sistema será adicionado aqui.`}>
      <div className="print-window">
        <div className="window-bar"><i /><i /><i /></div>
        <div className="window-body">
          <span className="window-label">{label}</span>
          <strong>{title}</strong>
          <div className="skeleton-row"><i /><i /><i /></div>
          <div className="skeleton-chart"><i /><i /><i /><i /><i /></div>
        </div>
      </div>
      <span className="print-caption">Print do sistema em breve</span>
    </div>
  );
}
