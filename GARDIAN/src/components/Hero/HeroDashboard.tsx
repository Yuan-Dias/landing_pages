import { MOCKUPS } from "@/config/assets";

const cx = (...values: Array<string | undefined | false>) =>
  values.filter(Boolean).join(" ");

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "critical" | "warning" | "stable";
}) {
  const toneClass = {
    critical: "text-critical",
    warning: "text-warning",
    stable: "text-stable",
  }[tone];

  return (
    <div className="rounded-md border border-border p-3">
      <span className={cx("block text-2xl font-extrabold", toneClass)}>{value}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

export function HeroDashboard() {
  if (MOCKUPS.dashboard) {
    return (
      <div className="overflow-hidden rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-2 shadow-lift backdrop-blur sm:p-4">
        <img
          src={MOCKUPS.dashboard}
          alt="Painel de monitoramento do Gardian"
          className="block h-auto w-full rounded-xl object-cover"
        />
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-2 shadow-lift backdrop-blur sm:p-4">
      <div className="rounded-xl bg-background p-4 text-primary shadow-soft sm:p-5">
        <div className="mb-6 flex items-center justify-between">
          <strong>Painel de monitoramento</strong>
          <span className="flex items-center gap-2 text-xs font-bold text-stable">
            <span className="size-2 rounded-full bg-stable" aria-hidden="true" />
            Ao vivo
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <Stat label="Zonas críticas" value="08" tone="critical" />
          <Stat label="Em atenção" value="17" tone="warning" />
          <Stat label="Estáveis" value="42" tone="stable" />
        </div>
        <div className="mt-5 h-32 rounded-md bg-soft p-4">
          <div className="grid h-full grid-cols-8 items-end gap-2">
            {[42, 66, 53, 78, 60, 88, 70, 95].map((height, index) => (
              <span
                key={index}
                className="rounded-t bg-accent/70"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
