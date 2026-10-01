import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "light";
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
}) {
  const classes = `btn btn-${variant} ${className}`.trim();

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
