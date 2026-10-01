import { ReactNode } from "react";

export function RiskZoneMap() {
  return (
    <div className="grid aspect-[4/3] place-items-center overflow-hidden rounded-lg border border-border bg-[#dbeaf0] p-6">
      <div className="grid size-52 place-items-center rounded-[45%] border-8 border-critical/50 bg-stable/30 shadow-inner">
        <div className="size-24 rounded-full border-8 border-warning/70 bg-warning/30" />
      </div>
    </div>
  );
}
