import { assets } from "../../config/assets";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#inicio" className={`brand ${inverse ? "brand-inverse" : ""}`} aria-label="FrotasON — início">
      <img src={assets.logo} alt="FrotasON" className="brand-logo" />
    </a>
  );
}
