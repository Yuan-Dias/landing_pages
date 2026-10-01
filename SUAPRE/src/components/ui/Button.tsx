import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function Button({
  children,
  href,
  light = false,
  type = "button",
  onClick,
}: {
  children: ReactNode;
  href?: string;
  light?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const classes = `button ${light ? "button-light" : ""}`.trim();

  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick}>
        {children}
        <ArrowRight size={16} />
      </a>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
      <ArrowRight size={16} />
    </button>
  );
}
