import { type ReactNode } from "react";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "light";
};

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <a className={`button button-${variant} ${className}`} {...props}>
      {children}
    </a>
  );
}
