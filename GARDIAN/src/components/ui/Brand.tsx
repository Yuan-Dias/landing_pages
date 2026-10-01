import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { BRAND_LOGO_SRC, LOGO_ALT } from "@/config/assets";

const cx = (...values: Array<string | undefined | false>) =>
  values.filter(Boolean).join(" ");

export function Brand({ inverse = false }: { inverse?: boolean }) {
  const [logoFailed, setLogoFailed] = useState(false);
  const showLogo = Boolean(BRAND_LOGO_SRC) && !logoFailed;

  return (
      <a
        href="#inicio"
        aria-label={`${LOGO_ALT} - início`}
        className={cx(
          "inline-flex items-center gap-2 text-lg font-extrabold transition-opacity hover:opacity-90",
          inverse ? "text-primary-foreground" : "text-primary",
        )}
      >
      {showLogo ? (
        <img
          src={BRAND_LOGO_SRC as string}
          alt={LOGO_ALT}
          className="h-10 w-auto max-w-44 object-contain"
          onError={() => setLogoFailed(true)}
        />
      ) : (
        <span
          className="grid size-9 place-items-center rounded-md bg-live text-primary"
          aria-hidden="true"
        >
          <ShieldCheck size={21} />
        </span>
      )}
      {!showLogo && <span className="leading-none">{LOGO_ALT}</span>}
    </a>
  );
}
